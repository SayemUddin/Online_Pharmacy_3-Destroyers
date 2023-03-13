import React from 'react';

const Contact = () => {
    return (
       <div className='grid grid-cols-2 gap-20'>
            <div className='p-20'>
                <img src="https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg?w=740&t=st=1672314441~exp=1672315041~hmac=8e600e02951afd1387d94b4710990eeeb2a440f7577992f6efc1ef92b16323a1" alt="" />
            </div>
            <div>
            <div className="py-10">
      <div className=" rounded shadow-lg w-full mx-auto px-5 py-4">
        <h1 className="text-3xl text-center py-2 font-semibold uppercase">Connect Us </h1>
        <div className="flex flex-col space-y-5">
          <div className="flex flex-col space-y-5">
            <label className="text-2xl   font-semibold" htmlFor="name">
              Name:
            </label>
            <input
              id="name"
              name="name"
             
              className="bg-gray-50  outline-none py-2 px-2 rounded w-full block"
              type="text"
              placeholder="Enter your name"
            />
          </div>
          <div className=" flex flex-col space-y-5">
            <label className="text-2xl   font-semibold" htmlFor="Email">
              Email:
            </label>
            <input
              id="Email"
              name="Email"
              className="bg-gray-50  outline-none py-2 px-2 rounded w-full block"
              type="email"
              placeholder="Enter email"
            />
          </div>
          <div className="flex flex-col space-y-5">
            <label className="text-2xl   font-semibold" htmlFor="msg">
             Message
            </label>
            <textarea
              id="msg"
              name="msg"
              className="bg-gray-50  outline-none py-2 px-2 rounded w-full block"
              type="text"
              
              placeholder="Enter your message"
            />
          </div>
          <div>
             <button onClick={()=>{}} className="text-white bg-orange-600 px-10 py-2 rounded block mx-auto hover:bg-orange-600">SUBMIT</button>
          </div>
        </div>

      </div>
    </div>
            </div>
       </div>
    );
};

export default Contact;