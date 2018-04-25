//LOOK INTO DATATYPE VISUAL FOR PASSWORD
const models = require("./index");
const hashPassword = require("../utils/hash_password");

const MentorRegistrations = (sequelize, DataTypes) => {
  const MentorRegistrations = sequelize.define("MentorRegistration", {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    accountType: DataTypes.STRING,
    currentRole: DataTypes.STRING,
    currentCompany: DataTypes.STRING,
    age: DataTypes.STRING,
    biography: DataTypes.STRING,
    offerTags: DataTypes.STRING,
    motivation: DataTypes.STRING,
    createdAt: {
      type: DataTypes.DATE(3)
    },
    updatedAt: {
      type: DataTypes.DATE(3)
    }
  });

  MentorRegistrations.associate = models => {
    MentorRegistrations.hasOne(models.MentorOfferings, {
      foreignKey: "MentorId"
    });
    MentorRegistrations.hasOne(models.MentorMotivations, {
      foreignKey: "MentorId"
    });
  };

  MentorRegistrations.beforeCreate((user, options) => {
    return hashPassword(user.password).then(hashedPw => {
      user.password = hashedPw;
    });
  });
  return MentorRegistrations;
};

module.exports = MentorRegistrations;