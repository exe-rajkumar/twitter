import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./index.css";
import Login from "./components/Auth/Login/Login";
import Register from "./components/Auth/Register/Register";
import Home from "./components/Home/Home";
import Dashboard from "./components/Dashboard/Dashboard";
import Explore from "./components/Explore/Explore";
import Notification from "./components/Notification/Notification";
import Message from "./components/Message/Message";
import Profile from "./components/Profile/Profile";
import ProfilePicture from "./components/ProfilePicture/ProfilePicture";

function App() {
  return (
    <>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="/dashboard/home" element={<Home />} />
          <Route path="/dashboard/explore" element={<Explore />} />
          <Route path="/dashboard/notification" element={<Notification />} />
          <Route path="/dashboard/message" element={<Message />} />
          <Route path="/dashboard/profile" element={<Profile />} />
          <Route path="/dashboard/img-upload" element={<ProfilePicture />} />
        </Route>
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/" element={<Navigate replace to="/auth/login" />} />
      </Routes>
    </>
  );
}

export default App;
