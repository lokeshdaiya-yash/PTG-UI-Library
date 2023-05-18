import * as jwt from 'jsonwebtoken';
import * as bcrypt from "bcryptjs";
import * as multer from "multer";
import * as nodemailer from "nodemailer";
import * as fs from "fs";
// import * as {promisify} from "until";
// const fs = require('fs')
const { promisify } = require('util')

const unlinkAsync = promisify(fs.unlink)

import { User } from '../models/user.model'
import { SaveFile } from "../models/savefile.model";
const filePath = "./apps/doc-process-backend/src/assets/"
const storage = multer.diskStorage({
    
    destination: (req, file, cb, res) => {
        // const fileSize = parseInt(req.headers["content-length"]);
        if(file.mimetype == 'image/png' || file.mimetype == "image/jpeg" || file.mimetype == 'image/jpg'){
            cb(null, filePath+'signatures')
        }else{            
            cb(null, filePath+'uploads')
        }
    },
    filename: (req, file, cb) => {
        let extArray = file.mimetype.split("/");        
        let extension = extArray[extArray.length - 1];
        cb(null, file.fieldname + '-' + Date.now() + '.' + extension)
    },
})
const uploadStorage = multer({ storage: storage,  limits: { fileSize: 10485760 } })

var transporter = nodemailer.createTransport({
    host: "smtp-relay.sendinblue.com",
    port: 587,
    secure: false, // upgrade later with STARTTLS
    auth: {
        user: "bolanatesting@gmail.com",
        pass: "YIPwBmRF07NcaqxL",
    },
});

export const userData = async (req, res) => {
    await User.findOne({ _id: req.body.userId }).then(data => {
        res.status(200).send({
            data: {
                id: data._id,
                name: data.name,
                email: data.email,
                gender: data.gender,
                city: data.city,
                dob: data.dob,
                isPasswordChange: data.isPasswordChange,
                // createdAt:data.createdAt,
                // updatedAt:data.updatedAt
            },
            messae: 'User data fetched successfully'
        })
    }, err => {
        res.status(500).send({ message: err });
        return;
    })
}

export const uploadFile =  [uploadStorage.single("file"), async (req, res) => {
    if(!req.file){
        return res.status(400).send({ status:false, msg: 'please send file' })
    }
    const myFile = new SaveFile({
        type: req.file.mimetype,
        userId: req.body.userId,
        originalname: req.file.originalname,
        fileName: req.file.filename,
        size: req.file.size,
        fileType: req.body.fileType,
    });
   await myFile.save(async (err, file) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        } else {
           return await res.send({ data: file, msg: 'Upload Successfully' })
        }

    });

}]

export const forgetPassword = (req, res) => {
    let random_password = Math.random().toString(35).substr(2, 6)
    let update = { password: bcrypt.hashSync(random_password.toString(), 8), isPasswordChange: false };
    let filter = { email: req.body.email }
    User.findOneAndUpdate(filter, update, { new: true }).then(data => {
        let message = {
            from: 'document_process@yash.com',
            to: req.body.email,
            subject: 'Updating password',
            text: `Hi, Your New password is ${random_password}`
        }
        transporter.sendMail(message, function (error, info) {
            if (error) {
                console.log(error);
                res.status(500).send({ message: "unable to sent email!!!" })
            } else {
                console.log('Email sent: ' + info.response);

                res.status(200).send({ message: "Temporary password updated successfully" })
            }
        });
    }, err => {
        res.status(500).send({ message: "Something went wrong!!!" })
    })

}

export const updatePassword = async (req, res) => {
    await User.findOne({ _id: req.body.userId }).exec((err, data) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        } else {
            var passwordIsValid = bcrypt.compareSync(req.body.oldPassword, data.password);
            if (!passwordIsValid) {
                return res.status(401).send({
                    accessToken: null,
                    message: "Invalid old Password!"
                });
            } else {
                console.log(req.body);
                let update = { password: bcrypt.hashSync(req.body.newPassword, 8), isPasswordChange: true };
                let filter = { _id: req.body.userId }
                User.updateOne(
                    filter,
                    update,
                    { new: true }
                ).exec((err, passUpdate) => {
                    if (err) {
                        res.status(500).send({ message: err });
                        return;
                    } else {
                        return res.status(200).send({
                            message: "Password updated successfully"
                        });
                    }
                })
            }
        }
    })
}

export const fileListing = async (req, res) => {
    await SaveFile.find({ userId: req.body.userId, fileType:req.body.fileType }).exec((err, list) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        } else {
            return res.status(200).send({
                data: list,
                message: "Data fetched successfully"
            });
        }
    })
}
export const fileDetails = async (req, res) => {
    await SaveFile.findById({ _id: req.body.fileId }).exec((err, data) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        } else {
            if (data == null) {
                return res.status(404).send({
                    message: "File not found!!!"
                });
            } else {
                return res.status(200).send({
                    data: data,
                    message: "Data fetched successfully"
                });
            }
        }
    })
}
export const deleteFile = async (req, res) => {
    await SaveFile.findByIdAndDelete({ _id: req.body.fileId }).exec((err, data) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        } else {
            if (data == null) {
                return res.status(404).send({
                    message: "File not found!!!"
                });
            } else {
                if(req.body.fileType == 'pdf' || req.body.fileType == 'document'){
                    unlinkAsync(filePath+'/uploads/'+req.body.fileName);
                }else{
                    unlinkAsync(filePath+'/signatures/'+req.body.fileName);
                }
                return res.status(200).send({
                    message: "Data deleted successfully"
                });
            }
        }
    })
}

export const updateUser = async (req, res) => {
    // await User.findByIdAndUpdate
    await User.findOneAndUpdate({
        _id: req.body.userId
    }, {
        name: req.body.name,
        gender: req.body.gender,
        dob: req.body.dob,
        city: req.body.city,
        // createdAt:new Date(),
        // updatedAt:new Date()
    }, { new: true }).exec((err, data) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        } else {
            if (data == null) {
                return res.status(404).send({
                    message: "File not found!!!"
                });
            } else {
                return res.status(200).send({
                    message: "Data updated successfully"
                });
            }
        }
    })
}

export const updateFile = [uploadStorage.single("file"), async (req, res) => {

    if(!req.file){
        return res.status(400).send({ status:false, msg: 'Please send file' })
    }
   await SaveFile.findOneAndUpdate({
        _id: req.body.fileId
    }, {
        type: req.file.mimetype,
        destination: req.file.destination,
        path: req.file.path,
        fileName: req.file.filename,
        size: req.file.size,
        isSigned: req.body.isSigned,
        originalname: req.body.mergedPdf ? req.body.mergedPdf : req.body.originalname,
        // createdAt:new Date(),
        // updatedAt:new Date()
    }, { new: true }).exec((err, file) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        } else {
            if(file == null){
                return res.status(500).send({ message: "something went wrong!!!" });
            }
            console.log(req.body.fileName);
            
            if(req.body.fileType == 'pdf' || req.body.fileType == 'document'){
                unlinkAsync(filePath+'/uploads/'+req.body.fileName);
            }else{
                unlinkAsync(filePath+'/signatures/'+req.body.fileName);
            }
            return res.send({ data: file, msg: 'updated Successfully' })
        }

    });

}]

export const uploadSignature =  [uploadStorage.single("file"), async (req, res) => {
    if(!req.file){
        return res.status(400).send({ status:false, msg: 'Please send file' })
    }
    const myFile = new SaveFile({
        type: req.file.mimetype,
        userId: req.body.userId,
        originalname: req.file.originalname,
        fileName: req.file.filename,
        size: req.file.size,
        fileType: req.body.fileType,
    });
   await myFile.save(async (err, file) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        } else {
           return await res.send({ data: file, msg: 'Upload Successfully' })
        }

    });

}]
