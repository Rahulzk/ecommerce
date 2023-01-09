import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import PriceFormate from '../productDetail/PriceFormate';
import './FilterComponent.css'

const FilterComponent = () => {

    const { filters : {text,category,company,price,minPrice,maxPrice},products} = useSelector((state)=>state.products);
    const dispatch = useDispatch(); 

    const updateFilterValue =  (e) =>{
         const {name,value} = e.target;
         dispatch({type:'setFilterValue',payload:{name,value}})
    }
 
 
    const getUniqueProperty = (data,property) =>{
        let result = data.map((item)=>{
            return item[property]
        })

        result = ["all",...new Set(result)]
        return result;
    }


    const uniqueCategoryData = getUniqueProperty(products,'category')
    const uniqueCompanyData = getUniqueProperty(products,'company');



    useEffect(()=>{ 
        dispatch({type:'filterProducts'});
    },[text,category,company,price])

  return (
     <div className="filter-container">
         
           <div>
           <input type="text" name="text" placeholder='search'   onChange={(e)=>updateFilterValue(e)} />
           </div>
            <div className="category-filter my-4">
                <h4>Category</h4>
                {
                    uniqueCategoryData.map((cur,index)=>(
                        <div>
                             <button className={cur===category ? 'category-btn my-1 bg-light active' : 'category-btn my-1 bg-light'} key={index} type='button' name="category" value={cur} onClick={(e)=>updateFilterValue(e)}>
                                {cur}
                             </button>
                        </div>
                    ))
                }
            </div>

                <div className="company-filter">
                    <form action="#">
                        <label htmlFor="sort"> <h4>Company</h4> </label>
                        <br /><br />
                        <select name="company" id="company" 
                        onChange={(e)=>updateFilterValue(e)}
                        >

                            {
                                uniqueCompanyData.map((item,index)=>(
                                    <option className='py-2' value={item}>{item}</option>
                                ))
                            }
                        </select>
                    </form>
                </div>

                <div className="price-range-filter my-5">
                        <h4>Price</h4>
                        <p> <PriceFormate price={price} /> </p>
                        <input 
                            type="range" 
                            name="price"
                            min={minPrice}
                            max={maxPrice} 
                            value={price}
                            step="100"
                            onChange={(e)=>updateFilterValue(e)}
                        />

                </div>

            


     </div>
  )
}

export default FilterComponent