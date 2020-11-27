import {ActionType, cities, SortType} from "../../../constants";
import {stateData} from "./state-data";

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

describe(`state-data reducer work correctly`, () => {
  it(`Should return initial store without parametrs`, () => {
    expect(stateData(void 0, {})).toEqual({
      city: cities[0],
      sortType: SortType.POPULAR_DESC,
      enteredOffer: {id: ``, location: []},
      userComment: {rating: `0`, text: ``}
    });
  });

  it(`should update city`, () => {
    expect(stateData(void 0, {
      type: ActionType.CHANGE_CITY,
      payload: `Paris`,
    })).toEqual({
      city: `Paris`,
      enteredOffer: {id: ``, location: []},
      sortType: `Popular`,
      userComment: {rating: `0`, text: ``}
    });
  });

  it(`should update rating`, () => {
    expect(stateData(void 0, {
      type: ActionType.SET_RATING,
      payload: `5`,
    })).toEqual({
      city: cities[0],
      sortType: SortType.POPULAR_DESC,
      enteredOffer: {id: ``, location: []},
      userComment: {rating: `5`, text: ``}
    });
  });

  it(`should update comment text`, () => {
    expect(stateData(void 0, {
      type: ActionType.ENTER_TEXT,
      payload: `testText`,
    })).toEqual({
      city: cities[0],
      sortType: SortType.POPULAR_DESC,
      enteredOffer: {id: ``, location: []},
      userComment: {rating: `0`, text: `testText`}
    });
  });

  it(`should update sorting`, () => {
    expect(stateData(void 0, {
      type: ActionType.CHANGE_SORT_TYPE,
      payload: {
        type: SortType.RATING_DESC,
        offers
      },
    })).toEqual({
      city: cities[0],
      sortType: SortType.RATING_DESC,
      enteredOffer: {id: ``, location: []},
      userComment: {rating: `0`, text: ``},
      offers
    });
  });

  it(`should update entered offer`, () => {
    expect(stateData(void 0, {
      type: ActionType.CHANGE_ENTERED_OFFER,
      payload: {offer: offers[0]},
    })).toEqual({
      city: cities[0],
      sortType: SortType.POPULAR_DESC,
      enteredOffer: offers[0],
      userComment: {rating: `0`, text: ``},
    });
  });
});
