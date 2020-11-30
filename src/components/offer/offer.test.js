import React from "react";
import {Provider} from "react-redux";
import {Router} from "react-router-dom";
import browserHistory from "../../brouser-history";
import {AuthorizationStatus, CommentSendingStatus} from "../../constants";
import {Offer} from "./Offer";
import configureMockStore from 'redux-mock-store';
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
const noop = () => {};

configure({adapter: new Adapter()});

let mockState;
beforeEach(() => {
  mockState = {
    USER: {
      authorizationStatus: AuthorizationStatus.AUTH,
      email: `sdf@mail.ri`
    },
    STATE: {
      userComment: {
        rating: `5`,
        text: `xyyyyyyyyy`,
      },
      commentSendingStatus: CommentSendingStatus.DONE,
    },
  };
});

describe(`offer`, () => {
  it(`Should render correctly`, () => {
    const div = global.document.createElement(`div`);
    global.document.body.appendChild(div);

    const mockStore = configureMockStore();
    const store = mockStore(mockState);
    const wrapper = mount(
        <Provider store={store}>
          <Router history={browserHistory}>
            <Offer
              loadOfferInfo={noop}
              offerProps={{match: {params: {id: 1}}}}
              authorizationStatus={AuthorizationStatus.AUTH}
              offers={getOffersMock(2)}
              comments={[]}
              nearbyOffers={[getOffersMock(1)]}
            />
          </Router>
        </Provider>,
        {attachTo: div});

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
