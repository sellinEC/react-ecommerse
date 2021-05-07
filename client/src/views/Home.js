import './Home.css'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../store/actions/productsActions'
import Product from '../components/Product'
// import {checkUser} from '../store/actions/userActions'

const Home = () => {

  const dispatch = useDispatch();
  const products = useSelector(state => state.products.products)
  // useEffect(() => {
  //   checkUser()
    
  // }, [])
  useEffect(() => {
    dispatch(getProducts())
   
  }, [dispatch])

  return (
    <div className="home">
      <h2 className="home-title">Latest products</h2>
      <div className="home-products">
        {
          products && products.map(product => (
            <Product key={product._id} product={product} />
          ))
        }
      </div>
    </div>
  )
}

export default Home
