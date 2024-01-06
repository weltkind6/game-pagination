import React, {useState} from 'react';
import Image from "next/image";
import styles from './styles.module.css';
import {Card, CardBody, CardHeader} from "reactstrap";
import Link from "next/link";

interface Game {
    title?: string;
    isLoading: boolean
    provider?: string;
    identifier?: string;
    categories?: string[];
    seo_title?: string;
}

interface Category {
    livecasino: string;
    card: string;
    live: string;
    all: string;
    _hd: string;
}
interface Props {
    currentGames: Game[];
    isLoading: boolean;
}

const GamesPage = ({currentGames, isLoading}: Props) => {
    const [gameUrl, setGameUrl] = useState('')

    if(isLoading) {
        return <h2>Loading...</h2>
    }
    return (
        <div className={styles.wrapper}>
            {currentGames.map(({
                                   title,
                                   provider,
                                   identifier,
                                   categories,
                                   seo_title,
            }) =>
                    <Link href={gameUrl}>
                        <Card
                            key={title}
                            className={styles.card}
                            onClick={() => {
                                setGameUrl(`/${provider}/${seo_title}`);
                            }}
                        >
                            <CardHeader>
                                <div>Game: <strong>{title}</strong></div>
                                <div>Provider: <strong>{provider}</strong></div>
                                <div>
                                    {/*{categories}*/}
                                </div>
                            </CardHeader>
                            <CardBody>
                                <Image
                                    src={`https://d2norla3tyc4cn.cloudfront.net/i/s3/${identifier}.webp`}
                                    width={300}
                                    height={300}
                                    alt="Обложка"
                                    className={styles.img}
                                />
                            </CardBody>
                        </Card>
                    </Link>
                )
            }
        </div>
    );
};

export default GamesPage;
