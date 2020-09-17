const router = require("express").Router();
const Workout = require("../models/workout.js");


//get all workouts
router.get("/api/workouts", (req, res) => {
  Workout.find()
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

// post excercise
router.post("/api/exercise", ({ body }, res) => {
  Workout.create(body)
    .then(dbWorkout => {
      console.log(dbWorkout);
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.put("/api/workout/:id", ({ body }, res) => {
  Workout.update({
    _id:mongojs.ObjectId(req.params.id)
  },{
    $set:{
      
    }
  })
    .then(dbWorkout => {
      console.log(dbWorkout);
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;
