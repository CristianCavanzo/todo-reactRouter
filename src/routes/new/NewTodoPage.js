import React from 'react';
import { TodoForm } from '../../UI/TodoForm';
import { useTodos } from '../useTodos';

const NewTodoPage = () => {
    const {
        stateUpdaters: { addTodo },
    } = useTodos();
    return (
        // addTodo(newTodoValue)
        <TodoForm
            submitEvent={(text) => addTodo(text)}
            buttonText={'Nuevo todo'}
            title={'Escribe tu nuevo TODO'}
        />
    );
};

export { NewTodoPage };
