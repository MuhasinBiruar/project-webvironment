import { createBrowserRouter } from "react-router";
import { Link } from "react-router";
import { RouterProvider } from "react-router/dom";
import BeerApp from './pages/biruar/App.tsx';

function Home() {
  return (
    <div>
      <h1>HomePage</h1>
      <Link to="/biruar">Go to Biruar page</Link>
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/biruar",
    Component: BeerApp,
  }
]);

const App = () => {
  return <RouterProvider router={router} />;
}

export default App