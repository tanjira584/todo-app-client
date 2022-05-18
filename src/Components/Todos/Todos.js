import { Modal, ModalHeader, ModalBody } from "reactstrap";
import React, { useEffect, useState } from "react";
import Controllers from "./Controllers";
import ListView from "./ListView";
import TodoForm from "./TodoForm";
import Header from "./Header";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { toast } from "react-toastify";

const Todos = () => {
    const [user] = useAuthState(auth);
    const [todos, setTodos] = useState([]);
    const [modal, setModal] = useState(false);
    const [call, setCall] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const token = localStorage.getItem("accessToken");

    useEffect(() => {
        fetch(`http://localhost:5000/todos?email=${user.email}`, {
            method: "GET",
            headers: {
                authorization: `Bearer ${token}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setTodos(data);
            });
    }, [user, call, token]);
    const handleModal = () => {
        setModal(!modal);
    };
    const createTodo = (todo) => {
        const settodo = { ...todo, email: user.email };
        fetch("http://localhost:5000/todos", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(settodo),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.acknowledged) {
                    setCall(!call);
                    setModal(!modal);
                    toast("Task Added Successfully");
                }
            });
    };
    const handleDelete = (id) => {
        fetch(`http://localhost:5000/todo/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.acknowledged) {
                    setCall(!call);
                    toast("Task Deleted Successfully");
                }
            });
    };

    const performSearch = () => {
        return todos.filter((todo) =>
            todo.text.toLowerCase().includes(searchTerm.toLocaleLowerCase())
        );
    };
    const handleComplete = (id) => {
        fetch(`http://localhost:5000/todo/${id}`, {
            method: "PATCH",
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.acknowledged) {
                    setCall(!call);
                    toast("Task Complete Successfully");
                }
            });
    };
    const getView = () => {
        const searchTodos = performSearch();
        return (
            <ListView
                todos={searchTodos}
                handleDelete={handleDelete}
                handleComplete={handleComplete}
            ></ListView>
        );
    };

    return (
        <div>
            <Header></Header>
            <div className="container-md">
                <h2 className="display-4 text-center mb-5 mt-4">Todos App</h2>
                <Controllers
                    setSearchTerm={setSearchTerm}
                    handleModal={handleModal}
                ></Controllers>
                {getView()}

                <Modal isOpen={modal} toggle={handleModal}>
                    <ModalHeader toggle={handleModal}>
                        Create New Todo Item
                    </ModalHeader>
                    <ModalBody>
                        <TodoForm createTodo={createTodo}></TodoForm>
                    </ModalBody>
                </Modal>
            </div>
        </div>
    );
};

export default Todos;
