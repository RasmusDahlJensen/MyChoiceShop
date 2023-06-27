import React from 'react'
import Highlights from '../components/Highlights'
import Products from '../components/Products'
import {useFetch}  from "../hooks/useFetch"

function HomePage() {
  const {loading, data, error} = useFetch("http://localhost:4000/api/products")
  return (
    <div className="container">
      <div>
          <Highlights />
          <Products data={data} loading={loading}/>
      </div>
    </div>
  )
}

export default HomePage