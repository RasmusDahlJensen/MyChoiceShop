import React from "react"
import SkeletonElement from "./SkeletonElement"

function SkeletonProductDetails() {
  return (
    <div className="skeleton-wrapper skeleton-animation">
        <div className="skeleton-product-details">
            <div className="pic">
                <SkeletonElement type="thumbnail"/>
            </div>
           <div className="aside">
                <SkeletonElement type="title"/>
                <SkeletonElement type="title"/>
                <SkeletonElement type="text"/>
                <SkeletonElement type="text"/>
                <SkeletonElement type="text"/>
           </div>
        </div>
    </div>
  )
}

export default SkeletonProductDetails