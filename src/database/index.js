import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Aluno from '../models/Aluno';
import User from '../models/Users';
import Foto from '../models/Foto';

const models = [Aluno, User, Foto];

const connection = new Sequelize(databaseConfig);

async function verifyConnectDatabase(connect) {
  try {
    await connect.authenticate();
    return 'Connection has been established successfully';
  } catch (error) {
    throw new Error(`Unable to connect to the database -> ${error}`);
  }
}

verifyConnectDatabase(connection)
  .then((msg) => console.log(msg))
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
