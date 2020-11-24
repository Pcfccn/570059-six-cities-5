import React from "react";
import renderer from "react-test-renderer";
import MainNoPlaces from "./main-no-places";

it(`Should MainNoPlaces render correctly`, () => {
  const tree = renderer
    .create(<MainNoPlaces
      city={`Paris`}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
