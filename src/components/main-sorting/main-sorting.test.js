import React from "react";
import renderer from "react-test-renderer";
import {SortType} from "../../constants";
import {MainSort} from "./main-sorting";

const noop = () => {};

describe(`MainSorting`, () => {
  it(`Should render correctly`, () => {
    const tree = renderer
    .create(<MainSort
      thisCity={`Paris`}
      active={true}
      changeCity={noop}
      sortType={SortType.POPULAR_DESC}
      isActive={true}
      handleToggleClick={noop}
      offers={[]}
      city={`Paris`}
      changeSortType={noop}
    />)
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
