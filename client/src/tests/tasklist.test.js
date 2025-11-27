import { render, screen } from "@testing-library/react";
import TaskList from "../../components/TaskList";

test("renders task list items", () => {
  const mockTasks = [{ _id: "1", title: "Test task", completed: false }];
  render(<TaskList tasks={mockTasks} refresh={() => {}} />);

  expect(screen.getByText("Test task")).toBeInTheDocument();
});
