const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const zombieRoutes = express.Router();
let Zombie = require('./zombie.model');  
const path = require('path');

const port = process.env.PORT ||4000;

app.use(cors());
app.use(bodyParser.json());



const connection = require('./config/keys').mongoURI;

mongoose
.connect(connection)
.then(()=> console.log('MongoDB Connected..'))
.catch(err => console.log(err));


zombieRoutes.route('/').get(function(req, res) {
  Zombie.find(function(err, zombies) {
    if (err) {
      console.log(err);
    } else {
      res.json(zombies);
    }
  });
});

zombieRoutes.route('/:id').get(function(req, res) {
  let id = req.params.id;
  Zombie.findById(id, function(err, zombie) {
    res.json(zombie);
  });
});

zombieRoutes.route('/update/:id').post(function(req, res) {
  Zombie.findById(req.params.id, function(err, zombie) {
    if (!zombie) res.status(404).send('data is not found');
    else zombie.zombie_description = req.body.zombie_description;
    zombie.zombie_responsible = req.body.zombie_responsible;
    zombie.zombie_alive = req.body.zombie_alive;
    zombie.zombie_building = req.body.zombie_building;

    zombie
      .save()
      .then(zombie => {
        res.json('Zombie Updated');
      })
      .catch(err => {
        res.Status((400).send('Update not possible'));
      });
  });
});

zombieRoutes.route('/add').post(function(req, res) {
  let zombie = new Zombie(req.body);
  zombie
    .save()
    .then(zombie => {
      res.status(200).json({ zombie: 'zombie added succesfully' });
    })
    .catch(err => {
      res.status(400).send('Adding zombie failed');
    });
});

app.use('/zombies', zombieRoutes);

if(process.env.NODE_ENV === 'production'){
  app.use(express.statis('crud-zombies/build'))
  app.get('*'),(req,res)=>{
      res.send(path.resolve(__dirname,'crud-zombies','build'),'index.html')
  }
}

app.listen(port, function() {
  console.log('Server is running on Port:' + port);
});
