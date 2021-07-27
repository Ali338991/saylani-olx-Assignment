import { useState, useEffect } from "react";
import axios from "axios";


export function CategoriesHook() {

    // logics
  const [products, setProducts] = useState([]); 
  const [loading, setLoading] = useState(false);
async function fetchProducts() {

    //Main Logic
    try{
        setLoading(true)
        let products = await axios.get('https://fakestoreapi.com/products')
        // console.log("products",products.data);
       setProducts(products.data)
    }
    catch(err){
     console.log("error", err)
    }
    finally{
        setLoading(false)
    }
    
}
//Call get data 

useEffect(() => {
    
fetchProducts()
}, [])


// return logics
  return [products,loading]
}
// end of views
