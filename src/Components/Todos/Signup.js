import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

import { toast } from "react-toastify";

const Signup = () => {
    const [user, setUser] = useState({ name: "", email: "", password: "" });
    const [createUserWithEmailAndPassword] =
        useCreateUserWithEmailAndPassword(auth);
    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(user.email, user.password);

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
                toast("User Created Successfully");
            });
    };
    return (
        <div>
            <Header></Header>
            <div className="signup-form w-25 mx-auto my-5 p-5 border">
                <h4 className="text-center mb-3">Signup </h4>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        className="form-control mb-3"
                        placeholder="Enter name"
                        onChange={handleChange}
                    />
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
                        value="Sign up"
                    />
                </form>
                <p className="m-0">
                    Already have an account? <Link to="/login">Login Here</Link>
                </p>
            </div>
        </div>
    );
};

export default Signup;
