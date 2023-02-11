import React, { useState, useEffect } from 'react'

const Pageup = (props) => {

    const [scrollPosition, setSrollPosition] = useState(0);

    const [showGoTop, setshowGoTop] = useState("goTopHidden");
    useEffect(() => {
        window.addEventListener("scroll", handleVisibleButton);
    });
    const handleVisibleButton = () => {
        const position = window.pageYOffset;
        setSrollPosition(position);

        if (scrollPosition > 50) {
            return setshowGoTop("goTop");
        } else if (scrollPosition < 50) {
            return setshowGoTop("goTopHidden");
        }
    };
    return (
        <>
            <div className={props.showGoTop} onClick={props.scrollUp}>
                <button className="goTop">
                    <i className="goTop__text fas fa-chevron-up" />
                </button>
            </div>
        </>
    )
}

export default Pageup