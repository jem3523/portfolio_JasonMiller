module.exports = function(sequelize, DataTypes) 
{
  var feedback = sequelize.define("feedback", 
  {
    myName:
    {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {len: [1,50]},
    },
    myEmail:
    {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {len: [1,50]},
    },
    myMessage:
    {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {len: [1,250]},
    }
  },
  {freezeTableName: true}
  );

  return feedback;
};
