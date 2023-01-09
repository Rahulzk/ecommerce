import Banner from "../banner/Banner"
import FeaturedProduct from "../products/FeaturedProduct"
import Services from "../service/Services"
import Trusted from "../service/Trusted"


const Home = () => {
   const data = {
      name :"FAKE STORE"
   }
  return (
     <>
        <Banner myData={data} />
        <FeaturedProduct />
        <Services />
        <Trusted />
     </>
  )
}

export default Home