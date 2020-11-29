import React from "react";
import renderer from "react-test-renderer";
import Reviews from "./offer-reviews";
it(`Should Reviews render correctly`, () => {
  const tree = renderer
    .create(<Reviews
      reviews={[{
        rating: 5,
        date: 1606247072441,
        user: {
          name: `tryu`,
        }
      }]}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
