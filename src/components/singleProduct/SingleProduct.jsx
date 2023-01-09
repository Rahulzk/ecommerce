import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom'
import PriceFormate from '../productDetail/PriceFormate';
import { TbTruckDelivery,TbReplace } from 'react-icons/tb'
import { MdSecurity } from 'react-icons/md'
import './SingleProduct.css'

const SingleProduct = () => {

    const { id } = useParams();
    const dispatch = useDispatch();


    const { product_detail : { image,name,company,price,description,shipping,stock,reviews,stars} } = useSelector((state)=>state.products);

    const [mainImage,setMainImage] = useState({});

    const getProduct = async () =>{
        const URL = `https://api.pujakaitem.com/api/products?id=${id}`
        const {data} = await axios.get(URL);
        await dispatch({type:'setProductDetail',payload:data});
    }

   useEffect(()=>{
       getProduct();
   },[]);

  return (
    <div className='row my-5 '>
        <div className="col-8 mx-auto">
            <div className="row single-product-container bg-light">
                <div className="col-6">
                    <div className="row">
                        <div className="col-4 text-center">
                            {/* <h4>IMAGES</h4> */}
                            {
                               image && image.map((item) =>(
                                    <img className='product-detail-image  my-2' src={item.url} alt="" onClick={()=>setMainImage(item)}   />
                                ))
                            }
                        </div>
                        <div className="col-8 single-large-container">
                            <img className='single-large-image' src={mainImage.url} alt="" />
                        </div>
                    </div>
                </div>
                <div className="col-6 ">
                     <h4>{name}</h4>
                     <p>{stars} ({reviews} customer reviews)</p>
                     <h5 style={{fontSize:16}}>MRP: <del> <PriceFormate price={price+240000} /></del>  </h5>
                     <p style={{color:'rgb(96, 91, 230)',fontWeight:500}}>Deal of the Day: <PriceFormate price={price} /></p>
                     <p>
                        {description}
                     </p>

                     <p style={{fontWeight:500}}>Availablity : {stock>0 ? <span >In Stock</span> : <span style={{color:'red'}}>Out of Stock</span> }</p>
                     <div className="product-data-warranty text-center">
                        <div className="product-warranty-data">
                            <TbTruckDelivery className="warranty-icon" />
                            <p >Free Delivery</p>
                        </div>

                        <div className="product-warranty-data">
                            <TbReplace className="warranty-icon" />
                            <p>30 Days Replacement</p>
                        </div>

                        <div className="product-warranty-data">
                            <TbTruckDelivery className="warranty-icon" />
                            <p>Thapa Delivered </p>
                        </div>

                        <div className="product-warranty-data">
                            <MdSecurity className="warranty-icon" />
                            <p>2 Year Warranty </p>
                        </div>
                     </div>
                     <p>
                        Brand :<span> {company} </span>
                    </p>
                    <NavLink to='/cart'>
                        <button className='btn btn-outline-primary'>
                            Add To Cart
                        </button>
                    </NavLink>
                </div>
               
            </div>
        </div>
    </div>
  )
}

export default SingleProduct;