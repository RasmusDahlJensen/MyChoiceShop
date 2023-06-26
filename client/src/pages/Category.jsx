import React from 'react'
import Products from '../components/Products'
import { useParams } from 'react-router-dom'

function Category() {
    const {id} = useParams()

  return (
    <div>
        <h1 style={{padding: "0 20px"}}>Category - {id}</h1>
        <Products />
    </div>
  )
}

export default Category