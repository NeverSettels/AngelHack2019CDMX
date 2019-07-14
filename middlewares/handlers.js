exports.findHastag =()=>{
  return (req,res,next) =>{
    const {content} = req.body
  if(content.includes('#')){
    let index = content.indexOf('#')
    let index2 = content.indexOf(" ", index)
    let hashTag = content.Substring(index,index2)
    Hashtag.Create({hashTag})
    next()
  }else{
    next()
    }
  }
}