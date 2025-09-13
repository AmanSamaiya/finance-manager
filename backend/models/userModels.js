const mongoose = require("mongoose");
const JWT = require("jsonwebtoken");

const userSchema = new mongoose.Schema(
  {

    username: {
      type: String,
      required: [true, "username is required"],
      trim: true,
      maxLength: [30, "username must be less than 30 characters"],
      minLength: [4, "name must be 4 characters long"]
    },


    email: {
      type: String,
      required: [true, "email is required"],
      unique: [true, "email already in use"],
      lowercase: true,
      maxLength: [30, "email must be less than 30 characters"],
    },
    password: {
      type: String,
      select: false,
      required: [true, "password is required"],
    },
       expenses: [
        {
            text: {
                type: String,
                required: true
            },
            amount: {
                type: Number,
                required: true
            },
            createdAt: {
                type: Date,
                default: Date.now
            }
        }
    ],
    forgotPasswordToken: {
      type: String,
    },
    forgotPasswordExpiryDate: {
      type: Date,
    },
   
  },
  {
    timestamps: true,
  }
);

userSchema.methods = {
  generateAuthToken() {
    const token = JWT.sign(
      { _id: this._id, email: this.email },
      process.env.JWT_SECRET,
      { expiresIn: "24h" }
    );

    return token;
  },
};



module.exports = mongoose.models.User || mongoose.model("User", userSchema);