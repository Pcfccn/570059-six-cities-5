import {PropTypes} from "prop-types";
import React from "react";
import {getMockNearestOffers, getOffer, getWidthForRatingStar} from "../../utils/common";
import PostCommentForm from "../offer-post-comment-form/offer-post-comment-form";
import Inside from "../offer-inside/offer-inside";
import Photos from "../offer-photos/offer-photos";
import Reviews from "../offer-reviews/offer-reviews";
import offerPropTypes from "../types/offer";
import MapComponent from "../map/map";
import {MapClassName, OfferCardClassName} from "../../constants";
import OfferCard from "../offer-card/offer-card";
import Header from "../header/header";
import {connect} from "react-redux";
import {reviews} from "../../mock/offer";

const Offer = ({offers, offerProps, onSubmitForm}) => {
  const offer = getOffer(offers, offerProps);
  const nearestOffers = getMockNearestOffers(offers, offerProps);
  const {image, isPremium, isInBookmarks, name, rating, type, bedrooms, adults, inside, host, price, location} = offer;
  const isInBookmarksButtonActive = isInBookmarks
    ? `property__bookmark-button--active`
    : ``;
  const hostClassName = host.pro
    ? `property__avatar-wrapper--pro`
    : ``;
  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              <Photos images={image} />
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {isPremium
                ? <div className="property__mark">
                  <span>Premium</span>
                </div>
                : ``}

              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {name}
                </h1>
                <button className={`property__bookmark-button ${isInBookmarksButtonActive} button`} type="button">
                  <svg className="place-card__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `${getWidthForRatingStar(rating)}`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                    Max {adults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price.value}</b>
                <span className="property__price-text">&nbsp;{price.period}</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  <Inside inside={inside} />
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className={`property__avatar-wrapper ${hostClassName} user__avatar-wrapper`}>
                    <img className="property__avatar user__avatar" src={host.avatar} width="74" height="74" alt="Host avatar"/>
                  </div>
                  <span className="property__user-name">
                    {host.name}
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {host.description}
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
                <ul className="reviews__list">
                  <Reviews reviews={reviews} />
                </ul>
                <PostCommentForm onSubmitForm={onSubmitForm}/>
              </section>
            </div>
          </div>
          <MapComponent
            className={MapClassName.PROPERTY}
            cityLocation={offer.cityLocation}
            zoom={offer.cityZoom}
            pinLocations={nearestOffers.map((it) => (it.location))}
            chosedPinLocation={location}
          />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              {nearestOffers.map((nearestOffer) => (
                <OfferCard
                  key={nearestOffer.id}
                  className={OfferCardClassName.NEAR_PLACE}
                  offer={nearestOffer}
                  onMouseEnterCard={()=>{}}
                />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

Offer.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    })
  }),
  reviews: PropTypes.arrayOf(
      PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
      })),
  offers: PropTypes.arrayOf(offerPropTypes).isRequired,
  onSubmitForm: PropTypes.func.isRequired,
  offerProps: PropTypes.object.isRequired,
};

const mapStateToProps = ({DATA}) => ({
  offers: DATA.offers,
});

export {Offer};
export default connect(mapStateToProps)(Offer);
