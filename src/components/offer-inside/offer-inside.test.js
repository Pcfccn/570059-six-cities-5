import React from "react";
import renderer from "react-test-renderer";
import Inside from "./offer-inside";

it(`Should Inside render correctly`, () => {
  const tree = renderer
    .create(<Inside
      inside={[`a`, `b`]}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
