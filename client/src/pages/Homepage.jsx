import React from 'react'
import Highlights from '../components/Highlights'
import Products from '../components/Products'
import {useFetch}  from "../hooks/useFetch"
import ProductCarousel from '../components/carousels/ProductCarousel'

function HomePage() {
  const {loading, data, error} = useFetch("http://localhost:4000/api/products")
  const {loading: loadingCategories, data: dataCategories, error: errorCategories} = useFetch("http://localhost:4000/api/category")

  console.log(dataCategories);
  return (
    <div className="container">
      <div style={{width: "100%"}}>
          <Highlights />
          
          <Products data={data} loading={loading} title="Nyeste Produkter"/>

          {dataCategories && dataCategories.map((category) => {
            if(category.products.length){
              console.log(category.products)
                return (
                  <>
                    <ProductCarousel data={category.products} title={category.name}/>
                  </>
                )
            }
          })}
      </div>
    </div>
  )
}

export default HomePage