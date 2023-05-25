import * as config from '../config/auth.config';
import * as jwt from 'jsonwebtoken';
import * as bcrypt from "bcryptjs";
import  {User} from '../models/user.model'
// const User = db.user
export let test = (req, res) => {
  res.send({ message: 'tets' })
}
export let signup = (req, res) => {

  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
    gender: req.body.gender,
    city: req.body.city,
    dob: req.body.dob,
  });

  user.save((err, user) => {

    if (err) {
      res?.status(500).send({ message: err });
      return;
    } else {
      var token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 10800 // 3 hours
      });
      res.status(200).send({
        id: user._id,
        name: user.name,
        email: user.email,
        gender: user.gender,
        city: user.city,
        dob: user.dob,
        accessToken: token,
        isPasswordChange:user.isPasswordChange,
        // createdAt:user.createdAt,
        // updatedAt:user.updatedAt
      });
    }

  });
};
export const login = (req, res) => {

  User.findOne({
    email: req.body.email
  })
    .exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }

      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!"
        });
      }

      var token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 10800 // 3 hours
      });
      let userData = {}
      res.status(200).send({
        id: user._id,
        name: user.name,
        email: user.email,
        gender: user.gender,
        city: user.city,
        dob: user.dob,
        accessToken: token,
        isPasswordChange:user.isPasswordChange,
        // createdAt:user.createdAt,
        // updatedAt:user.updatedAt
      });
    });
};