import React, { useState, useEffect } from "react";
import "./programming_animation.css"

const TimelineProgrammingAnimation = (props) => {

    const displayTextCharsSpaceless = "ABCDEF12345678901234567890██";
    const displayTextChars = displayTextCharsSpaceless + "            ";
    const displayTextChoicesLength = displayTextChars.length;
    const displayTextChoicesSpacelessLength = displayTextCharsSpaceless.length;
    const textLimit = randomInt(Math.max(35, parseInt(120 * (window.innerWidth / 2160))), Math.min(235, parseInt(120 * (window.innerWidth / 2160)))) + 15;
    const textSize = Math.max(20, parseInt(40 * ((window.innerWidth * window.innerHeight) / (2160 * 1440))));
    const maxRecursionDepth = 20;
    const [randText, setRandomText] = useState(randomArray(false));
    const [randStyle, setRandomStyle] = useState(randomStyle());
    const [recursionDepth, setRecursionDepth] = useState(0);

    function randomInt(min, max) { // inclusive of both min and max
        return Math.floor(Math.random() * (max - min + 1) + min);
    };

    function randomiseText() {
        let newRandomText = "";
        for (let j = 0; j < textLimit; j++) {
            newRandomText += displayTextChars[randomInt(0, displayTextChoicesLength - 1)];
        };
        return newRandomText;
    };

    function randomiseExistingText(text) {
        let newRandomText = text;
        for (let j = 0; j < newRandomText.length; j++) {
            if (newRandomText[j] !== " ") {
                if (randomInt(0, 4) === 0) {
                    newRandomText = newRandomText.substring(0, j) + displayTextCharsSpaceless[randomInt(0, displayTextChoicesSpacelessLength - 1)] + newRandomText.substring(j + 1);
                };
            };
        };
        return newRandomText;
    };

    function randomArray(randomiseChangeSome) {
        return Array(textSize).fill("").map((eachPass, i) => {
            switch (randomiseChangeSome) {
                case true:
                    return randomInt(0, 25) < 1 ? randText[i] : randomiseExistingText(randText[i]);
                case false:
                    return randomiseText();
            };
        });
    };

    function randomStyle() {
        return Array(textSize).fill("").map((eachPass, i) => {
            return {
                opacity: String(parseFloat(randomInt(0, 75)/100) + 0.25),
                animation: 
                    (
                        "programmingAnimAppear " + String(randomInt(0,75)/100 + 0.75) + "s ease " + String(randomInt(0, 10)/10) + "s, " 
                        + "programmingAnim" + (randomInt(0, 1) === 0 ? "LeftRight" : "RightLeft") + String(randomInt(0, 3) + 1) + " " + String(randomInt(0, 20)/10 + 7.0) + "s linear"
                    ),
                fontSize: String(randomInt(0, 20)/10 + 0.5) + "em",
                fontWeight: String(randomInt(0, 600) + 300),
                marginTop: String(randomInt(0, 1800)/10 - 90) + "vh",
                marginLeft: String(randomInt(0, 1700)/10 - 85) + "vw",
                color: randomInt(0, 1) === 0 ? "#f06f4fff" : "#f06f4f77"
            };
        });
    };

    function randomiseArray() {
        setRecursionDepth((prevRecursionDepth) => (prevRecursionDepth + 1));
        setRandomText(randomArray(true));
    };

    useEffect(() => {
        let loopRandomiser = setTimeout(() => {
            randomiseArray();
        }, randomInt(0, 125) + 100);
        if (recursionDepth > maxRecursionDepth) {
            clearTimeout(loopRandomiser);
        };
    }, [recursionDepth]);

    return(
        <div className="timelineProgrammingAnimWrapper">
            {
                Array(textSize).fill("").map((eachDisplayText, i) => {
                    return (
                        <div className={"timelineProgrammingAnimTextWrapper "} style={randStyle[i]} key={i} >
                            <p className="timelineProgrammingAnimText">{randText[i]}</p>
                        </div>
                    );
                })
            }
        </div>
    )
};

export default TimelineProgrammingAnimation;