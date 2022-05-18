import React, { useState } from "react";

const TodoForm = ({ createTodo }) => {
    const [todo, setTodo] = useState({ text: "", description: "" });
    const handleChange = (e) => {
        setTodo({ ...todo, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        createTodo(todo);
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="task">Enter Task</label>
                    <input
                        type="text"
                        className="form-control"
                        onChange={handleChange}
                        name="text"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="description">Enter Description</label>
                    <textarea
                        name="description"
                        id="description"
                        className="form-control"
                        onChange={handleChange}
                        cols="30"
                        rows="4"
                    ></textarea>
                </div>
                <input
                    className="form-control btn btn-primary"
                    type="submit"
                    value="Create Task"
                />
            </form>
        </div>
    );
};

export default TodoForm;
