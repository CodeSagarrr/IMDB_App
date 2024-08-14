import React, { useEffect, useState } from 'react'
import Moviecard from './Moviecard';
import axios from 'axios'
import Pagination from './Pagination';

function Movielist() {
  
    const [movies, setMovies] = useState([]);
    const [PageNo, setPageNo]=useState(1)

    const Next =()=>{
        setPageNo(PageNo+1)
    }

    const Before=()=>{
        if(PageNo===1){
            setPageNo(PageNo)
        }
        else{
            setPageNo(PageNo-1)
        }
    }

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=55def731f1b2eb94c11ac7871a489904&language=en-US&page=${PageNo}`).then(function (res) {
            setMovies(res.data.results)
            console.log(res.data.results)
        })
    }, [PageNo])

 
    return (
        <>
            <div className='text-3xl font-[600] w-full text-center  text-sky-400 mt-[20px] mb-[30px]'>- Trending -</div>

            <div className='flex flex-row flex-wrap justify-around'>

                {movies.map((movieObj) => {
                    return <Moviecard poster_path={movieObj.poster_path} name={movieObj.original_title}/>
                })}

            </div>

            <div>
                <Pagination PageNo={PageNo} Next={Next} Before={Before} />
            </div>
        </>


    );
}

// https://api.themoviedb.org/3/movie/popular?api_key=55def731f1b2eb94c11ac7871a489904&language=en-US&page=1

export default Movielist
