import React from "react";
import Customerservice from "../../service/Customer.js"

class Customer extends React.Component{
        constructor(props){
            super(props);
            this.price=0;
          //  var response= Customerservice.getCustomerById(1);
          //  response.then((result)=>{
             
          //    console.log("hfkjsfskjs" + result.data.price)
          //     //  this.price = result.data.price;
          //  },(error)=>{
             
          //  });
        }

        render() {
            return (
              <p className="App-intro">
                Hello Man  {this.price}
                <i class="fa fa-shopping-cart" aria-hidden="true" ></i>
                <i class="fas fa-shopping-cart"></i>
              </p>
              
            )
          }
}

 export default Customer;