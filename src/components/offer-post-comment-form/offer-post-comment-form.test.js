import React from "react";
import renderer from "react-test-renderer";
import { CommentSendingStatus } from "../../constants";
import {PostCommentForm} from "./offer-post-comment-form";
const noop = () => {};
it(`Should PostCommentForm render correctly`, () => {
  const tree = renderer
    .create(<PostCommentForm
      id={1}
      rating={`5`}
      text={`fkyukkuy`}
      commentSendingStatus={CommentSendingStatus.DONE}
      postComment={noop}
      setRating={noop}
      enterText={noop}
      changeCommentSendingStatus={noop}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
