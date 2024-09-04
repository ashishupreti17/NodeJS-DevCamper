const express = require("express");
const dotenv = require("dotenv");
const {getAllBootcamps,createBootcamp,updateBootcamp, getBootcampById, deleteBootcampById}  = require("../controllers/bootcamp")


const router = express.Router();



router.route('/')
    .get(getAllBootcamps)
    .post(createBootcamp)


router.route('/:id')
    .get(getBootcampById)
    .put(updateBootcamp)
    .delete(deleteBootcampById)






router.get('',(req,res)=>{
   
})


router.post('/',(req,res)=>{

})
router.put('/:id',(req,res)=>{
    res.status(200).send({success: 200, msg:`Update Bootcamp ${req.params.id}`})

})
router.get('/:id',(req,res)=>{

})
router.delete('/:id',(req,res)=>{
    res.status(200).send({success: 200, msg:`Delete bootcamp ${req.params.id}`})

})



module.exports = router;