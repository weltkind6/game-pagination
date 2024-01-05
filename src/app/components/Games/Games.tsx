import React from 'react';

interface Props {
    title: string
}
const Games = ({gamesData}: { gamesData: Props[] }) => {

    return (
        <div>
            {gamesData.map(({title}) =>
                <div key={title}>{title}</div>)
            }
        </div>
    );
};

export default Games;