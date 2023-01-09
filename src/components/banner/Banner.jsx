import { NavLink } from "react-router-dom"
import "./Banner.css"
const Banner = ({ myData }) => {
    const { name } = myData;

    

  return (

    <div className="banner-container container-fluid row">
        <div className="container left-banner col ">
           <div className="left-wrapper">
            <p style={{color:'rgb(96, 91, 230)'}}>WELCOME TO</p>
                <h2>{name}</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Cum accusamus, sunt maxime incidunt rem 
                    vero sint, nostrum deserunt repellendus
                    alias voluptatibus recusandae similique dicta
                    inventore veritatis nihil obcaecati voluptatum
                </p>
                <NavLink to='/products'>
                    <button type="button" className="btn btn-outline-primary">
                    SHOP NOW
                    </button>
                </NavLink>
           </div>
        </div>
        <div className="right-banner col container">
            <figure>
            <img src="./images/hero.jpg" alt="" className="hero-image" />
            </figure>
        </div>
    </div>
  )
}

export default Banner