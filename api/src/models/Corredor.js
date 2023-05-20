const mongoose = require("mongoose");
const validator = require("validator");

const CorredorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      required: true,
      validate: {
        validator: validator.isEmail,
        message: "El correo electrónico debe tener un formato válido",
      },
    },
    birthdate: {
      type: String,
    },
    photo: {
      type: String,
    },
    country: {
      type: String,
    },
    contactNumber: {
      type: String,
    },
    description: {
      type: String,
    },
    classifications: {
      type: String,
    },
    average_delay: {
      type: String,
    },
    incidences: {
      type: String,
    },
    hired_leads: {
      type: String,
    },
    rol: {
      type: String,
      required: true,
    },
    deleted: {
      type: Boolean,
      default: false,
      select: false,
    },
  },
  { timestamps: true }
);

CorredorSchema.pre("find", function () {
  this.where({ deleted: false });
});

const Corredor = new mongoose.model("corredor", CorredorSchema);

module.exports = Corredor;
