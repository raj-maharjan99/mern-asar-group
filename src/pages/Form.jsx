import { faker } from "@faker-js/faker";
import { Button, Input } from "@material-tailwind/react";
import React, { useEffect } from "react";
import { useState } from "react";

const Form = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [updateId, setUpdateId] = useState(null);
  const [error, setError] = useState({});
  const [visible, setVisible] = useState(true);

  // add todos

  const addTodos = () => {
    if (input.trim() !== "" && input.length < 10) {
      if (updateId) {
        const updateTodo = todos.map((prev) =>
          prev.id === updateId ? { ...prev, name: input } : prev
        );
        setTodos(updateTodo);
        setInput("");
        setUpdateId(null);
        setVisible(false);
      } else {
        setTodos((prev) => [...prev, { id: faker.string.uuid(), name: input }]);
        setInput("");
        setVisible(false);
      }
    }

    //error todo

    if (input.trim() !== "" && input.length >= 10) {
      setError({
        message: "Error ! characters should be less than 10 , thank you",
      });
      setVisible(true);
    }
  };

  // delete method

  const deleteTodo = (id) => {
    const newTodo = todos.filter((todo) => todo.id !== id);
    setTodos(newTodo);
  };

  // update todos

  const updateTodo = (todo) => {
    setInput(todo.name);
    setUpdateId(todo.id);
  };

  return (
    <div className="mx-auto mt-6 max-w-full min-h-[50vh]">
      <div className="flex gap-2 justify-center items-center sm:p-10 mobile:p-2 mobile:flex-col">
        <div className="w-full relative ">
          {" "}
          <Input
            className="max-w-full absolute "
            value={input}
            onChange={(e) => setInput(e.target.value)}
            label="Todo App"
            placeholder="todo here"
          />
        </div>
        <div>
          {" "}
          <Button
            color={`${updateId ? "orange" : "black"}`}
            onClick={addTodos}
          >{`${updateId ? "Upadte" : "Add"}`}</Button>
        </div>
      </div>
      <div className="flex flex-col justify-center space-y-2  items-center w-full">
        {todos.map((todo) => (
          <div
            key={todo.id}
            className="grid grid-cols-2 gap-20 mobile:gap-10 mt-5 mobile:ml-6 justify-center items-center place-content-center text-center    "
          >
            <div className="">
              <p className="bg-brown-500 w-40 text-white px-10">{todo.name}</p>{" "}
            </div>
            <div className="flex gap-2 w-[30%] ">
              <Button
                onClick={() => deleteTodo(todo.id)}
                className="w-3 h-1 flex justify-center items-center"
                color="red"
              >
                X
              </Button>
              <Button
                onClick={() => updateTodo(todo)}
                className="w-[60px] h-1 flex justify-center items-center"
                color="blue"
              >
                Update
              </Button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex mx-auto justify-center mt-5">
        {error && visible && (
          <div className="text-red-700"> {error.message} </div>
        )}
      </div>
    </div>
  );
};

export default Form;
