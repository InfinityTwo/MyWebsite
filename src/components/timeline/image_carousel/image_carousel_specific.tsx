import React, { useEffect, useState } from 'react';
import "./image_carousel.sass";
import axios from 'axios';
import {ImageCarouselSpecificProps} from "../../../declarations";

function ImageCarouselSpecific(props: ImageCarouselSpecificProps): JSX.Element {
    
    const [thisImage, setThisImage]: any = useState("");

    async function getThumbnail(): Promise<any> {
        await axios({
            method: 'GET', 
            url: props.backendURL + "image?img=" + props.thisImage + "&uuid=" + props.getCookie("uuid"),
            responseType: 'blob'
        })
        .then((res) => {
            if (res.data !== 404 && res.data !== 403 && res.status === 200) {
                const imageBlob = new File([res.data], ""); 
                const imageObjectURL = URL.createObjectURL(imageBlob);
                setThisImage(imageObjectURL);
            } else {
                setThisImage(props.placeholderImage);
            };
        })
        .catch((error) => {
            setThisImage(props.placeholderImage);
        });
    };

    useEffect(() => {
        getThumbnail();
    }, []);

    return(
        <div className="carouselImagesDirectWrapper flex-row flex-jc-center">
            {
                thisImage === "" ? 
                    <div className="loadingIconMain"></div>    
                :
                    <img src={thisImage} alt="carousel content" className="carouselImages"></img>
            }
        </div>
    )
}

export default ImageCarouselSpecific;