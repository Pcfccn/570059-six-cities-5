import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {PostCommentForm} from "./offer-post-comment-form";
import {CommentSendingStatus} from "../../constants";

configure({adapter: new Adapter()});

it(`submit or change PostCommentForm calls callback`, () => {
  const handlePostComment = jest.fn();
  const handleEnterText = jest.fn();
  const formSendPrevention = jest.fn();
  const changeCommentSendingStatus = jest.fn();
  const wrapper = shallow(<PostCommentForm
    id={1}
    rating={`5`}
    text={`fkyukkuy`}
    commentSendingStatus={CommentSendingStatus.DONE}
    postComment={handlePostComment}
    setRating={() => {}}
    enterText={handleEnterText}
    changeCommentSendingStatus={changeCommentSendingStatus}
  />);

  wrapper.find(`form.reviews__form`).simulate(`submit`, {
    preventDefault: formSendPrevention
  });
  wrapper.find(`div.reviews__rating-form`).simulate(`change`);
  wrapper.find(`textarea.reviews__textarea`).simulate(`change`, {target: {
    value: ``
  }});
  expect(formSendPrevention).toHaveBeenCalledTimes(1);
  expect(handlePostComment).toHaveBeenCalledTimes(1);
  expect(handleEnterText).toHaveBeenCalledTimes(1);
  expect(changeCommentSendingStatus).toHaveBeenCalledTimes(1);
});
