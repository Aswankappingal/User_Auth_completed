
import Admin_schema from "./user.model.js"
import bcrypt from "bcrypt";
import pkg from "jsonwebtoken";
const {sign}=pkg;

export function addStaff(req,res)
{
    
   try {
    const {username,password,confirmpassword}=req.body;
    console.log(username,password,confirmpassword);
    if(!(username&&password&&confirmpassword))
    return res.status(404).send("fields are empty")
    if(password!=confirmpassword)
    return res.status(404).send("password and confirm password are not same")
    console.log(req.body);
    bcrypt.hash(password,10)
    .then((hashedPwd)=>{
      Admin_schema.create({username,password:hashedPwd,confirmpassword});
    })
    .then(()=>{
        res.status(201).send("sucessfully registered")
    })
  .catch((error)=>{
    res.status(500).send(error)
   })
    
   } catch (error) {
    console.log(error);
    
   }
    
}



export async function login(req, res) {
  try {
   console.log(req.body);
   const { username, password } = req.body;
   const usr = await Admin_schema.findOne({ username })
   console.log(usr);
   if (usr === null) return res.status(404).send("username or password doesnot exist");
   const success =await bcrypt.compare(password, usr.password)
   console.log(success);
   if (success !== true) return res.status(404).send("username or password doesnot exist");
   const token = await sign({ username }, process.env.JWT_KEY, { expiresIn: "24h" })
   console.log(token);
   res.status(200).send({ msg: "successfullly login", token })
   res.end();
   
  } catch (error) {
   console.log(error);
   
  }
 }


 


export async function home(req,res)
{
 
  try {
    
     const{username}=req.user;
    res.status(200).send({msg:`${username}`})
   } 
   catch (error) {
    res.status(404).send(error)
  }
}



 export async function GetDtsilsLoginedStudent(req,res){

  let task=await Admin_schema.findOne({_id:req.user._id})
  console.log(task);
  res.status(200).send({task})
}