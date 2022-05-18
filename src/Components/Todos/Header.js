import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignout = () => {
        signOut(auth);
        localStorage.removeItem("accessToken");
    };
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-primary navbar-dark">
                <div className="container-md">
                    <a className="navbar-brand" href=" ">
                        Todo App
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link to="/" className="nav-link active">
                                    HOME
                                </Link>
                            </li>
                            {user && (
                                <li className="nav-item">
                                    <Link to="/my-todo" className="nav-link ">
                                        MY TODOS
                                    </Link>
                                </li>
                            )}
                            {user ? (
                                <li className="nav-item">
                                    <button
                                        onClick={handleSignout}
                                        className="nav-item btn text-white-50"
                                    >
                                        SIGNOUT
                                    </button>
                                </li>
                            ) : (
                                <li className="nav-item">
                                    <Link to="/login" className="nav-link ">
                                        LOGIN
                                    </Link>
                                </li>
                            )}
                            <li className="nav-item">
                                <Link to="/signup" className="nav-link ">
                                    REGISTER
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
