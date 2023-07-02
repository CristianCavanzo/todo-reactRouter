import React, { useEffect, useState } from 'react';
import { TodoForm } from '../../UI/TodoForm';
import { useParams } from 'react-router-dom';
import { useTodos } from '../useTodos';
const EditTodoPage = () => {
    const [state, setState] = useState();
    const { id } = useParams();
    const {
        state: { getOneById },
        stateUpdaters: { editTodo },
    } = useTodos();

    useEffect(() => {
        if (id) {
            const todo = getOneById(id);
            setState(todo);
        }
    }, [getOneById]);
    return (
        // addTodo(newTodoValue)
        <TodoForm
            submitEvent={(newText) => editTodo(id, newText)}
            buttonText={'Editar'}
            title={'Edita tu TODO'}
            placeholder={state?.text}
            value={state?.text}
        />
    );
};

export { EditTodoPage };
