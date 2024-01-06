import React from 'react';
import Image from "next/image";

interface Props {
    title: string;
    provider?: string;
    identifier?: string;
}

const Games = ({currentGames}: { currentGames: Props[] }) => {
    console.log('gamesData', currentGames)

    return (
        <div>
            {currentGames.map(({title, provider, identifier}) =>
                <div key={title}>
                    <div style={{marginBottom: '1em'}}>
                        <div>Game title: <strong>{title}</strong></div>
                        <div>Game provider: <strong>{provider}</strong></div>
                    </div>
                    <Image
                        src={`https://d2norla3tyc4cn.cloudfront.net/i/s3/${identifier}.webp`}
                        width={500}
                        height={300}
                        alt="Обложка"
                    />
                </div>)
            }
        </div>
    );
};

export default Games;
