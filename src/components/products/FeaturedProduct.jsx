import { useSelector } from "react-redux"
import Product from "../productDetail/Product";
import './FeatureProduct.css'

const FeaturedProduct = () => {

    const { products } = useSelector((state)=>state.products);

    const featuredProducts = products.filter((item)=> item.featured===true)

    // console.log(featuredProducts);

  return (
      <div className="row bg-light feature-container">
         <div className="col-8 main-container mx-auto my-15 ">
            <div className="intro-data"> CHECK NOW!</div>
            <div className="common-heading ">
                     Our Feature Services 
            </div>
            <div className="feature-product-container">
            {
            featuredProducts.map((curElem) => {
                return ( 
                    <Product key={curElem.id} {...curElem} />
                )
            })
            }
            </div>
         </div>
      </div>
  )
}

export default FeaturedProduct