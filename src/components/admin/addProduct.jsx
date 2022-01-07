import { Col, Form, Row } from 'react-bootstrap';

import { useEffect, useState } from 'react';
import { Select } from '@mui/material';
import categoryService from '../../service/category';
import { Grid, FormControl, InputLabel, FormHelperText, Input, FormControlLabel, FormLabel, RadioGroup, Radio, MenuItem, Slider } from '@mui/material';

import { Button } from '@mui/material';
import ProductService from '../../service/ProductService';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import React from 'react';
import CategoryIcon from '@mui/icons-material/Category';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import AttachMoney from '@mui/icons-material/AttachMoney';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import TextField from '@mui/material/TextField';
export default function Category() {
  const [category, setOptionOfCategory] = useState('');
  const [productName, setProductName] = useState();
  const [productPrice, setProductPrice] = useState(0);
  const [features, setFeatures] = useState();
  const [categorySelected, setCategorySelected] = useState('');
  const [addProductResponse, setAddProductResponse] = useState('Something went wrong!!');
  const [imageURL, setimageURL] = useState('');


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
  const handleImageUrl = (event) => {
    setimageURL(event.target.value)
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    const product = {
      product_name: productName,
      price: productPrice,
      features: features,
      category: categorySelected,
      imageUrl: imageURL
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
      <Box
        width={900} height={500}
        bgcolor="white"
        alignItems="center"
        justifyContent="center"
        margin="auto"

      >


        <Typography color="secondary" variant="h4">
          Enter the details of the product :
        </Typography>

        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
            {addProductResponse}
          </Alert>
        </Snackbar>
        <form onSubmit={handleSubmit}>
          <Box sx={{ my: 3 }}>
            <Grid container spacing={10}>

              <Grid item xs={12} sm={6} md={6} >
                <Grid container>
                  <Grid item xs={2}>
                    <Inventory2Icon color="primary" fontSize="large" />
                  </Grid>
                  <Grid item xs={10} >
                    <TextField fullWidth label="Product Name" variant="outlined" color="secondary" onChange={handleProductName} />
                    {/* <Input fullWidth defaultValue="" inputProps={{ 'aria-label': 'description' }} placeholder="Product Name" onChange={handleProductName} /> */}
                  </Grid>
                </Grid>
              </Grid>


              <Grid item xs={12} sm={6} md={6} >
                <Grid container>
                  <Grid item xs={2}>
                    <AttachMoney color="primary" fontSize="large" />
                  </Grid>
                  <Grid item xs={10} sx={{ mx: 0 }}>
                    <FormControl fullWidth>
                      <TextField fullWidth label="Product Price" color="secondary" onChange={handleProductPrice} />
                    </FormControl>
                    {/* <Input fullWidth defaultValue="" inputProps={{ 'aria-label': 'description' }} placeholder="Product Price" onChange={handleProductPrice} /> */}
                  </Grid>

                </Grid>
              </Grid>
              <Grid item xs={12} sm={6} md={6} >

                <Grid container>
                  <Grid item xs={2}>
                    <FormatListBulletedIcon color="primary" fontSize="large" />
                  </Grid>
                  <Grid item xs={10}>
                    <TextField fullWidth label="Image Url" color="secondary" onChange={handleImageUrl} />
                    {/* <Input defaultValue="" inputProps={{ 'aria-label': 'description' }} placeholder="Image Url" onChange={handleImageUrl} /> */}

                  </Grid>
                </Grid>


              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <Box component="span" >
                  <Grid container>
                    <Grid item xs={2}>
                      <CategoryIcon color="primary" fontSize="large" />
                    </Grid>
                    <Grid item xs={10}>
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


                </Box>
              </Grid>

            </Grid>
          </Box>
          <Grid container alignItems="center" justifyContent="center">
            <Grid item xs={2}>
              <Typography fullWidth>
                Add the features
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <Button onChange={handleFeatures}>
                <AddCircleIcon fullWidth color="primary" fontSize="large" />
              </Button>
            </Grid>
          </Grid>
          <Grid container alignItems="center" justifyContent="center">

            <Grid item xs={8}  >
              <TextField fullWidth label="Product Features" color="secondary" onChange={handleFeatures} />
              {/* <Input defaultValue="" inputProps={{ 'aria-label': 'description' }} placeholder="Product Features" onChange={handleFeatures} /> */}
            </Grid>
          </Grid>

          <Button variant="contained" color="primary" type="submit" sx={{ my: 2 }}>
            Submit
          </Button>
        </form>
      </Box>
    </div >


  );


}