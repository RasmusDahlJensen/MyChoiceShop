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
      {loading && <p>Loading...</p>}
        {data && (
          <>
            <h1 style={{padding: "0 20px"}}>{data.name}</h1>
            {data && <Products data={data.products}/>}
          </>
        )}
      {error && <p>Something went wrong, try and refresh the page</p>}
    </div>
  )
}

export default Category