import React from "react";
import renderer from "react-test-renderer";
import RatingStar from "./offer-post-comment-rating-star";
const noop = () => {};
it(`Should RatingStar render correctly`, () => {
  const tree = renderer
    .create(<RatingStar
      rating={5}
      currentRating={`5`}
      onChange={noop}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
