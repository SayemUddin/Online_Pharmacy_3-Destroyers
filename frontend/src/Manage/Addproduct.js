import axios from "axios";
import React, { useState } from "react";

const Addproduct = () => {
    const [product, setProduct] = useState({
        name:"",
        price:0,
        quan:0,
        desc:"",
        img:"",
    })
    const handleChangeValue = (e)=>{
         setProduct((prev)=>({...prev,[e.target.name]:e.target.value}))
       // console.log(e.target.name);
    }
    const addProduct = ()=>{
        if(!name || !price || !img || !desc || !quan ){
          window.alert("Please add all Data");
          return;
        }
        const res = window.confirm("Are you sure?");
        if(!res){
            return;
        }
        //console.log(product);//post request jacche addproduct path a usestate er product a 
        axios.post("http://localhost:5000/addproduct",product).then((res)=>{
             if(res.data && res.data.acknowledged && res.data.insertedId){
                window.alert("Data is inserted Succesfully")
                setProduct({
                  name:"",
                  price:0,
                  quan:0,
                  desc:"",
                  img:"",
              })
             }else{
                window.alert("Data is inserted Failure")
             }
        })
    }
    const {name,price,quan,desc,img} = product
  return (
    <div className="py-10">
      <div className=" rounded shadow-lg w-2/4 mx-auto px-5 py-4">
        <h1 className="text-3xl text-center py-2 font-semibold">ADD PRODUCT</h1>
        <div className="flex flex-col space-y-2">
          <div className="">
            <label className="text-2xl  font-semibold" htmlFor="name">
              Name:
            </label>
            <input
              id="name"
              name="name"
              value={name}
              onChange={handleChangeValue}
              className="bg-gray-50  outline-none py-2 px-2 rounded w-full block"
              type="text"
              placeholder="Enter product name"
            />
          </div>
          <div className="">
            <label className="text-2xl  font-semibold" htmlFor="price">
              Price:
            </label>
            <input
              id="price"
              name="price"
              value={price}
              onChange={handleChangeValue}
              className="bg-gray-50  outline-none py-2 px-2 rounded w-full block"
              type="number"
              placeholder="Enter product price"
            />
          </div>
          <div className="">
            <label className="text-2xl  font-semibold" htmlFor="quan">
              Quantity:
            </label>
            <input
              id="quan"
              name="quan"
              value={quan}
              onChange={handleChangeValue}
              className="bg-gray-50  outline-none py-2 px-2 rounded w-full block"
              type="number"
              placeholder="Enter product quantity"
            />
          </div>
          <div className="">
            <label className="text-2xl  font-semibold" htmlFor="img">
              Image:
            </label>
            <input
              id="img"
              name="img"
              value={img}
              onChange={handleChangeValue}
              className="bg-gray-50  outline-none py-2 px-2 rounded w-full block"
              type="text"
              placeholder="Enter product image url"
            />
          </div>
          <div className="">
            <label className="text-2xl  font-semibold" htmlFor="desc">
              Description:
            </label>
            <textarea
              id="desc"
              name="desc"
              onChange={handleChangeValue}
              className="bg-gray-50  outline-none py-2 px-2 rounded w-full block"
              type="text"
              value={desc}
              placeholder="Enter product Description"
            />
          </div>
          <div>
             <button onClick={()=>{addProduct()}} className="text-white bg-orange-600 px-10 py-2 rounded block mx-auto hover:bg-orange-600">ADD PRODUCT</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Addproduct;