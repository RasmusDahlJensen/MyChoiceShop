import React from "react"

import "./Skeleton.css"

const SkeletonElement = ({ type }) => {
    console.log(type);
    const classes = `skeleton ${type}`;

    return (
        <div className={classes}></div>
    )
}

export default SkeletonElement;