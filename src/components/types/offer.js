import PropTypes from "prop-types";

const offerPropTypes = PropTypes.shape({
  adults: PropTypes.number.isRequired,
  bedrooms: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
  host: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired,
  image: PropTypes.arrayOf(PropTypes.string).isRequired,
  inside: PropTypes.arrayOf(PropTypes.string).isRequired,
  isInBookmarks: PropTypes.bool.isRequired,
  isPremium: PropTypes.bool.isRequired,
  location: PropTypes.arrayOf(PropTypes.number).isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.shape({
    period: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
  }).isRequired,
  rating: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  previewImage: PropTypes.string.isRequired,
});

export default offerPropTypes;
