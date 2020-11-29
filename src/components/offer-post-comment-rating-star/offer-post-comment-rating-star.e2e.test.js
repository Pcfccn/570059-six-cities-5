import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import RatingStar from "./offer-post-comment-rating-star";

configure({adapter: new Adapter()});

it(`submit or change PostCommentForm calls callback`, () => {
  const handleInputChange = jest.fn();
  const wrapper = shallow(<RatingStar
    rating={5}
    currentRating={`5`}
    onChange={handleInputChange}
  />);

  wrapper.find(`input.form__rating-input`).simulate(`change`, {target: {
    value: ``
  }});
  expect(handleInputChange).toHaveBeenCalledTimes(1);
});
