import React from "react";
import renderer from "react-test-renderer";
import Photos from "./offer-photos";

it(`Should Photos render correctly`, () => {
  const tree = renderer
    .create(<Photos
      images={[`a`, `b`]}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
