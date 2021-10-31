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

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardMedia
        component="img"
      
        width="258.97"
        image="https://rukminim1.flixcart.com/image/832/832/ko0d6kw0/mobile/6/h/y/iphone-12-mjnm3hn-a-apple-original-imag2k2v6ehvnzfd.jpeg?q=70"
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
               <Col style={{paddingLeft: "0px", paddingRight: "0px"}}><Button style={{backgroundColor:"orange", color: "white"}}><ShoppingCartIcon/> Add to cart</Button></Col>
               <Col><Button style={{backgroundColor:"#fb641b", color: "white"}} ><FlashOnIcon/>Buy now</Button></Col>
           </Row>
        </Container> 
       
    
        {/* <Button size="small">Learn More</Button> */}
      </CardActions>
    </Card>
  );
}
