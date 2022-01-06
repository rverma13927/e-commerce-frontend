import { Col, Form, Row } from 'react-bootstrap';

import { useEffect, useState } from 'react';
import { Select } from '@mui/material';
import categoryService from '../../service/category';
import { Grid, TextField, FormControl, InputLabel, FormHelperText, Input, FormControlLabel, FormLabel, RadioGroup, Radio, MenuItem, Slider } from '@mui/material';

import { Button } from '@mui/material';
import ProductService from '../../service/ProductService';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import React from 'react';
export default function Category() {
  const [category, setOptionOfCategory] = useState('');
  const [productName, setProductName] = useState();
  const [productPrice, setProductPrice] = useState(0);
  const [features, setFeatures] = useState();
  const [categorySelected, setCategorySelected] = useState('');
  const [addProductResponse, setAddProductResponse] = useState('Something went wrong!!');


  // Snakbar 
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  // snakbar end 


  useEffect(() => {

    categoryService.getCategories().then(res => {
      if (res) {
        setOptionOfCategory(res.data);
      }
    })

    return () => {

    }
  }, []);
  const handleCategoryChange = (event) => {
    console.log("fdsfs" + event.target.value)
    setCategorySelected(event.target.value);
  }
  const handleFeatures = (event) => {
    setFeatures(event.target.value);
  }

  const handleProductName = (event) => {
    setProductName(event.target.value);
    console.log(productName);
  }
  const handleProductPrice = (event) => {
    setProductPrice(event.target.value);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    const product = {
      product_name: productName,
      price: productPrice,
      features: features,
      category: categorySelected
    }


    ProductService.addProduct(product).then((response) => {
      console.log(response);
      setAddProductResponse(response.data.message);
      setOpen(true);


      setProductName('');
      setProductPrice('');
      setCategorySelected('');
      setFeatures('');
    }).catch(() => {
      setOpen(true);

    });
  }

  const ariaLabel = { 'aria-label': 'description' };
  return (


    <div>
      <b>Enter the details of the product :</b>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          {addProductResponse}
        </Alert>
      </Snackbar>
      <form onSubmit={handleSubmit}>

        <Grid container >
          <Grid item xs={12} sm={6} md={5} style={{ padding: "50px" }}>
            <Input defaultValue="" inputProps={{ 'aria-label': 'description' }} placeholder="Product Name" onChange={handleProductName} />
          </Grid>
          <Grid item xs={12} sm={6} md={5} style={{ padding: "50px" }}>
            <Input defaultValue="" inputProps={{ 'aria-label': 'description' }} placeholder="Product Price" onChange={handleProductPrice} />

          </Grid>
          <Grid item xs={12} sm={6} md={5} style={{ padding: "50px" }}>
            <Input defaultValue="" inputProps={{ 'aria-label': 'description' }} placeholder="Product Features" onChange={handleFeatures} />

          </Grid>
          <Grid item xs={12} sm={6} md={6} style={{ padding: "50px" }}>
            <FormControl fullWidth>
              <InputLabel id="category">Category</InputLabel>
              <Select
                labelId="category"
                id="demo-simple-select"
                //  this value suggest what to show in when you select
                value={categorySelected}
                label="Category"
                onChange={handleCategoryChange}
              >
                {
                  category && category.map((p) => {
                    return <MenuItem key={p.category_id} value={p.category_id}>{p.category_name}</MenuItem>
                  })
                }
              </Select>
            </FormControl>
          </Grid>

        </Grid>
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </form>
    </div>


  );


}