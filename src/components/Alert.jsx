import React from "react";

function Alert(props) {
    return (
        <div className={props.showAlert ? "alert" : "blank"} style={{'animationPlayState': 'play'}} onAnimationEnd={() => props.setAlert(false)}>{props.copiedText} copied</div>
    )
}

export default Alert