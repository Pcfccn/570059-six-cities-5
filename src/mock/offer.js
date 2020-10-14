const property = [
  {
    id: `01`,
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
    location: `xz`
  },
  {
    id: `02`,
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
    location: `xz`
  },
  {
    id: `03`,
    reviews: [2139, 2140, 2141],
    image: [`/img/studio-01.jpg`, `/img/studio-photos.jpg`],
    isPremium: true,
    isInBookmarks: false,
    name: `Beautiful & luxurious studio`,
    type: `Apartament`,
    bedrooms: 12,
    adults: 129,
    rating: 0.5,
    price: {
      value: 500,
      period: `night`,
    },
    inside: [`Wi-Fi`, `Washing machine`, `Towels`, `Heating`, `Coffee machine`, `Baby seat`, `Kitchen`,
      `Dishwasher`, `Cabel TV`, `Fridge`, `whatewer you want`],
    host: {
      avatar: `/img/avatar-angelina.jpg`,
      name: `Anzhela`,
      pro: true,
      description: ``,
    },
    location: `xz`
  },
  {
    id: `04`,
    reviews: [2141, 2142, 2143, 2144, 2145, 2146, 2147],
    image: [`/img/apartment-01.jpg`, `/img/apartment-02.jpg`, `/img/studio-01.jpg`, `/img/studio-photos.jpg`],
    isPremium: true,
    isInBookmarks: true,
    name: `Beautiful room with black Jack and other awesome things like woomen and drugs which are include in this price for rentng`,
    type: `Private Room`,
    bedrooms: 0,
    adults: 1,
    rating: 4,
    price: {
      value: 777,
      period: `портвейн`,
    },
    inside: [`whatewer you want`],
    host: {
      avatar: `/img/avatar-angelina.jpg`,
      name: `Sonya`,
      pro: true,
      description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.
      but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    },
    location: `xz`
  }
];

const reviews = {
  "2134": {
    avatar: `/img/avatar-max.jpg`,
    name: `Jsadljf`,
    rating: 1,
    text: `The building is green and from 18th century.
      An independent House, strategically located between Rembrand Square and National Opera,
      but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    date: `April 2019`
  },
  "2135": {
    avatar: `/img/avatar-max.jpg`,
    name: `YaYa`,
    rating: 2,
    text: `HoHO`,
    date: `April 2020`
  },

  "2136": {
    avatar: `/img/avatar-max.jpg`,
    name: `Jsadljf`,
    rating: 3,
    text: `The building is green and from 18th century.
      An independent House, strategically located between Rembrand Square and National Opera,
      but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    date: `April 2021`
  },
  "2137": {
    avatar: `/img/avatar-max.jpg`,
    name: `YaYa`,
    rating: 5,
    text: `HoHO`,
    date: `April 2022`
  },

  "2138": {
    avatar: `/img/avatar-max.jpg`,
    name: `Jsadljf`,
    rating: 1,
    text: `The building is green and from 18th century.
      An independent House, strategically located between Rembrand Square and National Opera,
      but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    date: `April 2023`
  },
  "2139": {
    avatar: `/img/avatar-max.jpg`,
    name: `YaYa`,
    rating: 1,
    text: `HoHO`,
    date: `April 2024`
  },
  "2140": {
    avatar: `/img/avatar-max.jpg`,
    name: `YaYa`,
    rating: 4,
    text: `HoHO`,
    date: `April 2025`
  },
  "2141": {
    avatar: `/img/avatar-max.jpg`,
    name: `YaYa`,
    rating: 5,
    text: `HoHO`,
    date: `April 2026`
  },

  "2142": {
    avatar: `/img/avatar-max.jpg`,
    name: `Jsadljf`,
    rating: 1,
    text: `The building is green and from 18th century.
      An independent House, strategically located between Rembrand Square and National Opera,
      but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    date: `April 2017`
  },
  "2143": {
    avatar: `/img/avatar-max.jpg`,
    name: `Jsadljf`,
    rating: 4,
    text: `The building is green and from 18th century.
      An independent House, strategically located between Rembrand Square and National Opera,
      but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    date: `April 2018`
  },
  "2144": {
    avatar: `/img/avatar-max.jpg`,
    name: `Jsadljf`,
    rating: 5,
    text: `The building is green and from 18th century.
      An independent House, strategically located between Rembrand Square and National Opera,
      but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    date: `April 2029`
  },
  "2145": {
    avatar: `/img/avatar-max.jpg`,
    name: `Jsadljf`,
    rating: 2,
    text: `The building is green and from 18th century.
      An independent House, strategically located between Rembrand Square and National Opera,
      but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    date: `April 2030`
  },
  "2146": {
    avatar: `/img/avatar-max.jpg`,
    name: `Jsadljf`,
    rating: 3,
    text: `The building is green and from 18th century.
      An independent House, strategically located between Rembrand Square and National Opera,
      but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    date: `April 2031`
  },
  "2147": {
    avatar: `/img/avatar-max.jpg`,
    name: `YaYa`,
    rating: 5,
    text: `HoHO`,
    date: `April 2032`
  },

};

export {property as offers, reviews};
