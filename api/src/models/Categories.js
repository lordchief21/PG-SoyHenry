const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  
  sequelize.define('Categories', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false ,
    
  }
  );
};