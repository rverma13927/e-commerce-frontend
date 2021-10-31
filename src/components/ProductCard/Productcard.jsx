

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Productcard(props){
     
   
   return (

          <>
          <a href={"/product-info/" + props.product_id}  style={{textDecoration: "none",color:"black"}}>
           <Container>
               <Row>
                  <Col sm={3}>
                      <img src={props.imageUrl} alt="mobile image"/>     
                  </Col>

                  <Col>
                      <h6 style={{textAlign : "left"}}>{props.product_name}</h6>
                         <ul style={{textAlign : "left",fontFamily: "arial",fontSize: "15px"}}>
                          {    
                              props.features && props.features.map((p)=>{                          
                                return <li>{p}</li>
                             })
                          }
                       </ul>
                  </Col>
               </Row>
           </Container>
           </a>
          
          {/* <ul> {props.product_info} </ul> */}
          
          
          
          </>
   )

} 