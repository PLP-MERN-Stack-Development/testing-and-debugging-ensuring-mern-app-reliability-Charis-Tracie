import Task from "../../src/models/Task.js";

describe("Task Model", () => {
  it("should have default completed = false", () => {
    const task = new Task({ title: "Test Task" });
    expect(task.completed).toBe(false);
  });
});
