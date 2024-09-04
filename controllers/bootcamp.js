exports.getAllBootcamps = (req,res,next) =>{

    res.status(200).send({success: 200, msg:"Show All  bootcamps"})

}



exports.createBootcamp = (req,res,next) =>{
    res.status(200).send({success: 200, msg:"Create New bootcamp"})
}


exports.updateBootcamp = (req,res,next) =>{
    res.status(200).send({success: 200, msg:`Update Bootcamp ${req.params.id}`})
}


exports.getBootcampById = (req,res,next)=>{
    res.status(200).send({success:true, msg:`Get Bootcamp ${req.params.id}`})
}


exports.deleteBootcampById = (req,res,next)=>{
    res.status(200).send({success:true, msg:`Delete Bootcamp ${req.params.id}`})
}

