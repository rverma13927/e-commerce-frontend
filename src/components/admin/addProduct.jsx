import ProductService from "../../service/ProductService";

export default function AddProduct() {




    return (

        // <FormControl>
        //     <InputLabel htmlFor="my-input">Email address</InputLabel>
        //     <Input id="my-input" aria-describedby="my-helper-text" />
        //     <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
        // </FormControl>
        <form>
        <label>Product name:
          <input type="text" />
        </label>
        <label>Price:
          <input type="Number" />
        </label>
        <label>Features:
          <input type="text" />
        </label>
        <label>Category:
          <input type="Number" />
        </label>
      </form>



        // ProductService.addProduct()


    );


}