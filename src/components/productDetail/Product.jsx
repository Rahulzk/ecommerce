import { NavLink } from 'react-router-dom'
import PriceFormate from './PriceFormate'
import './Product.css'

 
const Product = ({id, name, image, price, category}) => {
  return (
     <div className="product-container">
        <NavLink style={{textDecoration:'none'}} to={`/singleproduct/${id}`}>
            <div className="card">
              <div className="image-caption">
                <div className="caption">
                    <p className='caption-title'>{category}</p>
                </div> 
                  <img className='cart-image' src={image} alt={name} />
              </div>
                
              <div className="card-data container ">
                <div className="card-data-flex">
                  <h5 style={{color:'black'}}>{name}</h5>
                  <p className="card-data--price my-2"> <PriceFormate price={price} /> </p>
                </div>
              </div>
            </div>
          </NavLink>
     </div>
  )
}

export default Product