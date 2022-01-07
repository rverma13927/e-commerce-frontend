import FlashOnIcon from '@mui/icons-material/FlashOn';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import * as React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import { padding } from '@mui/system';
import  { useEffect, useState } from 'react';
import {useParams} from "react-router-dom";
import axios from 'axios';
import properties from '../../envVariables/local';
import ProductService from '../../service/ProductService';
import cartService from '../../service/cartService';
import localStorageService from '../../service/localStorageService';

export default function ProductCard() {

    const {id} = useParams();

   const [productData, setproductData] = useState()
   const [features,setFeatures] = useState();
   useEffect(() => {
     
    ProductService.getProductById(id).then(res=>{
        setproductData(res);
        setFeatures(JSON.stringify(res.data.features).split(","));
        // console.log(res.data.features)
          //  console.log("product" + JSON.stringify(productData.data.imageUrl));
    })

     return () => {
      
     }
   },[id])

   const addToCart =()=> {
          const res = cartService.saveIntoCard(localStorageService.getUserId(),id);
          console.log(res); 
  }

   if(productData==undefined) return (<span>loading...</span>);


   if(productData!=undefined){
      return (

    <>
    <Row>
      <Col md={6}>
    <Card sx={{ maxWidth: 400 }}>
      <CardMedia
        component="img"
      
        width="258.97"
        // image={productData.data.imageUrl}
        alt="green iguana"
      />
      {/* <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent> */}
      {/* <CardActions style={{paddingLeft: "0px", paddingRight:"0px", paddingTop:"8px"}}> */}
      <CardActions style={{padding:"8px 0px"}}>
        {/* <Button size="small">Share</Button> */}
        {/* <i class="fa fa-shopping-cart" aria-hidden="true"></i> */}
        <Container fluid>
           <Row className="justify-content-md-center">
               <Col style={{paddingLeft: "0px", paddingRight: "0px"}}><Button style={{backgroundColor:"orange", color: "white"}} onClick={addToCart}><ShoppingCartIcon/> Add to cart</Button></Col>
               <Col><Button style={{backgroundColor:"#fb641b", color: "white"}} ><FlashOnIcon/>Buy now</Button></Col>
           </Row>
        </Container> 
       
    
        {/* <Button size="small">Learn More</Button> */}
      </CardActions>
    </Card>
     </Col>
     <Col sm={6}>

     <h6 style={{textAlign : "left"}}>{productData.data.product_name}</h6>
                         <ul style={{textAlign : "left",fontFamily: "arial",fontSize: "15px"}}>
                          {    
                              features && features.map((p)=>{                          
                                return <li>{p}</li>
                             })
                          }
                       </ul>
      

     </Col>
    </Row>
    </>
  );
}
}
