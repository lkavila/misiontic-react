import React, { useState, useEffect } from 'react';
import { PokeAPI_with_fetch } from '../api/pokemon';
import PokemonList from '../components/PokemonList';

const Pokemons = () => {
    const [page, setPage] = useState(1);
    const [currentPage, setCurrentPage] = useState(1)
    const [elements, setElements] = useState(null)

    useEffect(() => {
        const fetch = async () => {
            const payload = await PokeAPI_with_fetch.list({
                offset: (page - 1) * elements,
                limit: elements,
            });
            setCurrentPage(payload);
        };

        fetch();
    }, [page, elements]);

    return (

        <PokemonList items={currentPage?.results} setPage={setPage} setElements={setElements} />


    );
}

export default Pokemons;