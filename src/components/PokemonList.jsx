import React from 'react';

import PokemonItem from './PokemonItem';

const PokemonList = ({ items = [] }) => {
    if (!Boolean(items) || items.length === 0) {
        return <p>No hay Pokemon.</p>;
    }

    const renderItems = () =>
        items.map((pokemon) => (
            <PokemonItem key={pokemon.name} pokemon={pokemon} />
        ));

    return <ul className="list-group">{renderItems()}</ul>;
};

export default PokemonList;