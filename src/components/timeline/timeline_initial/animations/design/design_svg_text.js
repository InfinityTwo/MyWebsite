import React from "react";

function TimelineDesignSVGText(props) {
    return(
        <svg className={props.classname} width={props.w} height={props.h} viewBox={"0 0 " + props.vbox + " 124"} fill="none" xmlns="http://www.w3.org/2000/svg" style={{scale: "0.4", margin: props.margin}}>
            {props.children}
        </svg>
    );
}

export default TimelineDesignSVGText;