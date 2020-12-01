import {ActionType, ApiURL} from "../../../constants";
import {createAPI} from "../../../services/api";
import {ApiActionCreator} from "../../api-actions";
import {offersData} from "./offers-data";
import MockAdapter from "axios-mock-adapter";

const offers = [
  {
    "city": {
      "name": `Cologne`,
      "location": {
        "latitude": 50.938361,
        "longitude": 6.959974,
        "zoom": 13
      }
    },
    "preview_image": `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/14.jpg`,
    "images": [
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/15.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/16.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/9.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/4.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/19.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/14.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/3.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/2.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/11.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/1.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/17.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/5.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/13.jpg`
    ],
    "title": `The house among olive `,
    "is_favorite": false,
    "is_premium": false,
    "rating": 3.8,
    "type": `house`,
    "bedrooms": 3,
    "max_adults": 4,
    "price": 493,
    "goods": [
      `Laptop friendly workspace`,
      `Washer`,
      `Towels`,
      `Fridge`,
      `Air conditioning`,
      `Baby seat`,
      `Breakfast`
    ],
    "host": {
      "id": 25,
      "name": `Angelina`,
      "is_pro": true,
      "avatar_url": `img/avatar-angelina.jpg`
    },
    "description": `Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.`,
    "location": {
      "latitude": 50.957361,
      "longitude": 6.9509739999999995,
      "zoom": 16
    },
    "id": 1
  },
  {
    "city": {
      "name": `Brussels`,
      "location": {
        "latitude": 50.846557,
        "longitude": 4.351697,
        "zoom": 13
      }
    },
    "preview_image": `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/8.jpg`,
    "images": [
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/3.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/11.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/20.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/14.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/7.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/13.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/19.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/18.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/16.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/8.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/15.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/9.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/4.jpg`
    ],
    "title": `Amazing and Extremely Central Flat`,
    "is_favorite": false,
    "is_premium": false,
    "rating": 4.3,
    "type": `apartment`,
    "bedrooms": 3,
    "max_adults": 8,
    "price": 323,
    "goods": [
      `Towels`,
      `Baby seat`,
      `Laptop friendly workspace`,
      `Dishwasher`,
      `Washing machine`,
      `Air conditioning`,
      `Washer`,
      `Coffee machine`,
      `Breakfast`,
      `Fridge`
    ],
    "host": {
      "id": 25,
      "name": `Angelina`,
      "is_pro": true,
      "avatar_url": `img/avatar-angelina.jpg`
    },
    "description": `This is a place for dreamers to reset, reflect, and create. Designed with a 'slow' pace in mind, our hope is that you enjoy every part of your stay; from making local coffee by drip in the morning, choosing the perfect record to put on as the sun sets.`,
    "location": {
      "latitude": 50.839557,
      "longitude": 4.346697,
      "zoom": 16
    },
    "id": 2
  }
];
const adaptedOffers = {
  comments: [],
  numberOfComments: 0,
  nearbyOffers: [],
  offers: [
    {
      id: 1,
      city: `Cologne`,
      cityLocation: [50.938361, 6.959974],
      cityZoom: 13,
      image: [
        `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/15.jpg`,
        `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/16.jpg`,
        `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/9.jpg`,
        `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg`,
        `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/4.jpg`,
        `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/19.jpg`,
        `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/14.jpg`,
        `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/3.jpg`,
        `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/2.jpg`,
        `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/11.jpg`,
        `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/1.jpg`,
        `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/17.jpg`,
        `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/5.jpg`,
        `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/13.jpg`
      ],
      previewImage: `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/14.jpg`,
      isPremium: false,
      isInBookmarks: false,
      name: `The house among olive `,
      type: `house`,
      bedrooms: 3,
      adults: 4,
      rating: 3.8,
      price: {value: 493, period: `night`},
      inside: [
        `Laptop friendly workspace`,
        `Washer`,
        `Towels`,
        `Fridge`,
        `Air conditioning`,
        `Baby seat`,
        `Breakfast`
      ],
      host: {
        id: 25,
        avatar: `img/avatar-angelina.jpg`,
        name: `Angelina`,
        pro: true,
        description: `Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.`},
      location: [50.957361, 6.9509739999999995],
      zoom: 16
    },
    {
      id: 2,
      city: `Brussels`,
      cityLocation: [50.846557, 4.351697],
      cityZoom: 13,
      image: [
        `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/3.jpg`,
        `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg`,
        `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/11.jpg`,
        `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/20.jpg`,
        `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/14.jpg`,
        `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/7.jpg`,
        `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/13.jpg`,
        `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/19.jpg`,
        `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/18.jpg`,
        `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/16.jpg`,
        `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/8.jpg`,
        `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/15.jpg`,
        `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/9.jpg`,
        `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/4.jpg`
      ],
      previewImage: `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/8.jpg`,
      isPremium: false,
      isInBookmarks: false,
      name: `Amazing and Extremely Central Flat`,
      type: `apartment`,
      bedrooms: 3,
      adults: 8,
      rating: 4.3,
      price: {value: 323, period: `night`},
      inside: [
        `Towels`,
        `Baby seat`,
        `Laptop friendly workspace`,
        `Dishwasher`,
        `Washing machine`,
        `Air conditioning`,
        `Washer`,
        `Coffee machine`,
        `Breakfast`,
        `Fridge`
      ],
      host: {
        id: 25,
        avatar: `img/avatar-angelina.jpg`,
        name: `Angelina`,
        pro: true,
        description: `This is a place for dreamers to reset, reflect, and create. Designed with a 'slow' pace in mind, our hope is that you enjoy every part of your stay; from making local coffee by drip in the morning, choosing the perfect record to put on as the sun sets.`
      },
      location: [50.839557, 4.346697],
      zoom: 16
    }
  ],
  favorites: [],
};

const api = createAPI(() => {});

describe(`offer-data reducer work correctly`, () => {
  it(`Should return initial store without parametrs`, () => {
    expect(offersData(void 0, {})).toEqual({
      offers: [],
      comments: [],
      nearbyOffers: [],
      favorites: [],
      numberOfComments: 0,
    });
  });

  it(`should update offers by load`, () => {
    expect(offersData(void 0, {
      type: ActionType.LOAD_OFFERS,
      payload: offers,
    })).toEqual(
        adaptedOffers
    );
  });

  it(`should update ONE offer by load offer`, () => {
    expect(offersData(void 0, {
      type: ActionType.LOAD_ONE_OFFER,
      payload: offers[0],
    })).toEqual({
      comments: [],
      favorites: [],
      nearbyOffers: [],
      numberOfComments: 0,
      offers: [],
    });
  });

  it(`should update comments by load comments`, () => {
    expect(offersData(void 0, {
      type: ActionType.LOAD_COMMENTS,
      payload: [{}, {}],
    })).toEqual({
      comments: [{}, {}],
      nearbyOffers: [],
      numberOfComments: 2,
      offers: [],
      favorites: []
    });
  });

  it(`should update nearby offer by load`, () => {
    expect(offersData(void 0, {
      type: ActionType.LOAD_NEARBY_OFFERS,
      payload: offers,
    })).toEqual({
      comments: [],
      favorites: [],
      nearbyOffers: adaptedOffers.offers,
      numberOfComments: 0,
      offers: []
    });
  });

  it(`should update favorites by load`, () => {
    expect(offersData(void 0, {
      type: ActionType.LOAD_FAVORITES,
      payload: offers,
    })).toEqual({
      comments: [],
      favorites: adaptedOffers.offers,
      nearbyOffers: [],
      numberOfComments: 0,
      offers: []
    });
  });
});


describe(`Async operation work correctly`, () => {
  it(`Should make a correct API call to /hotels`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offerLoader = ApiActionCreator.fetchOfferList();

    apiMock
      .onGet(ApiURL.HOTELS)
      .reply(200, offers);

    return offerLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_OFFERS,
          payload: offers,
        });
      });
  });
});
