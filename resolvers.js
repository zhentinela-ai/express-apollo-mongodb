const Task = require("./models/Task");

const resolvers = {
  Query: {
    hello: () => "Hello World",
    getAllTasks: async () => {
      const tasks = await Task.find();
      return tasks;
    },
    async getTask(_, args) {
      const task = await Task.findById(args.id);
      return task;
    },
  },
  Mutation: {
    createTask: async (_, { task }) => {
      const { title, description } = task;
      const newTasks = new Task({ title, description });
      await newTasks.save();
      return newTasks;
    },
    async deleteTask(_, { id }) {
      await Task.findByIdAndDelete(id);
      return "Tasks Deleted";
    },
    async updateTask(_, { id, task }) {
      const taskUpdated = await Task.findOneAndUpdate(
        id,
        {
          $set: task,
        },
        { new: true }
      );

      return taskUpdated;
    },
  },
};

module.exports = { resolvers };
