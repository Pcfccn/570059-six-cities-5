import React from "react";
import renderer from "react-test-renderer";
import {PostCommentForm} from "./offer-post-comment-form";
const noop = () => {};
it(`Should PostCommentForm render correctly`, () => {
  const tree = renderer
    .create(<PostCommentForm
      id={1}
      rating={`5`}
      text={`fkyukkuy`}
      postComment={noop}
      setRating={noop}
      enterText={noop}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
