import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';


const ManageProduct = () => {
    //nirdishto id ashtese
    const {id} = useParams()
    const navigate = useNavigate();
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
    useEffect(() => {
        axios.get(`http://localhost:5000/products/${id}`).then((res)=>{
            if(res.data && res.data._id){
               setProduct(res.data);
            //    console.log(res.data);
            }else{
               setProduct({
        
                name:"",
                price:0,
                quan:0,
                desc:"",
                img:"",
            })
            }
       })
    }, [])
    const updateProduct = ()=>{
        if(!name || !price || !img || !desc || !quan ){//shb field er value dewa ase kina check korbe 
          window.alert("Please add all Data");
          return;
        }
        const res = window.confirm("Are you sure?");
        if(!res){
            return;
        }
        //console.log(product);
        axios.post("http://localhost:5000/updates",product).then((res)=>{
            // console.log(res.data);
             if(res.data && res.data.acknowledged){
                window.alert("Product Succesfully");
                navigate("/manage");
             }else{
                window.alert("Data is inserted Failure")
             }
        })
    }
    const deleteProduct = ()=>{
        // console.log(product);
        const res = window.confirm("Are you sure you want to delete?");
        if(!res){
            return;
        }
        axios.post("http://localhost:5000/products",product).then((res)=>{
             console.log(res.data);
             if(res.data && res.data.acknowledged && res.data.deletedCount){
                window.alert("Product is Deleted");
                navigate('/manage');
                
             }else{
                window.alert("Data is inserted Failure")
             }
        })
    }
    const {name,price,quan,desc,img} = product //destrucuture
    return (
    <div className="py-10">
      {
        id && product._id ? <div className=" rounded shadow-lg w-2/4 mx-auto px-5 py-4">
        <h1 className="text-3xl text-center py-2 font-semibold">MANAGE PRODUCT</h1>
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
          <div className='flex justify-center'>
             <button onClick={()=>{updateProduct()}} className="text-white bg-green-600 px-10 py-2 my-5 rounded block mx-auto hover:bg-green-700">UPDATE PRODUCT</button>
             <button onClick={()=>{deleteProduct()}} className="text-white bg-red-600 px-10 py-2 my-5 rounded block mx-auto hover:bg-red-700">DELETE PRODUCT</button>
          </div>
        </div>

      </div>: <div className='text-4xl text-center py-10'>NO PRODUCT FOUND</div>
      }
    </div>
    );
};

export default ManageProduct;