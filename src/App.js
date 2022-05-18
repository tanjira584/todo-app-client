import "./App.css";

import { Routes, Route } from "react-router-dom";
import Login from "./Components/Todos/Login";
import Signup from "./Components/Todos/Signup";
import MyTodo from "./Components/Todos/MyTodo";
import RequireAuth from "./Components/Todos/RequireAuth";
import Home from "./Components/Todos/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
    return (
        <div className="">
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/login" element={<Login></Login>}></Route>
                <Route path="/signup" element={<Signup></Signup>}></Route>
                <Route
                    path="/my-todo"
                    element={
                        <RequireAuth>
                            <MyTodo></MyTodo>
                        </RequireAuth>
                    }
                ></Route>
            </Routes>
            <ToastContainer />
        </div>
    );
}

export default App;
