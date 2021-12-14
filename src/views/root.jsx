import React from "react";
import { Outlet, Link } from "react-router-dom";

const RootView = () => {
    return (
        <div>

            <h1>Hola mundo, soy la pagina de inicio</h1>
            <br />
            <nav>

                <ul>
                    <li key="/">
                        <Link to="/" >Ir a Inicio</Link>
                    </li>
                    <li key="task">
                        <Link to="/task" >Ir a Task 1</Link>
                    </li>
                    <li key="pokemons">
                        <Link to="/pokemons" >Ver pokemons</Link>
                    </li>
                    <li key="list-books">
                        <Link to="list-books" >Ver lista de usuarios</Link>
                    </li>
                </ul>

            </nav>
            <Outlet />
        </div>
    );
}

export default RootView;