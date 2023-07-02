import React from 'react';
import './CreateTodoButton.css';
import { useNavigate } from 'react-router-dom';

function CreateTodoButton(props) {
    const navigate = useNavigate();
    const createNewTodo = () => {
        navigate('/new');
    };

    return (
        <button className="CreateTodoButton" onClick={createNewTodo}>
            +
        </button>
    );
}

export { CreateTodoButton };
