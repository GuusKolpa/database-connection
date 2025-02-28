import request from "supertest";
import app from "../index"; 

describe("Server Tests", () => {
  it("should return a welcome message", async () => {
    const res = await request(app).get("/");
    expect(res.status).toBe(200);
    expect(res.text).toBe("Task Manager API is running...");
  });
});