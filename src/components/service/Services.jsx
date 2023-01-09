import {  TbTruckDelivery} from 'react-icons/tb'
import { MdSecurity } from 'react-icons/md'
import {GiReceiveMoney} from 'react-icons/gi'
import { RiSecurePaymentLine } from 'react-icons/ri'
import './Service.css'


const Services = () => {
  return (
     <div className="container">
            <div className="row">
                <div className="col service-1 bg-light mx-2">
                    <TbTruckDelivery className='icon mx-auto' />
                    <h5 className='my-3'>Super Fast and Free Delivery</h5>
                </div>
                <div className="col service-2 mx-2 ">
                    <div className="my-4 bg-light service-2-1">
                        <MdSecurity className='icon2 mx-2'/>
                        <h5 className='mx-2'>Non-Contact Shipping</h5>
                    </div>
                    <div className="my-4 bg-light service-2-2">
                        <GiReceiveMoney className="icon2 mx-2" />
                        <h5 className='mx-2'>Money back Gauranted</h5>
                    </div>
                </div>
                <div className="col service-3 bg-light mx-2">
                    <RiSecurePaymentLine className='icon mx-auto' />
                    <h4>Super Secure Payment System</h4>
                </div>
            </div>
     </div>
  )
}

export default Services