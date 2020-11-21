import React from "react";
import {Provider} from "react-redux";
import renderer from "react-test-renderer";
import {AuthorizationStatus, SortType} from "../../constants";
import {Main} from "./main";
import configureMockStore from 'redux-mock-store';
import {Router} from "react-router-dom";
import browserHistory from "../../brouser-history";

const offers = [
  {
    id: 1,
    city: `Amsterdam`,
    reviews: [2134, 2135],
    image: [`/img/apartment-01.jpg`, `/img/apartment-02.jpg`, `/img/apartment-03.jpg`, `/img/room.jpg`, `/img/studio-01.jpg`, `/img/studio-photos.jpg`],
    isPremium: false,
    isInBookmarks: true,
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
      pro: true,
      description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.
      The building is green and from 18th century.`,
    },
    location: [52.3909553943508, 4.85309666406198],
    previewImage: `/img/avatar-angelina.jpg`,
    cityLocation: [52.369553943508, 4.85309666406198],
    cityZoom: 10,
  },
  {
    id: 2,
    city: `Amsterdam`,
    reviews: [2136, 2137, 2138],
    image: [`/img/apartment-01.jpg`, `/img/apartment-02.jpg`, `/img/apartment-03.jpg`, `/img/room.jpg`, `/img/studio-01.jpg`, `/img/studio-photos.jpg`],
    isPremium: false,
    isInBookmarks: false,
    name: `Awful & luxurious studio`,
    type: `Studio`,
    bedrooms: 0,
    adults: 2,
    rating: 3,
    price: {
      value: 16543234,
      period: `month`,
    },
    inside: [],
    host: {
      avatar: `/img/avatar-angelina.jpg`,
      name: `Anaina`,
      pro: false,
      description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.
      The building is green and from 18th century.
      An independent House, strategically located between Rembrand Square and National Opera,
      but where the bustle of the city comes to rest in this alley flowery and colorful.
      A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.
      The building is green and from 18th century.
      An independent House, strategically located between Rembrand Square and National Opera,
      but where the bustle of the city comes to rest in this alley flowery and colorful.
      A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.
      The building is green and from 18th century.
      An independent House, strategically located between Rembrand Square and National Opera,
      but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    },
    location: [52.369553943508, 4.85309666406198],
    previewImage: `/img/avatar-angelina.jpg`,
    cityLocation: [52.369553943508, 4.85309666406198],
    cityZoom: 10,
  }
];

const mockStore = configureMockStore();
let store;
beforeEach(() => {
  store = mockStore({
    USER: {
      authorizationStatus: AuthorizationStatus.AUTH,
      email: `sdf@mail.ri`
    },
    STATE: {
      city: `Amsterdam`,
      enteredOffer: {
        location: [0, 0],
        id: 1,
      },
      sortType: SortType.POPULAR_DESC,
    },
    DATA: {
      offers
    }
  });
});

it(`Should Main render correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={store}>
          <Router history={browserHistory}>
            <Main
              offers={offers}
              city={`Amsterdam`}
            />
          </Router>
        </Provider>, {
          createNodeMock: () => {
            return {};
          }}
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
