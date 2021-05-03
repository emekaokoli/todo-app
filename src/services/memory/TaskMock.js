export const tasks = [
  {
    id: 1,
    title: "Task 1",
    status: "pending",
    created_at: new Date(),
    subtasks: [
      {
        id: 11,
        title: "Subtask 1",
        status: "pending",
        created_at: new Date(),
        todo_id: 1
      },
      {
        id: 12,
        title: "Subtask 2",
        status: "pending",
        created_at: new Date(),
        todo_id: 1
      },
      {
        id: 13,
        title: "Subtask 3",
        status: "completed",
        created_at: new Date(),
        todo_id: 1
      }
    ]
  },
  {
    id: 2,
    title: "Task 2",
    status: "pending",
    created_at: new Date(),
    subtasks: [
      {
        id: 14,
        title: "Subtask 4",
        status: "completed",
        created_at: new Date(),
        todo_id: 2
      },
      {
        id: 15,
        title: "Subtask 5",
        status: "pending",
        created_at: new Date(),
        todo_id: 2
      },
      {
        id: 16,
        title: "Subtask 6",
        status: "pending",
        created_at: new Date(),
        todo_id: 2
      },
      {
        id: 17,
        title: "Subtask 7",
        status: "completed",
        created_at: new Date(),
        todo_id: 2
      },
      {
        id: 18,
        title: "Subtask 8",
        status: "completed",
        created_at: new Date(),
        todo_id: 2
      }
    ]
  }
];
