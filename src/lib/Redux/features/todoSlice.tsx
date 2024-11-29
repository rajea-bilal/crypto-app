import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// shape of a single todo object
interface TodoItemState {
  name: string;
  id: string;
  completed: boolean;
}

// type of the todo state array
type TodoState = TodoItemState[];

// Define the initial state using that type
const initialState: TodoState = [
  {
    name: "Gratitude",
    id: "1",
    completed: false,
  },
  {
    name: "Generosity",
    id: "2",
    completed: false,
  },
  {
    name: "Kindness",
    id: "3",
    completed: false,
  },
];

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TodoItemState>) => {
      state.push(action.payload);
    },
    toggleTodo: (state, action: PayloadAction<string>) => {
      const todo = state.find((todoObj) => todoObj.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { toggleTodo, addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
