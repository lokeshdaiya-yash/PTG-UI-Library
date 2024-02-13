// import { request } from "express";
// import User from "../schema/user-schema.js";
// import * as jwt from 'jsonwebtoken';


// export const addMasterdata= async (request, response)=>{
//   const masterdata =request.body

//   const newMasterData = new Masterdata(masterdata)
//   try {
//       await newMasterData.save();
//       response.status(201).json(newMasterData);
//   } catch (error) {
//       response.status(409).json({ message: error.message });
//   }

//   console.log(masterdata);
// }


// export const addUser = async (request, response) => {
//   const user = request.body;
//   const newUser = new User(user);
//   try {
//     await newUser.save();
//     response.status(201).json(newUser);
//   } catch (error) {
//     response.status(409).json({ message: error.message });
//   }
// };


// export const getUsers = async (request, response) => {
//     try {
//       const users = await User.find({});
//       response.status(200).json(users);
//     } catch (error) {
//       response.status(404).json({ message: error.message });
//     }
//   }; 


//   export const getUser = async (request, response) => {
//     try {
//       const user = await User.findById(request.params.id );
//       response.status(200).json(user);
//     } catch (error) {
//       response.status(404).json({ message: error.message });
//     }
//   };
  
//   export const editUser = async ( request, response)=> {
//       let user = request.body;
//       const editUser = new User(user);
//       try {
//           await User.updateOne({_id: request.params.id}, editUser)
//           response.status(201).json(editUser);
          
//       } catch (error) {
//       response.status(409).json({ message: error.message });
          
//       }
//   }

//   export async function Register(req, res) {
//     // get required variables from request body
//     // using es6 object destructing
//     const { username, email, password } = req.body;
//     try {
//         // create an instance of a user
//         const newUser = new User({
//             username,
//             email,
//             password,
//         });
//         // Check if user already exists
//         const existingUser = await User.findOne({ email });
//         if (existingUser)
//             return res.status(400).json({
//                 status: "failed",
//                 data: [],
//                 message: "It seems you already have an account, please log in instead.",
//             });
//         const savedUser = await newUser.save(); // save new user into the database
//         const { role, ...user_data } = savedUser._doc;
//         res.status(200).json({
//             status: "success",
//             data: [user_data],
//             message:
//                 "Thank you for registering with us. Your account has been successfully created.",
//         });
//     } catch (err) {
//         res.status(500).json({
//             status: "error",
//             code: 500,
//             data: [],
//             message: "Internal Server Error",
//         });
//     }
//     res.end();
// }


// // export async function loginUser(req, res) {
// //   // Get variables for the login process
// //   const { email } = req.body;
// //   try {
// //       // Check if user exists
// //       const user = await User.findOne({ email }).select("+password");
// //       if (!user)
// //           return res.status(401).json({
// //               status: "failed",
// //               data: [],
// //               message:
// //                   "Invalid email or password. Please try again with the correct credentials.",
// //           });
// //       // if user exists
// //       // validate password
// //       const isPasswordValid = bcrypt.compare(
// //           `${req.body.password}`,
// //           user.password
// //       );
// //       // if not valid, return unathorized response
// //       if (!isPasswordValid)
// //           return res.status(401).json({
// //               status: "failed",
// //               data: [],
// //               message:
// //                   "Invalid email or password. Please try again with the correct credentials.",
// //           });
// //       // return user info except password
// //       const { password, ...user_data } = user._doc;

// //       res.status(200).json({
// //           status: "success",
// //           data: [user_data],
// //           message: "You have successfully logged in.",
// //       });
// //   } catch (err) {
// //       res.status(500).json({
// //           status: "error",
// //           code: 500,
// //           data: [],
// //           message: "Internal Server Error",
// //       });
// //   }
// //   res.end();
// // }

//   export const loginUser = ( request, response)=> {
//    User.find({username:request.body.username})
//    .exec()
//    .then(user=>{
//     if(user.length < 1)
//     {
//       response.status(401).json({message: 'user not exist'});
//     }
//     bcrypt.compare(request.body.password,user[0].password,(err,result)=>{
//       if(!result)
//       {
//         return response.status(401).json({msg:'password maching fail'})
//       }
//       if(result)
//       {
//         const token = jwt.sign({
//           username:user[0].username
//         }, 
//         'this is dummy text',
//         {
//           expiresIn:"24"
//         }
//         );
//         response.status(200).json({
//           username:user[0].username,
//           token:token
//         })
//       }
//     })
//    }

//    ).catch(err =>{
//     response.status(500).json({err:err})
//    })
// }
