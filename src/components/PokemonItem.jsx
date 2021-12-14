import React, { useEffect, useState } from 'react';

import { GrowingSpinner } from './Spinner';

import { PokeAPI_with_fetch } from '../api/pokemon';

const PokemonItem = ({ pokemon }) => {
    const [detail, setDetail] = useState(null);
    const [showSpinner, setShowSpinner] = useState(null);

    const { url } = pokemon;

    useEffect(() => {
        const fetchDetail = async () => {
            setShowSpinner(true);
            const payload = await PokeAPI_with_fetch.detail(url);
            setDetail(payload);
            setShowSpinner(false);
        };

        fetchDetail();
    }, [url]);

    const renderImage = () => {
        if (showSpinner === null) {
            return;
        } else if (showSpinner) {
            return <GrowingSpinner />;
        } else {
            return (
                <img
                    width={96}
                    height={96}
                    alt={pokemon.name}
                    src={detail?.sprites?.front_default}
                />
            );
        }
    };

    return (
        <li className="list-group-item g-0">
            <div className="row g-0 pl-4 align-items-center">
                <div
                    className="col-2 col-sm-3 col-lg-2 col-xl-1"
                    style={{ height: '96px' }}
                >
                    {renderImage()}
                </div>

                <div className="col-10 col-sm-9 col-lg-10 col-xl-11">
                    <h2>{pokemon.name}</h2>
                </div>
            </div>
        </li>
    );
};

export default React.memo(PokemonItem);