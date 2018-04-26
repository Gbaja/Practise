const models = require("./index");
const hashPassword = require("../utils/hash_password");

const MenteeRegistrations = (sequelize, DataTypes) => {
  const MenteeRegistrations = sequelize.define("MenteeRegistration", {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    accountType: DataTypes.STRING,
    baseArea: DataTypes.STRING,
    currentMotive: DataTypes.STRING,
    mentorIndustry: DataTypes.STRING,
    reason: DataTypes.STRING,
    biography: DataTypes.STRING,
    createdAt: {
      type: DataTypes.DATE(3)
    },
    updatedAt: {
      type: DataTypes.DATE(3)
    }
  });
  return MenteeRegistrations;
};

module.exports = MenteeRegistrations;