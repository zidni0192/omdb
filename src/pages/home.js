import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { getMovie } from '../reducers/movie';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovie } from '../actions/movie';
import { DETAIL_MOVIE_PAGE, HOME_PAGE } from '../constants/routes';
import Image from '../components/image';
import { useRef } from 'react';
import { useState } from 'react';
let timeout = null
export default function Home() {
    const { data, total } = useSelector((state) => state.movie)
    const dispatch = useDispatch()
    const ref = useRef()
    const [search, setSearch] = useState('Batman')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState()
    let page = 1
    const getMovieList = async () => {
        if (data[search]?.length >= total[search] || loading || error) return
        setLoading(true)
        fetchMovie(
            search,
            page,
            (data) => { dispatch(getMovie({ key: search, data: data.Search, total: Number(data.totalResults) })); },
            (err) => setError(err)
        )
        page++;
        setLoading(false)
    }

    const handleInfinteScroll = async () => {
        if (window.scrollY + 1000 > document.body.clientHeight && !loading) {
            clearTimeout(timeout)
            timeout = setTimeout(() => {
                getMovieList()
            }, 300)
        }
    }

    const handleSearchChange = async () => {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            getMovieList()
        }, 1000)
    }

    useEffect(() => {
        getMovieList()
        window && window.addEventListener('scroll', handleInfinteScroll)
    }, [])

    useEffect(() => {
        handleSearchChange()
    }, [search])

    return (
        <div >
            <div style={{ display: 'flex', padding: '20px 10%', borderBottom: '1px solid #ddd', position: 'fixed', top: 0, width: '100%', backgroundColor: '#FFF' }}>
                <div style={{ fontSize: '20pt', marginRight: '40px', display: 'flex', alignItems: 'center' }}>
                    <Link to={HOME_PAGE} style={{ textDecoration: 'none', color: '#000' }}>
                        OMDB
                    </Link>
                </div>
                <div style={{ width: '70%' }}>
                    <input style={{ width: '100%', padding: 10 }} placeholder="Batman " onChange={(evt) => { setSearch(evt.target.value) }} />
                </div>
            </div>
            <div style={{ padding: '20px 10%', display: 'flex', flexDirection: "column", marginTop: 60 }} ref={ref}>
                <h1>Movie List</h1>
                {data[search]?.map((item, key) => (
                    <div key={key} style={{ display: 'flex', borderBottom: '1px solid #ddd', margin: '10px 0', paddingBottom: 20 }}>
                        <Image src={item.Poster} />
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <Link to={DETAIL_MOVIE_PAGE(item.imdbID)} style={{ color: '#000', textDecoration: 'none' }}>
                                <h2 style={{ fontSize: '20pt', margin: '10px 20px 0' }}>{item.Title}</h2>
                            </Link>
                            <h3 style={{ fontSize: '12pt', margin: '10px 20px 0', fontWeight: '500' }}>Type : {item.Type}</h3>
                            <h3 style={{ fontSize: '12pt', margin: '10px 20px 0', fontWeight: '500' }}>Year : {item.Year}</h3>
                        </div>
                    </div>
                ))}
            </div>
            {error && <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}>
                {error}
            </div>
            }
        </div>
    )
}
