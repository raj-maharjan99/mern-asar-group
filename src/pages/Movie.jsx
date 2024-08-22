// import React from "react";

// const Movie = () => {
//   const movies = [
//     {
//       id: 1,
//       Title: "Avatar",
//       Year: "2009",
//       Actors: "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
//       Plot: "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
//       Awards: "Won 3 Oscars. Another 80 wins & 121 nominations.",
//       Poster:
//         "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
//       Metascore: "83",
//       imdbRating: "7.9",
//     },
//   ];
//   return (
//     <div className="  grid md:grid-cols-4 sm:grid-cols-1 justify-center gap-8 mt-10 mx-auto max-w-screen-lg ">
//       {movies.map((movie) => {
//         return (
//           <div
//             key={movie.id}
//             className="min-h-[250px] w-full mx-1  shadow-xl  flex flex-col justify-center"
//           >
//             <img
//               className="cursor-pointer w-full"
//               src={
//                 "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg"
//               }
//               alt={movie.Title}
//             />

//             <div className="flex flex-col justify-center items-center ">
//               <div className="flex justify-around gap-20 p-2">
//                 <span>{movie.Title}</span>{" "}
//                 <span className="text-yellow-800">{movie.Metascore}</span>
//               </div>
//               <div className="flex flex-col items-center">
//                 <span className="underline text-blue-900 font-serif">
//                   Actors
//                 </span>
//                 <p className="text-[12px]">{movie.Actors}</p>
//               </div>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default Movie;

// import React, { useState } from "react";

// const todosData = [
//   {
//     id: 1,
//     title: "delectus aut autem",
//     completed: false,
//   },
//   {
//     id: 2,
//     title: "quis ut nam facilis et officia qui",
//     completed: false,
//   },
//   {
//     id: 3,
//     title: "fugiat veniam minus",
//     completed: false,
//   },
//   {
//     id: 4,
//     title: "et porro tempora",
//     completed: true,
//   },
// ];

// function TodoItem({ todo, toggleComplete }) {
//   return (
//     <div
//       className={`flex items-center justify-between p-4 mb-2 border rounded-lg cursor-pointer ${
//         todo.completed ? "line-through text-red-500" : "text-black"
//       }`}
//       onClick={() => toggleComplete(todo.id)}
//     >
//       <input
//         type="checkbox"
//         checked={todo.completed}
//         onChange={() => toggleComplete(todo.id)}
//         className="mr-2"
//       />
//       <span>{todo.title}</span>
//     </div>
//   );
// }

// function Movie() {
//   const [todos, setTodos] = useState(todosData);

//   const toggleComplete = (id) => {
//     const updatedTodos = todos.map((todo) => {
//       if (todo.id === id) {
//         return { ...todo, completed: !todo.completed };
//       }
//       return todo;
//     });
//     setTodos(updatedTodos);
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//       <h1 className="text-4xl font-bold mb-8">Todo List</h1>
//       <div className="w-full max-w-md">
//         {todos.map((todo) => (
//           <TodoItem key={todo.id} todo={todo} toggleComplete={toggleComplete} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Movie;

import { faker } from "@faker-js/faker";
import { Button } from "@material-tailwind/react";
import React, { useState } from "react";

const Movie = () => {
  const [data, setData] = useState([]);
  console.log(data);
  const addSome = () => {
    const obj = {
      userid: faker.string.uuid(),
      username: faker.internet.userName(),
      email: faker.internet.email(),
      avatar: faker.image.avatar(),
    };
    setData((prev) => [...prev, obj]);
  };

  const deleteTodo = (id) => {
    const newTodos = data.filter((newTodo) => newTodo.userid !== id);
    setData(newTodos);
  };
  return <div className="min-h-[50vh] bg-blue-gray-600 p-2"></div>;
};

export default Movie;
