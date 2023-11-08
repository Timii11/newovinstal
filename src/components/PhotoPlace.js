import React,{useState,useCallback} from "react";
import Gallery from "react-photo-gallery";
import Carousel, {Modal, ModalGateway} from "react-images";
import {Dropdown} from "react-dropdown-now";
import "../css/components/photoplace.css";
import 'react-dropdown-now/style.css';


const PhotoPlace = (props) => {

    const items =["Toate"];

    const [val,setVal] = useState("Toate");
    const [currentImage, setCurrentImage] = useState(0);
    const [currentKey,setCurrentKey] = useState();
    const [viewerIsOpen, setViewerIsOpen] = useState(false);
  
    const openLightbox = useCallback((event, { photo, index}) => {
      setCurrentImage(index);
      setViewerIsOpen(true);
    }, []);
  
    const closeLightbox = () => {
      setCurrentImage(0);
      setViewerIsOpen(false);
    };

    props.photos.map((item)=>(items.push(item.title)));
 
    return(
        <div className="photoplace">   
        <div className="combobox">
        <Dropdown className="my-className"  onChange={(v) => setVal(v.value)} options={items} value="Toate"/>
        </div>
        {
            props.photos.map((item,index)=>(
                   (val == 'Toate' || val.includes(item.title)) ? <div className="photocomp" key={index} tag={"Toate " + item.title}>
                        <h2>{item.title}</h2>
                        <div key={index} onClick={()=>setCurrentKey(index)} > 
                        <Gallery   photos={item.images} key={index} direction={"column"} onClick={openLightbox}/>
                        </div>
                    </div>:null
            ))
        }

      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={props.photos[currentKey].images}
            />
          </Modal>
        ) : null}
      </ModalGateway>

        </div>
    );
    }

    export default PhotoPlace;