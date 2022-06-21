const db = require("../models");
const User = db.users;

exports.create = (req, res) => {
  console.log(req.body.firstName)
  const user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    city: req.body.city,
    email: req.body.email
  });
  user.save(user)
    .then(data => {
      res.send(data);
    })
};

exports.findAll = (req, res) => {
  User.find()
    .then(data => {
      res.send(data)
      console.log(data);
    })
}
exports.deleteOne = (req, res) => {
  console.log(req.body.firstName)
  User.deleteOne({"firstName" : req.body.firstName}, (err) => {
    if(err){
      res.send(err)
  }})

  User.find()
  .then(userData => {
    console.log("hihi")
    console.log(userData)
    console.log("jiji")
    res.send(userData)
  })
}
exports.update = (req, res) => {
  console.log("entry in update")
  console.log(req.body._id)
  User.findOneAndUpdate({ _id: req.body.uid }, {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    city: req.body.city,
    email: req.body.email

  }, (err, data) => {
    if (err) {
      res.send(err)
      console.log(err)
    } else {
      res.send(data)
      console.log(data)
    }
  })
}

exports.findOne = (req, res) => {
  console.log("entry in findone")
  User.findById(req.params.id).then((data) => {
    res.send(data)
  })
}