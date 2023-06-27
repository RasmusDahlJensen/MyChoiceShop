import React from 'react'
import Highlights from '../components/Highlights'
import Products from '../components/Products'
import {useFetch}  from "../hooks/useFetch"

function HomePage() {
  const {loading, data, error} = useFetch("/api/products")
  return (
    <div>
        <Highlights />
        {loading && <p>Loading...</p>}
        {data && <Products data={data}/>}
    </div>
  )
}

export default HomePage