import { NavLink } from "react-router-dom";
import './Header.css'
import { MdOutlineShoppingCart } from 'react-icons/md'
const Header = () => {
  return (
    
    <div class="row header-container">
      <div class="col d-flex justify-content-center align-items-center">
         FAKE SHOP
      </div>
      <div class="col">
      </div>
      <div class="col d-flex justify-content-around align-items-center">
         <NavLink className="nav-link" to='/'>Home</NavLink>
         <NavLink className="nav-link"  to='/about'>About</NavLink>
         <NavLink className="nav-link" to='/contact'>Contact</NavLink>
         <NavLink className="nav-link" to='/products'>Products</NavLink>
         <NavLink className="nav-link" to='/cart'>
             <MdOutlineShoppingCart className="cart-icon" />
             <div className="cart-item-number d-flex justify-content-around align-items-center">5</div>
         </NavLink>
      </div>
    </div>
  );
};


export default Header