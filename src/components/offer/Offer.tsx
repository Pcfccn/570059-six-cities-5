import React, {PureComponent} from "react";
import {getOffer, getWidthForRatingStar} from "../../utils/common";
import PostCommentForm from "../offer-post-comment-form/offer-post-comment-form";
import Inside from "../offer-inside/offer-inside";
import Photos from "../offer-photos/offer-photos";
import Reviews from "../offer-reviews/offer-reviews";
import {TOffer} from "../types/offer";
import MapComponent from "../map/map";
import {AuthorizationStatus, BookmarksButtonType, MapClassName, OfferCardClassName} from "../../constants";
import OfferCard from "../offer-card/offer-card";
import Header from "../header/header";
import {connect} from "react-redux";
import {ApiActionCreator} from "../../store/api-actions";
import BookmarksButton from "../bookmark-button/bookmark-button";
import { TComment } from "../types/comment";
import { TRootReducer } from "../types/reducer";

type TOfferProps ={
  authorizationStatus: string
  offers: TOffer[]
  offerProps: any
  comments: TComment[]
  nearbyOffers: TOffer[]
  numberOfComments: number
  loadOfferInfo: (id: number) => void
}

class Offer extends PureComponent<TOfferProps> {
  constructor(props: TOfferProps) {
    super(props);
  }

  componentDidMount() {
    const {loadOfferInfo, offerProps} = this.props;
    loadOfferInfo(offerProps.match.params.id);
  }

  render() {
    const {authorizationStatus, offers, offerProps, comments, nearbyOffers, numberOfComments} = this.props;
    const offer = getOffer(offers, offerProps);
    if (!offer) {
      return null;
    }
    const {id, image, isPremium, isInBookmarks, name, rating, type, bedrooms, adults, inside, host, price, location} = offer;
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
                {isPremium && <div className="property__mark">
                  <span>Premium</span>
                </div>}

                <div className="property__name-wrapper">
                  <h1 className="property__name">
                    {name}
                  </h1>
                  <BookmarksButton
                    id={id}
                    type={BookmarksButtonType.PROPERTY}
                    isInBookmarks={isInBookmarks}
                  />
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
                  <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{numberOfComments}</span></h2>
                  <ul className="reviews__list">
                    <Reviews reviews={comments} />
                  </ul>
                  {authorizationStatus === AuthorizationStatus.AUTH && <PostCommentForm id={id} />}
                </section>
              </div>
            </div>
            <MapComponent
              key={nearbyOffers.map((nearestOffer) => nearestOffer.id).join(id.toString())}
              className={MapClassName.PROPERTY}
              cityLocation={offer.cityLocation}
              zoom={offer.cityZoom}
              pinLocations={nearbyOffers.map((it) => (it.location))}
              chosedPinLocation={location}
            />
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <div className="near-places__list places__list">
                {nearbyOffers.map((nearestOffer) => (
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
  }
}

const mapStateToProps = ({DATA, USER}: TRootReducer) => ({
  offers: DATA.offers,
  comments: DATA.comments,
  numberOfComments: DATA.numberOfComments,
  nearbyOffers: DATA.nearbyOffers,
  authorizationStatus: USER.authorizationStatus,
});

const mapDispatchToProps = (dispatch: any) => ({
  loadOfferInfo(id: number) {
    dispatch(ApiActionCreator.fetchOffer(id));
    dispatch(ApiActionCreator.fetchComments(id));
    dispatch(ApiActionCreator.fetchNearbyOffers(id));
  },
});

export {Offer};
export default connect(mapStateToProps, mapDispatchToProps)(Offer);
