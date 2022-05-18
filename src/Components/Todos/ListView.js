import React from "react";
import ListItem from "./ListItem";

const ListView = ({ todos, handleDelete, handleComplete }) => {
    if (todos.length === 0) {
        return <h4 className="text-center">Please Add Your Todo List </h4>;
    }
    return (
        <div>
            {todos.map((todo, index) => (
                <ListItem
                    handleDelete={handleDelete}
                    key={todo._id}
                    todo={todo}
                    index={index}
                    handleComplete={handleComplete}
                ></ListItem>
            ))}
        </div>
    );
};

export default ListView;
