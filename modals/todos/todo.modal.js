import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      reqired: true,
    },
    complete: {
      type: true,
      default: false,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    subTodos: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SubTodo',
      },
    ], // Array of Sub-Todos
  },
  { timestamps: true }
);

export const Todo = mongoose.model('Todo', todoSchema);
