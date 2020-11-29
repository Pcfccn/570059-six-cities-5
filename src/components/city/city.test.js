import React from "react";
import renderer from "react-test-renderer";
import City from "./city";

describe(`Should City render correctly`, () => {
  it(`active city`, () => {
    const tree = renderer
    .create(<City
      thisCity={`Paris`}
      active={true}
      changeCity={() => {}}
    />)
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
  it(`active city`, () => {
    const tree = renderer
    .create(<City
      thisCity={`Paris`}
      active={false}
      changeCity={() => {}}
    />)
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
