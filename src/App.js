import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Topics from './components/Topics/Topics';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
          path: '/',
          element: <Header></Header>
        }
      ]
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
