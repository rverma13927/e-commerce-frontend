import axios from "axios";
import React, { useEffect, useState } from 'react';
import properties from "../../envVariables/local";
import Productcard from "../ProductCard/Productcard";
export default function Product() {

    const [products, setproducts] = useState(null);
    const options = {
        method: 'GET',
        // body: {}, // whatever data you want to send
      }
    useEffect(() => {
        //   effect

       axios.get(properties.url+'product').then((response)=>{
              console.log("my product"+ response.data);
              for(var key in response.data){
                response.data[key].features =   response.data[key].features.split(",");
              }
              setproducts(response.data);
        })
          return () => {
            //   cleanup
          }
      }, [])
       return (
           <>
           <ul style={{ color: "black"}}>  
               {products && products.map((p) => {
                   return    <Productcard {...p} />
               })}
           </ul>
           </>
    
       );

}
