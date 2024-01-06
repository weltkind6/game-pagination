'use client'
import styles from './page.module.css'
import {useEffect, useState} from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import GamesPage from "@/app/components/Games/GamesPage";
import PaginationPage from "@/app/components/Pagination/PaginationPage";

interface Game {
    isLoading: boolean
}
export default function Home() {
    const [data, setData] = useState<Game[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(25);
    const [isLoading, setIsLoading] = useState(false);
    console.log('currentPage', currentPage)

    useEffect(() => {
        const getGames = async () => {
            setIsLoading(true);
            try {
                const response = await axios.get('https://nextjs-test-pi-hazel-56.vercel.app/data/games.json');
                setData(response.data);
            } catch (err) {
                console.log(err);
            }
            setIsLoading(false);
        }
        getGames()
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
       <GamesPage
           currentGames={currentGamesData}
           isLoading={isLoading}
       />
        <PaginationPage
            totalPages={data.length}
            itemsPerPage={itemsPerPage}
            paginate={paginate}
            nextPage={nextPage}
            previousPage={previousPage}
            currentPage={currentPage}
        />
    </main>
  )
}
