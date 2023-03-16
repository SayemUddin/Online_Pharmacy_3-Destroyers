import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Manage = () => {
  const [products, setProducts] = useState(null)
  // shb product get krlam and products state a rkhlam.......
  useEffect(() => {
      axios.get("https://online-pharmacy-3-destroyers-backend.onrender.com/products").then((res)=>{
              setProducts(res.data);
      })
  }, [])
    return (
      <div>
           <div className=" my-10">
              <Link to="/addproduct" className="bg-green-500 text-white text-2xl  rounded  px-10 py-2 ">ADD PRODUCT</Link>
           </div>
           <div className="grid grid-cols-1">
              {products && products.length>0 && 
                products.map((e)=>{
                   return <div key={e._id} className="grid grid-cols-3 shadow-sm justify-center items-center p-5 rounded">
                        <div>
                            <img className="w-20 h-20" src={e.img} alt="" />
                        </div>
                        <div className="text-2xl flex flex-col">
                            <span className="text-3xl">Name: {e.name}</span>
                            <span>Price: {e.price}</span>
                            <span>Quantity: {e.quan}</span>
                        </div>
                        <div>
                           <Link to={`/manage/${e._id}`} className="text-xl bg-orange-400 text-white rounded px-20 py-2 ">Select</Link>
                        </div>
                   </div>
                })
              }
           </div>
      </div>
    );
};

export default Manage;
