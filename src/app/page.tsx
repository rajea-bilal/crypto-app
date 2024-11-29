"use client";

import StoreProvider from "@/app/StoreProvider";
import { useAppDispatch, useAppSelector } from "@/lib/Redux/hooks";
import { v4 as uuidv4 } from "uuid";

import {
  addTodo,
  toggleTodo,
  removeTodo,
} from "@/lib/Redux/features/todoSlice";

const List = () => {
  const todos = useAppSelector((state) => state.todos);
  const dispatch = useAppDispatch();

  return (
    <div>
      <h1 className="mt-[3rem]">Most important to me:</h1>
      <button
        onClick={() =>
          dispatch(addTodo({ name: "Rajea", id: uuidv4(), completed: false }))
        }
      >
        Add Items
      </button>

      <div className="flex flex-col gap-4 b mt-[2rem]">
        {todos.map((todo) => (
          <div key={todo.id} className=" flex gap-6 ">
            <p className="text-stone-300">{todo.name}</p>
            <button
              className="border border-stone-500 p-1 px-4 rounded-lg"
              onClick={() => dispatch(toggleTodo(todo.id))}
            >
              {todo.completed ? "done" : "pending"}
            </button>
            <button
              className="border border-stone-500 p-1 px-4 rounded-lg"
              onClick={() => dispatch(removeTodo(todo.id))}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <StoreProvider>
      <div className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-gray-900"></div>

        <div className="relative z-10 text-white">
          <h1 className="text-4xl font-bold text-stone-200">Crypto App</h1>
          <List />
        </div>
      </div>
    </StoreProvider>
  );
}
