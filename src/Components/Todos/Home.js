import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <div className="">
                <div
                    className="banner position-absolute w-50 start-50 top-50"
                    style={{ transform: "translate(-50%,-50%)" }}
                >
                    <h2 className="text-center display-2 mb-4">
                        Todo Application Make Your Work More Organize
                    </h2>
                    <span className="d-block text-mute text-center mb-2">
                        For testing: abc@gmail.com, pass: 12345678
                    </span>
                    <div className="text-center">
                        <button className="btn btn-lg btn-primary me-3">
                            Documentation
                        </button>{" "}
                        <Link className="btn btn-lg btn-primary" to="/signup">
                            Register Now
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
