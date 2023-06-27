import React from 'react'
import SkeletonElement from './SkeletonElement'

function SkeletonProductCard() {
  return (
    <div className="skeleton-product-card bg-grey skeleton-animation">
        <SkeletonElement type="thumbnail"/>
        <SkeletonElement type="title"/>
        <SkeletonElement type="text"/>
        <SkeletonElement type="text"/>
    </div>
  )
}

export default SkeletonProductCard
