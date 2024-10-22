import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const TodoDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [todo, setTodo] = useState({});
  useEffect(() => {
    fetch(`${import.meta.env.VITE_BASEURL}/todos/${id}`)
      .then((response) => response.json())
      .then((data) => setTodo(data));
  }, [id]);
  return (
    <div>
      <h3>this is todos details for {id}</h3>

      <div>
        <h4>Todo Details</h4>
        <div>
          <p>
            <b>Title:</b>
            {todo.title}
          </p>
          <p>{todo.completed ? 'Completed' : 'Not Completed'}</p>
        </div>
      </div>
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
};

export default TodoDetails;
