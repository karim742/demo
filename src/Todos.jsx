import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Todos = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_BASEURL}/todos`)
      .then((response) => response.json())
      .then((data) => setTodos(data));
  }, []);
  return (
    <div>
      <h1>Todos</h1>
      <div>
        <ul>
          {todos?.slice(1, 20)?.map((todo) => (
            <li key={todo.id}>
              <Link to={`/todos/${todo.id}`}>{todo.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todos;
