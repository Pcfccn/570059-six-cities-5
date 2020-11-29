import React from "react";
import renderer from "react-test-renderer";
import FavoritesCityItem from "./favorites-city-item";

it(`Should FavoritesCityItem render correctly`, () => {
  const tree = renderer
    .create(<FavoritesCityItem
      city={`Paris`}
      favorites={[]}
      offers={[]}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
