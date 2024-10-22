import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import TodoDetails from './TodoDetails';
import Todos from './Todos';

const Routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/todos',
    element: <Todos />,
  },
  {
    path: '/todos/:id',
    element: <TodoDetails />,
  },
]);

export default Routes;
