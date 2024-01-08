import React, { useEffect, useState } from "react";
import "./index.scss";
import axios from "axios";
import ProductsTable from "../../companent/products-table-page";
const ProductsPage = () => {
  const [data, setData] = useState([]);
  const[loading,setLoading]=useState(false)
  const BASE_URL = "https://northwind.vercel.app/api";
  const getData = async () => {
    try {
      setLoading(true)
      let responce = await axios(`${BASE_URL}/products`);
    console.log(responce.data);
    setData(responce.data);
    } catch (error) {
      console.log(error);
    }
    finally{
      setLoading(false)
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="products">
      <div className="container">
        <div className="products">
       
          {loading ? <h1>Loading...</h1> : <ProductsTable products={data} />}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
