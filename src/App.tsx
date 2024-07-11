import "./App.css";
import Login from "../src/pages/login/Login";
import SignUp from "../src/pages/signup/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoutes from "./api/PrivateRoute";
import ExplorePage from "./pages/explore/ExplorePage";
import UserProfile from "./pages/profile/UserProfile";
import ChartPage from "./pages/chatpage";


function App() {
  const allRoutes = [
    { path: "/userProfile", element: <UserProfile /> },
    { path: "/exp", element: <ExplorePage /> },
    { path: "/chats", element: <ChartPage /> },
  ];

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route element={<PrivateRoutes />}>
            {allRoutes?.map((elem) => (
              <Route path={elem?.path} element={elem?.element} />
            ))}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
