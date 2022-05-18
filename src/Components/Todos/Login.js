import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "./Header";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { toast } from "react-toastify";

const Login = () => {
    const [user, setUser] = useState({ email: " ", password: " " });
    const [signInWithEmailAndPassword, euser, eloading] =
        useSignInWithEmailAndPassword(auth);

    const navigate = useNavigate();

    if (eloading) {
        return <p className="text-center">Loading...</p>;
    }
    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(user.email, user.password);

        fetch("http://localhost:5000/login", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({ email: user.email }),
        })
            .then((res) => res.json())
            .then((data) => {
                localStorage.setItem("accessToken", data.accessToken);
                setUser({ email: " ", password: " " });
                e.target.reset();
                toast("User Logged in Successfully");
            });
    };
    if (euser) {
        navigate("/my-todo");
    }
    /*---------------Get JWT Token------------*/

    return (
        <div>
            <Header></Header>
            <div className="login-form w-25 mx-auto my-5 p-5 border">
                <h4 className="text-center mb-3">Login </h4>
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        name="email"
                        className="form-control mb-3"
                        placeholder="Enter email"
                        onChange={handleChange}
                    />
                    <input
                        type="password"
                        name="password"
                        className="form-control mb-3"
                        placeholder="Enter password"
                        onChange={handleChange}
                    />
                    <input
                        className="form-control btn btn-primary mb-2"
                        type="submit"
                        value="Login"
                    />
                </form>
                <p className="m-0">
                    Didn't have an account?{" "}
                    <Link to="/signup">Sign Up Here</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
