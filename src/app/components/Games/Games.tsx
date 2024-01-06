import React from 'react';

interface Props {
    title: string;
    provider?: string;
}

const Games = ({currentGames}: { currentGames: Props[] }) => {
    console.log('gamesData', currentGames)

    return (
        <div>
            {currentGames.map(({title, provider}) =>
                <div key={title}>
                    <div style={{marginBottom: '1em'}}>
                        <div>Game title: <strong>{title}</strong></div>
                        <div>Game provider: <strong>{provider}</strong></div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Games;
