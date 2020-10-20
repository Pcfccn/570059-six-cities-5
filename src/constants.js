const Path = {
  MAIN: `/`,
  SIGN_IN: `/login`,
  FAVORITES: `/favorites`,
  OFFER: `/offer/:id`,
  getUrlById: (id) => (`/offer/${id}`)
};

const ratingStars = [5, 4, 3, 2, 1];
const ratingInputTitle = [`perfect`, `good`, `not bad`, `badly`, `terribly`];

const widthStartsCoefficient = 20;

export {Path, widthStartsCoefficient, ratingStars, ratingInputTitle};
