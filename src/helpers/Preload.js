import React from 'react';

const Preload = (props) => {
    return <div id={props.load ? "preloader" : "preloader-none"}></div>
}

export default Preload;