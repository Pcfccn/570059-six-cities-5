import React from "react";
import {Provider} from "react-redux";
import {Router} from "react-router-dom";
import renderer from "react-test-renderer";
import browserHistory from "../../brouser-history";
import {OfferCardClassName} from "../../constants";
import OfferCard from "./offer-card";
import configureMockStore from 'redux-mock-store';

const getOffersMock = (count) => {
  const templateOffers = Array(count)
    .fill(``)
    .map((_, index) => {
      return {
        id: index + 1,
        city: `Amsterdam`,
        reviews: [index + 2134, index + 2135],
        image: [`/img/apartment-01.jpg`, `/img/apartment-02.jpg`, `/img/apartment-03.jpg`, `/img/room.jpg`, `/img/studio-01.jpg`, `/img/studio-photos.jpg`],
        isPremium: Boolean(Math.random()),
        isInBookmarks: Boolean(Math.random()),
        name: `Beautiful & luxurious studio`,
        type: `Apartament`,
        bedrooms: 3,
        adults: 4,
        rating: 3.5,
        price: {
          value: 1234,
          period: `night`,
        },
        inside: [`Wi-Fi`, `Washing machine`, `Towels`, `Heating`, `Coffee machine`, `Baby seat`, `Kitchen`,
          `Dishwasher`, `whatewer you want`],
        host: {
          avatar: `/img/avatar-angelina.jpg`,
          name: `Anagelina`,
          pro: Boolean(Math.random()),
          description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.
          The building is green and from 18th century.`,
        },
        location: [52.3909553943508, 4.85309666406198],
        previewImage: `/img/avatar-angelina.jpg`,
        cityLocation: [52.369553943508, 4.85309666406198],
        cityZoom: 10,
      };
    });

  if (count === 1) {
    const [oneOffer] = templateOffers;
    return oneOffer;
  }

  return templateOffers;
};
const noop = () => {};

let mockState;
beforeEach(() => {
  mockState = {

  };
});

describe(`OfferCard`, () => {
  it(`Should render corectly`, () => {
    const mockStore = configureMockStore();
    const store = mockStore(mockState);
    const tree = renderer
    .create(
        <Provider store={store}>
          <Router history={browserHistory}>
            <OfferCard
              offer={getOffersMock(1)}
              className={OfferCardClassName.CITIES_PLACE}
              onMouseEnterCard={noop}
            />
          </Router>
        </Provider>)
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});