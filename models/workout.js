const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: () => new Date()
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "enter an excercise"
      },
      name: {
        type: String,
        trim: true
      },
      duration: {
        type:Number
      },
      weight: {
        type:Number
      },
      reps: {
        type:Number
      },
      set: {
        type:Number
      }
    }
  ]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
