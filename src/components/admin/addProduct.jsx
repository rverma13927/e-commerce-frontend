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


const defaultValues = {
  product_name: "",
  price: "",
  features: "",
  category: "",
  imageUrl: ""
};

export default function Category() {
  const [category, setOptionOfCategory] = useState('');
  const [addProductResponse, setAddProductResponse] = useState('');

  //Snakbar
  const [open, setOpen] = React.useState(false);

  // Snakbar 
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };
  // Snakbar end 


  useEffect(() => {
    categoryService.getCategories().then(res => {
      if (res) {
        setOptionOfCategory(res.data);
      }
    })
    return () => {
    }
  }, []);

  const [formValues, setFormValues] = useState(defaultValues);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  const [severity, setSeverity] = useState("success");
  const handleSubmit = (event) => {
    event.preventDefault();
    if (formValues.product_name == '') {
      setValues("error", true, 'Please enter the product name!!');
      return;
    }
    if (formValues.price == '') {
      setValues("error", true, 'Please enter the product price!!');
      return;
    }
    if (formValues.imageUrl == '') {
      setValues("error", true, 'Please enter the imageUrl!!');
      return;
    }
    if (formValues.category == '') {
      setValues("error", true, 'Please select the product category!!');
      return;
    }
    if (formValues.features == '') {
      setValues("error", true, 'Please enter the product features!!');
      return;
    }

    ProductService.addProduct(formValues).then((response) => {
      setAddProductResponse(response.data.message);
      setSeverity("success");
      setOpen(true);

      setFormValues(defaultValues);
    }).catch(() => {
      setOpen(true);

    });
  }
  const setValues = (severity, open, message) => {
    setSeverity(severity);
    setOpen(open);
    setAddProductResponse(message);
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

        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
          <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
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
                    <TextField fullWidth name="product_name" label="Product Name" variant="outlined" color="secondary" value={formValues.product_name} onChange={handleInputChange} />
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
                      <TextField fullWidth name="price" label="Product Price" color="secondary" value={formValues.price} onChange={handleInputChange} />
                    </FormControl>
                  </Grid>

                </Grid>
              </Grid>
              <Grid item xs={12} sm={6} md={6} >

                <Grid container>
                  <Grid item xs={2}>
                    <FormatListBulletedIcon color="primary" fontSize="large" />
                  </Grid>
                  <Grid item xs={10}>
                    <TextField fullWidth name="imageUrl" label="Image Url" color="secondary" value={formValues.imageUrl} onChange={handleInputChange} />

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
                          name="category"
                          value={formValues.category}
                          label="Category"
                          onChange={handleInputChange}
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
              <Button>
                <AddCircleIcon fullWidth color="primary" fontSize="large" />
              </Button>
            </Grid>
          </Grid>
          <Grid container alignItems="center" justifyContent="center">

            <Grid item xs={8}  >
              <TextField fullWidth name="features" label="Product Features" color="secondary" value={formValues.features} onChange={handleInputChange} />
            </Grid>
          </Grid>

          <Button variant="contained" color="primary" type="submit" sx={{ my: 2 }}>
            Add
          </Button>
        </form>
      </Box>
    </div >
  );
}