import { useEffect } from 'react'
import { BsFillGridFill,BsList} from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import FilterComponent from '../filter/FilterComponent'
import Product from '../productDetail/Product'
import './Products.css'

const Products = () => {

  const dispatch = useDispatch();
  const { sorting_value,filter_value } = useSelector((state)=>state.products)

   const sorting = (e) =>{
      const sort_value = e.target.value;
      dispatch({type:'setSortingValue',payload:sort_value});
   }

   useEffect(()=>{
        dispatch({type:'sortProducts'})
   },[sorting_value])

  return (
    <div className='row' style={{marginTop:40}}>
        <div className="col-10 bg-light mx-auto">

            <div className="row" style={{marginTop:20}}>
                <div className="col-4">
                    <FilterComponent />
                </div>
                <div className="col-8">
                    <div className="top-items">
                        <div className="left">
                            <BsFillGridFill  className='mx-2 grid-icon' />
                            <BsList className='list-icon mx-2'/>
                        </div>
                        <div className="middle">
                            {filter_value.length} products avialable
                        </div>
                        <div className="right">
                          <form action="#">
                             <label htmlFor="sort" className='mx-2'><h5>Sort by </h5> </label>
                             <select  name="sort" id="sort" onChange={(e)=>sorting(e)}>
                              <option value="lowest">Price:low to high</option>
                              {/* <option value="" disabled></option> */}
                              <option value="highest">Price:high to low</option>
                              {/* <option value="" disabled></option> */}
                              <option value="a-z">a-z</option>
                              {/* <option value="" disabled></option> */}
                              <option value="z-a">z-a</option>
                             </select>
                          </form>
                        </div>
                    </div>
                <div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-around'}}>
                  {
              
                        filter_value.map((item,index)=>{
                        return(
                          <Product {...item} key={index} />
                        )
                      })
                  }
               </div>

               </div>






            </div>

        </div>
    </div>
  )
}

export default Products