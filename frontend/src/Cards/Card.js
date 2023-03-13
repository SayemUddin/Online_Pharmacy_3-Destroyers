import axios from 'axios';
import React, { useState } from 'react';

const Card = (props) => {

    const [quan, setQuan] = useState(props.quan)
    const orderItem = ()=>{
        if(quan<1){
            window.alert("OUT OF STOCK");
            return;
        }
        const newQuan = quan -1;
        axios.post("http://localhost:5000/update",{_id:props.id, quan: newQuan}).then((res)=>{
            
            if(res.data && res.data.acknowledged){
               window.alert("Order is Sucessfull!")
               setQuan(newQuan);
            }else{
               window.alert("Data is inserted Failure")
            }
       })
    }
    return (
        <div className=' shadow rounded-md p-5 cursor-pointer hover:bg-lime-400 '>
            <img  className='h-60' src={props.img} alt="" />
            <div>
                <h1 className='text-3xl font-semibold'>{props.name}</h1>
                <p className='text-xl '>Price: <span className='text-2xl font-bold'>{props.price}$</span></p>
                <p className='text-xl '>Quantity: <span className='text-2xl font-bold'>{quan}</span></p>
                <p className='text-md py-2'>
                    {props.desc}
                </p>
                
            </div>
            <div>
                <button onClick={()=>{ orderItem()}} className='px-20 py-2 block mx-auto hover:bg-orange-600 bg-green-500 text-xl text-white uppercase rounded'>Order Now</button>
            </div>
        </div>
    );
};

export default Card;