import React, { useEffect, useState } from 'react';
import Card from '../Cards/Card';
import axios from 'axios'
const Services = (props) => {
    const [products, setProducts] = useState(null)
    useEffect(() => {
        axios.get("https://online-pharmacy-3-destroyers-backend.onrender.com/products").then((res)=>{
            if(props.lim){
                setProducts(res.data.slice(0,props.lim));
            }else{
                setProducts(res.data);
            }
        })
    }, [])
    return (
        <div className='py-10' id='services'>
            <h1 className='text-5xl text-center uppercase  font-semibold text-green-500'>Our <span className='text-orange-500'>Products</span></h1>
            {/* Card containers */}
            <div className='grid grid-cols-3 gap-10 pt-10'>
                {products && 
                    products.map((e)=>{
                        return <Card name={e.name} price={e.price} img={e.img} key={e._id} desc={e.desc.slice(0,100)} quan={e.quan} id={e._id} />
                    })
                }
            </div>
            <div>
               
            </div>
        </div>
    );
};
// .map er maddhome loop chalaisi card er name price eshb return krtese
export default Services;