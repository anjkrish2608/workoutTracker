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

// get workouts in range 
router.get("/api/workouts/range", ({ body }, res) => {
  Workout.find({}).limit(7)
    .then(dbWorkouts => {
      res.json(dbWorkouts);
    })
    .catch(err => {
      res.json(err);
    });
});

//edit workout
router.put("/api/workouts/:id", ({ body }, res) => {
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

// post workout
router.post("/api/workouts", ({ body }, res) => {
  Workout.create(body)
    .then(dbWorkout => {
      console.log(dbWorkout);
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;
