import React from "react";
import '../css/components/gallerycard.css'

const GalleryCard = (props) => {
return(
              <div className="gallerycard">
                    <div className="img-wrap">
                        <img src={props.img} />
                    </div>
                    <p>{props.title}</p>
                </div>
);
}

export default GalleryCard;