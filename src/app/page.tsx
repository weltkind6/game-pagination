'use client'
import styles from './page.module.css'
import {useEffect, useState} from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import Games from "@/app/components/Games/Games";
import Pagination from "@/app/components/Pagination/Pagination";


interface Game {
  title: string
}
export default function Home() {
    const [data, setData] = useState<Game[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10);

    useEffect(() => {
        axios.get('https://nextjs-test-pi-hazel-56.vercel.app/data/games.json')
            .then(response => setData(response.data))
            .catch(err => console.log(err));
    }, [])

    const lastGameIndex = currentPage * itemsPerPage;
    const firstCountryIndex = lastGameIndex - itemsPerPage;
    const currentGame = data.slice(firstCountryIndex, lastGameIndex);
    const paginate = (pageNum: number) => {
        setCurrentPage(pageNum)
    };



    return (
    <main className={styles.main}>
       <Games
           gamesData={currentGame}
       />
        <Pagination
            totalPages={data.length}
            itemsPerPage={itemsPerPage}
            paginate={paginate}
        />
    </main>
  )
}
