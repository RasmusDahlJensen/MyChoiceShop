import React from 'react'
import Products from '../components/Products'
import { useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'

function Category() {
    const {id} = useParams()
    
    const {data, loading, error} = useFetch("/api/category/" + id)

    console.log(data);
  return (
    <div>
        <h1 style={{padding: "0 20px"}}>Category - {id}</h1>
        {loading && <p>Loading...</p>}
        {data && <Products data={data.products}/>}
    </div>
  )
}

export default Category