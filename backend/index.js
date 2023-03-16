const express = require('express');//express require krlam
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');//mongodb er package ba library destructure kore nilam
const port = 5000;//5000 port a run korche
const cors = require('cors');//front end back end error handling
const app = express();//express initialize krlam variable er naam app dilam....

app.use(cors());

app.use(express.json())//server json akare kaj krar jnno...
app.use(express.urlencoded({extended:false}));//web a pathanor jnno
const uri = `mongodb+srv://sayemsharan83:suckersfuck83@projectcluster.bp4pxwm.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
//new client nilam.....

// async ektar por ekta run korbe....
async function run(){
    try{
        await client.connect();
        //await database connect howa chara porer line a jabena
        const userCollection = client.db("telix").collection('products');
        
        // Add Product
        app.post('/addproduct',async (req,res)=>{//path,request & response
            const tempdata = req.body;//front end theke j data gulo pathabo tar body....
            const data = {name:tempdata.name,price:tempdata.price,quan:tempdata.quan,img:tempdata.img,desc:tempdata.desc}//object create krlam
            const result = await userCollection.insertOne(data);//insert krbo
            res.send(result);//result ta pabo
        })
        // Get All products
        app.get('/products',async (req,res)=>{
            const querry={};
            let cursor = userCollection.find(querry);//userCollection query te diye dbe cursor shbkichute set hoye jabe
            const products = await cursor.toArray();
            res.send(products);
        })
        // Get Single Products
        app.get('/products/:id',async(req,res)=>{//specific id
            if(req.params.id && ObjectId.isValid(req.params.id)){
                const querry={_id: ObjectId(req.params.id)};//object function er moddhe oi id ta pass koree object id te covert krlam
                const result = await userCollection.findOne(querry);
                
                res.send(result);
            }else{
                res.status(400);
                res.send("Not valid id");
            }
           
        })
        // Update a product
        app.post('/updates',async(req,res)=>{
            const id = req.body._id;//id alada krlam
            const newdetails = req.body;
            const querry={_id:ObjectId(id)};
            const newvalue = {$set: {name:newdetails.name,price:newdetails.price,quan:newdetails.quan,img:newdetails.img,desc:newdetails.desc}};
            const result = await userCollection.updateOne(querry,newvalue);
            // console.log(newdetails)
            res.send(result);
        })
        // Update quantity
        app.post('/update',async (req,res)=>{
            const id = req.body._id;//request er moddhe body er id access
            
            const newquan = req.body.quan;
            // console.log(newquan);
            // console.log(id);
            const querry={_id:ObjectId(id)};
            const newvalue = {$set: {quan:newquan}};
            const result = await userCollection.updateOne(querry,newvalue);
            res.send(result);
        })
        // Delete a product 
        app.post('/products',async(req,res)=>{
            // console.log(req.body);
            const querry={_id: ObjectId(req.body._id)};
            const result = await userCollection.deleteOne(querry);
            res.send(result);
        })

    }finally{

    }
}

run().catch(console.dir);
app.listen(port,()=>{
    console.log("Server is working");
})