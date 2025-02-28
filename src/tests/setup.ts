import { sequelize } from "../database";

beforeAll(async () => {
  await sequelize.sync({ force: true }); // Reset database before tests
});

afterAll(async () => {
  await sequelize.close(); // Close connection after tests
});