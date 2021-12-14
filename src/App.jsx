import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootView from "./views/root";
import TaskView from "./views/task";
import Pokemons from "./views/pokemons";
import ListBooksView from "./views/listBooks";

const App = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<RootView />}>
                    <Route path="task" element={<TaskView />} />
                </Route>
                <Route path="pokemons" element={<Pokemons />} />
                <Route path="list-books" element={<ListBooksView />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App