const express = require('express');
const router = express.Router();
const Address = require('../models/address');
const Category=require('../models/category');
const app =express();
const http=require('http').Server(app);
const socketIO=require('socket.io')(http,{
  cors:{
    origin:"http://localhost:3000"
  }
})

// router.post('/', async (req, res) => {
//   try {
//     const address = new Address(req.body);
//     await address.save();
//     res.status(201).send(address);
//   } catch (error) {
//     res.status(400).send(error);
//   }
// });

// router.get('/', async (req, res) => {
//   try {
//     const addresses = await Address.find();
//     res.status(200).send(addresses);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });
// /////////////////////////category//////////////////////////
// router.post('/',async(req,res)=>{
//   try{
//     const Category = new Category(req.body);
//     await address.save();
//     res.status(201).send(category);
//   } catch(error){
//     res.status(400).send(error);
//   }
// });
// router.get('/', async (req, res) => {
//   try {
//     const category = await Category.find();
//     res.status(200).send(category);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });
router.post("/post_address",async(req,res)=>{
  try {
      console.log("on")
      const userAddress = req.body
      const new_address = new Address({
      product_name:userAddress.product_name,
      product_price:userAddress.product_price,
      product_quantity:userAddress.product_quantity,
      manufacturing_date:userAddress.manufacturing_date,
      expiry_date:userAddress.expiry_date,
      category:userAddress.selectcategory
    })
      const result=await new_address.save()
      if(result){return res.status(201).json({status:201,message:"address created",data:result})}
      else{return res.status(400).json({status:400,message:"address  not created",data:{}})}


  } catch (error) {

  }
})
///////Category//////////////////////////////////
    router.post("/post_category",async(req,res)=>{
    try{
    const usercategory=req.body
    console.log(usercategory," user category")
    console.log('im in>>>>>>>')
    const new_category= await Category.create({
    Category_name:usercategory.usercategory
  })
   console.log(new_category,",,,,,,,,,,")
    if(new_category){
    return res.status(201).json({status:201,message:"address created",data:new_category})
    }else{
    return res.status(400).json({status:400,message:"address  not created",data:{}})
  }


} catch (error) {
}

})

router.get('/get_category', async(req,res)=>{
  try {
    const result =  await Category.find()
    if(result){
      return res.status(201).json({status:201,message:"address created",data:result})
    }else{
      return res.status(400).json({status:400,message:"address  not created",data:{}})
    }
  } catch (error) {
    console.log(error)
  }
})
router.get('/get_products', async(req,res)=>{
  try {
    const result =  await Address.aggregate(
      [
        {
          $lookup:{
            from:'categories',
            localField:'category',
            foreignField:'_id',
            as:'category'
          }
        },
        // {
        //   $unwind:{
        //     path:'$category'
        //   }
        // }

      ]
    )
    if(result){
      return res.status(201).json({status:201,message:"address created",data:result})
    }else{
      return res.status(400).json({status:400,message:"address  not created",data:{}})
    }
  } catch (error) {
    console.log(error)
  }
})
socketIO.on('connection', (socket) => {
  console.log(`⚡: ${socket.id} user just connected!`);
  socket.on('disconnect', () => {
    console.log('🔥: A user disconnected');
  });
});

router.get('get_socket',(req,res)=>{
  res.json({
    message:'hellllooowwwww'
  });
});
module.exports = router;
