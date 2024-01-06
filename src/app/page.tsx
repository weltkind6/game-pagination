'use client'
import styles from './page.module.css'
import {useEffect, useState} from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import Games from "@/app/components/Games/Games";
import PaginationPage from "@/app/components/Pagination/PaginationPage";
import Image from 'next/image'


interface Game {
  title: string
}
export default function Home() {
    const [data, setData] = useState<Game[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(25);

    useEffect(() => {
        axios.get('https://nextjs-test-pi-hazel-56.vercel.app/data/games.json')
            .then(response => setData(response.data))
            .catch(err => console.log(err));
    }, [])

    const lastGameIndex = currentPage * itemsPerPage;
    const firstGameIndex = lastGameIndex - itemsPerPage;
    const currentGamesData = data.slice(firstGameIndex, lastGameIndex);
    const paginate = (pageNum: number) => {
        setCurrentPage(pageNum)
    };
    const nextPage = () => setCurrentPage(prev => prev + 1);
    const previousPage = () => setCurrentPage(prev => prev - 1);



    return (
    <main className={styles.main}>
       <Games
           currentGames={currentGamesData}
       />
        <PaginationPage
            totalPages={data.length}
            itemsPerPage={itemsPerPage}
            paginate={paginate}
            nextPage={nextPage}
            previousPage={previousPage}
        />

    </main>
  )
}
