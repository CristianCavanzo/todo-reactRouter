import React, { useEffect } from 'react';
import './TodoForm.css';
import { useNavigate } from 'react-router-dom';

function TodoForm({
    submitEvent,
    buttonText,
    title,
    placeholder = 'Cortar la cebolla oara el almuerzo',
    value,
}) {
    const [newTodoValue, setNewTodoValue] = React.useState('');
    useEffect(() => {
        if (value) {
            setNewTodoValue(value);
        }
    }, [value]);

    const navigation = useNavigate();

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    };
    const onCancel = () => {
        navigation('/');
    };
    const onSubmit = (event) => {
        event.preventDefault();
        submitEvent(newTodoValue);
        navigation('/');
    };

    return (
        <form onSubmit={onSubmit}>
            <label>{title}</label>
            <textarea
                value={newTodoValue}
                onChange={onChange}
                placeholder={placeholder}
            />
            <div className="TodoForm-buttonContainer">
                <button
                    type="button"
                    className="TodoForm-button TodoForm-button--cancel"
                    onClick={onCancel}
                >
                    Cancelar
                </button>
                <button
                    type="submit"
                    className="TodoForm-button TodoForm-button--add"
                >
                    {buttonText}
                </button>
            </div>
        </form>
    );
}

export { TodoForm };
