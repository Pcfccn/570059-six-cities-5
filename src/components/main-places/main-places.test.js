import React from "react";
import {AuthorizationStatus, SortType} from "../../constants";
import {MainPlaces} from "./main-places";
import configureMockStore from 'redux-mock-store';
import {Provider} from "react-redux";
import {Router} from "react-router-dom";
import browserHistory from "../../brouser-history";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";

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

configure({adapter: new Adapter()});

let mockState;
beforeEach(() => {
  mockState = {
    USER: {
      authorizationStatus: AuthorizationStatus.AUTH,
      email: `sdf@mail.ri`
    },
    STATE: {
      city: `Amsterdam`,
      enteredOffer: {
        location: getOffersMock(1).location,
        id: getOffersMock(1).id,
      },
      sortType: SortType.POPULAR_DESC,
    },
    DATA: {
      offers: getOffersMock(5)
    }
  };
});

it(`Should MainPlaces render correctly`, () => {
  const div = global.document.createElement(`div`);
  global.document.body.appendChild(div);

  const mockStore = configureMockStore();
  const store = mockStore(mockState);
  const wrapper = mount(
      <Provider store={store}>
        <Router history={browserHistory}>
          <MainPlaces
            offers={getOffersMock(5)}
            city={`Amsterdam`}
            enteredOfferLocation={[]}
            enteredOfferId={1}
            sortType={`type`}
          />
        </Router>
      </Provider>,
      {attachTo: div});

  expect(toJson(wrapper)).toMatchSnapshot();
});
