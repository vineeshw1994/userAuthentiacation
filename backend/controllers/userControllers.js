import expressAsyncHandler from "express-async-handler"
import User from "../models/userModel.js"
import generateToken from '../utils/generateToken.js'

//@desc Auth user/set token
// route POST /api/users/auth
//@access public
const authUser = expressAsyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
  
    if (user && (await user.matchPassword(password))) {
      generateToken(res, user._id);
      res.status(201).json({
        _id: user._id, 
        name: user.name,
        email: user.email,
      });
    } else {
      res.status(400);
      throw new Error('Invalid email or password');
    }
  });
  

//@desc Auth user/new user
// route POST /api/users/users 
//@access public
const registerUser = expressAsyncHandler (async(req,res) =>{
    //console.log(req.body)
    const {name,email,password} = req.body
    const userExist = await User.findOne({email})
    if(userExist){
        res.status(400)
        throw new Error('User already exist')
    }
    const user = await User.create({
        name,email,password
    })

    if(user){
        generateToken(res, user._id)
        res.status(201).json({
            _id: user._id,
            name:user.name,
            email:user.email
        })
    }else{
        res.status(400);
        throw new Error('Invalid user data ')
    }

    res.status(200).json({message:'register user'})
})

//@desc Auth user/user
// route get /api/users/logout 
//@access public
const logout = expressAsyncHandler (async(req,res) =>{
    res.cookie('jwt', '',{
        httpOnly:true,
        expires:new Date(0)
    } )

    res.status(200).json({message:'user logged logout'})
})

//@desc Get user profiles
// route get /api/users/users/profiles
//@aupdateUserProfile
const getUserProfile = expressAsyncHandler (async(req,res) =>{

    const user = {
        _id:req.user._id,
        name:req.user.name,
        email:req.user.email
    }


    res.status(200).json(user)
})

//@desc update user profile
// route PU T /api/users/profile
//@access private
const updateUserProfile = expressAsyncHandler (async(req,res) =>{
  const user = await User.findById(req.user._id);
  
  if(user){
    user.name = req.body.name  || user.name 
    user.email = req.body.email || user.email

    if(req.body.password){
        user.password = req.body.password
    }
    const updatedUser = await user.save()
    res.status(200).json({
        _id:updatedUser._id,
        name:updatedUser.name,
        email:updatedUser.email
    })
  }else{
    res.status(404);
    throw new Error('User not found')
  }


    // res.status(200).json({message:'Update user profile'})
})

export { 
    authUser,
    registerUser,
    logout,
    getUserProfile,
    updateUserProfile
}