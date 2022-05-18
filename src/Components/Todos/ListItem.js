import React from "react";
import { ListGroupItem } from "reactstrap";

const ListItem = ({ todo, handleDelete, handleComplete, index }) => {
    return (
        <div>
            <ListGroupItem className="d-flex align-items-center">
                <div className="me-3">
                    <h4>{index + 1}. </h4>
                </div>
                <div>
                    <h4
                        className={
                            todo.isCompleted
                                ? "text-decoration-line-through"
                                : " "
                        }
                    >
                        {todo.text}
                    </h4>
                    <p className="m-0">{todo.description}</p>
                </div>

                <button
                    className={`btn ms-auto ${
                        todo.isCompleted ? "btn-danger" : "btn-success"
                    }`}
                    onClick={() => handleComplete(todo._id)}
                >
                    {todo.isCompleted ? "Completed" : "Complete"}
                </button>
                <button
                    onClick={() => handleDelete(todo._id)}
                    className="btn btn-danger ms-2"
                >
                    Delete
                </button>
            </ListGroupItem>
        </div>
    );
};

export default ListItem;
