// import { Sequelize, DataTypes } from 'sequelize';
// import path from 'path';
// import { readdirSync } from 'fs';

// import configs from '../config/config';
// import { Mode } from '../types';

// const basename = path.basename(__filename);
// const env = (process.env.NODE_ENV as Mode) || 'development';
// const db = {};

// const sequelize = new Sequelize(configs[env]);

// readdirSync(__dirname)
//   .filter((file) => {
//     return (
//       file.indexOf('.') !== 0 &&
//       file !== basename &&
//       file.slice(-3) === '.js' &&
//       file.indexOf('.test.js') === -1
//     );
//   })
//   .forEach((file) => {
//     const model: NodeRequire = require(path.join(__dirname, file))(
//       sequelize,
//       DataTypes
//     );
//     db[model.name] = model;
//   });

// Object.keys(db).forEach((modelName) => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });

// db.sequelize = sequelize;
// db.Sequelize = Sequelize;

// module.exports = db;
