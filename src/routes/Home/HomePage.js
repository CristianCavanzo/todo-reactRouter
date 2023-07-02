import React from 'react';
import { useTodos } from '../useTodos';
import { TodoHeader } from '../../UI/TodoHeader';
import { TodoCounter } from '../../UI/TodoCounter';
import { TodoSearch } from '../../UI/TodoSearch';
import { TodoList } from '../../UI/TodoList';
import { TodoItem } from '../../UI/TodoItem';
import { TodosError } from '../../UI/TodosError';
import { TodosLoading } from '../../UI/TodosLoading';
import { EmptyTodos } from '../../UI/EmptyTodos';
import { CreateTodoButton } from '../../UI/CreateTodoButton';
import { ChangeAlert } from '../../UI/ChangeAlert';
import { useNavigate } from 'react-router-dom';

function HomePage() {
    const { state, stateUpdaters } = useTodos();
    const navigation = useNavigate();
    const {
        error,
        loading,
        searchedTodos,
        totalTodos,
        completedTodos,
        searchValue,
    } = state;

    const { completeTodo, deleteTodo, setSearchValue, sincronizeTodos } =
        stateUpdaters;

    return (
        <React.Fragment>
            <TodoHeader loading={loading}>
                <TodoCounter
                    totalTodos={totalTodos}
                    completedTodos={completedTodos}
                />
                <TodoSearch
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                />
            </TodoHeader>

            <TodoList
                error={error}
                loading={loading}
                totalTodos={totalTodos}
                searchedTodos={searchedTodos}
                searchText={searchValue}
                onError={() => <TodosError />}
                onLoading={() => <TodosLoading />}
                onEmptyTodos={() => <EmptyTodos />}
                onEmptySearchResults={(searchText) => (
                    <p>No hay resultados para {searchText}</p>
                )}
            >
                {(todo) => (
                    <TodoItem
                        key={todo.id}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => completeTodo(todo.id)}
                        onDelete={() => deleteTodo(todo.id)}
                        onEdit={() => {
                            navigation(`/edit/${todo.id}`);
                        }}
                    />
                )}
            </TodoList>

            <CreateTodoButton />

            <ChangeAlert sincronize={sincronizeTodos} />
        </React.Fragment>
    );
}

export { HomePage };
