import React from "react";
import PropTypes from "prop-types";
import {BookmarksButtonType} from "../../constants";
import {connect} from "react-redux";
import {ApiActionCreator} from "../../store/api-actions";

const BookmarksButton = ({id, type, isInBookmarks, addToBookmarks}) => {
  const handleBookmarksButtonClick = () => {
    addToBookmarks(id, +!isInBookmarks);
  };

  let isInBookmarksButtonActive = isInBookmarks
    ? `place-card__bookmark-button--active`
    : ``;
  let typeClassName = `place-card__bookmark-button`;
  let buttonWidth = 18;
  let buttonHeight = 19;
  if (type === BookmarksButtonType.PROPERTY) {
    isInBookmarksButtonActive = isInBookmarks
      ? `property__bookmark-button--active`
      : ``;
    typeClassName = `property__bookmark-button`;
    buttonWidth = 31;
    buttonHeight = 33;
  }

  return (
    <button
      className={`${typeClassName} ${isInBookmarksButtonActive} button`}
      type="button"
      onClick={handleBookmarksButtonClick}
    >
      <svg className="place-card__bookmark-icon" width={buttonWidth} height={buttonHeight}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
};

BookmarksButton.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  isInBookmarks: PropTypes.bool.isRequired,
  addToBookmarks: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  addToBookmarks(id, status) {
    dispatch(ApiActionCreator.postFavorite(id, status));
  },
});

export {BookmarksButton};
export default connect(null, mapDispatchToProps)(BookmarksButton);
