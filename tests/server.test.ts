import request from "supertest";
import app from "../src/index"; 

describe('API Routes', () => {
  it('should return a welcome message', async () => {
    // Send a GET request to the endpoint
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello from the routes!');
  });

  it('should return players', async () => {
    // Send a GET request to the endpoint
    const response = await request(app).get('/api/players');
    expect(response.status).toBe(200);
    expect(response.text).toBe('[{\"VideogameId\":1,\"Name\":\"Super Smash Bros. Melee\"},{\"VideogameId\":4,\"Name\":\"Super Smash Bros.\"},{\"VideogameId\":1386,\"Name\":\"Super Smash Bros. Ultimate\"}]');
  });
});