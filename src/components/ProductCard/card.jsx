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
import { maxHeight, padding } from '@mui/system';
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';
import properties from '../../envVariables/local';
import ProductService from '../../service/ProductService';
import cartService from '../../service/cartService';
import localStorageService from '../../service/localStorageService';
import { CardContent, Typography } from '@mui/material';
export default function ProductCard() {

  const { id } = useParams();

  const [productData, setproductData] = useState()
  const [features, setFeatures] = useState();
  useEffect(() => {

    ProductService.getProductById(id).then(res => {
      setproductData(res);
      let s = JSON.stringify(res.data.features).replaceAll('"', '').split(",");
      setFeatures(s);
      console.log(s)
      //  console.log("product" + JSON.stringify(productData.data.imageUrl));
    })
    return () => {
    }
  }, [id])

  const addToCart = () => {
    const res = cartService.saveIntoCard(localStorageService.getUserId(), id);
    console.log(res);
  }

  if (productData == undefined) return (<span>loading...</span>);


  if (productData != undefined) {
    return (

      <>
        <Row>
          <Col md={6}>
            <Card sx={{ maxWidth: 300, maxHeight: 1000 }}>
              <CardMedia
                component="img"
                // height="400px"
                // width="258.97px"
                image={productData.data.imageUrl}
                alt="green iguana"
              />

              <CardActions style={{ padding: "0px 0px", margin: 0 }}>
                <Container fluid>
                  <Row className="justify-content-md-center">
                    <Col sm={7} style={{ paddingLeft: 0, paddingRight: 0, margin: 0 }}><Button style={{ fontSize: "10px", backgroundColor: "orange", color: "white" }} onClick={addToCart}><ShoppingCartIcon /> Add to cart</Button></Col>
                    <Col sm={5} style={{ paddingLeft: 0, paddingRight: 0, margin: 0 }}><Button style={{ backgroundColor: "#fb641b", color: "white", fontSize: "10px" }} ><FlashOnIcon />Buy now</Button></Col>
                  </Row>
                </Container>
              </CardActions>
            </Card>
          </Col>
          <Col sm={6}>
            <Card sx={{ maxWidth: 345 }}>

              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  <h6 style={{ textAlign: "left" }}>{productData.data.product_name}</h6>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <ul style={{ textAlign: "left", fontFamily: "arial", fontSize: "15px" }}>
                    {
                      features && features.map((p) => {
                        return <li>{p}</li>
                      })
                    }
                  </ul>
                </Typography>
              </CardContent>

            </Card>




          </Col>
        </Row>
      </>
    );
  }
}
