import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './Home/HomePage';
import { NewTodoPage } from './new/NewTodoPage';
import { EditTodoPage } from './edit/EditTodoPage';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/new" element={<NewTodoPage />} />
                <Route path="/edit/:id" element={<EditTodoPage />} />
                <Route path="*" element={<>Not found</>} />
            </Routes>
        </BrowserRouter>
    );
}

export { App };
