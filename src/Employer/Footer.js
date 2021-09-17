import React from 'react';
import img from './img.png'
 import './style.css';
 
function Footer()
{
    return(
          <section class="bg-dark">
             <div class="container">
               <div class="row">  
                <div class="col-sm-12">
                  <p class=" text-white text-center mb-3 mt-3">Copyright @ Loreal Ipsom Rights Reserved
                  
                  <img className="" style={{height:"50px",width:"200px"}} src={img}/></p>
                  </div>  
               </div>
             </div>    
          </section>
     
    )
}
 
export default Footer;