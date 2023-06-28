import Products from '../components/Products'
import { useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'

function Category() {
    const {id} = useParams()
    
    const {data, loading, error} = useFetch("/api/category/" + id)

    

    console.log(data);
  return (
    <div className="container">
      <div>
        {data && <h1 style={{padding: "0 20px"}}>{data.name}</h1>}
        <Products data={data ? data.products : data} loading={loading}/>
        {error && <p>Something went wrong, try and refresh the page</p>}
      </div>
    </div>
  )
}

export default Category