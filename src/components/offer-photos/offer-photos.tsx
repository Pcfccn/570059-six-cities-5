import React, {FC} from "react";
import PropTypes from "prop-types";

type TPhotosProps = {
  images: string[]
}
const Photos: FC<TPhotosProps> = ({images}) => {
  return (<>
    {
      images.map((photo, i) => {
        return (
          <div className="property__image-wrapper" key={`${i}-${photo}`}>
            <img className="property__image" src={photo} alt="Photo studio"/>
          </div>);
      })
    }
  </>
  );
};

export default Photos;
