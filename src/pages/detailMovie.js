import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchDetailMovie } from '../actions/movie'
import { HOME_PAGE } from '../constants/routes'
import { getDetail } from '../reducers/movie'

export default function DetailMovie(props) {
    const { detail } = useSelector((state) => state.movie)
    const dispatch = useDispatch()
    const [error, setError] = useState()

    const getDetailMovie = () => {
        fetchDetailMovie(
            props.match.params.id,
            (data) => { dispatch(getDetail({ key: props.match.params.id, data })) },
            (err) => setError(err)
        )
    }

    useEffect(() => {
        getDetailMovie()
    }, [props.match.params.id])
    const data = detail[props.match.params.id]

    return (
        <div>
            <div style={{ display: 'flex', padding: '20px 10%', borderBottom: '1px solid #ddd', position: 'fixed', top: 0, width: '100%', backgroundColor: '#FFF' }}>
                <div style={{ fontSize: '20pt', marginRight: '40px', display: 'flex', alignItems: 'center' }}>
                    <Link to={HOME_PAGE} style={{ textDecoration: 'none', color: '#000' }}>
                        OMDB
                    </Link>
                </div>
                <div style={{ width: '70%' }}>
                    <input style={{ width: '100%', padding: 10 }} placeholder="Batman " onClick={() => props.history.push(HOME_PAGE)} />
                </div>
            </div>
            <div style={{ padding: '20px 10%', display: 'flex', flexDirection: "column", marginTop: 60 }}>
                {data && (<>
                    <img src={data.Poster} width="200" alt={data.Title} />
                    <h1>{data?.Title}</h1>
                    <div>Actors : {data?.Actors}</div>
                    <div>Awards : {data?.Awards}</div>
                    <div>Box Office : {data?.BoxOffice}</div>
                    <div>Country : {data?.Country}</div>
                    <div>DVD : {data?.DVD}</div>
                    <div>Director : {data?.Director}</div>
                    <div>Genre : {data?.Genre}</div>
                    <div>Language : {data?.Language}</div>
                    <div>Metascore : {data?.Metascore}</div>
                    <div>Plot : {data?.Plot}</div>
                    <div>Production : {data?.Production}</div>
                    <div>Rated : {data?.Rated}</div>
                    <div>Released : {data?.Released}</div>
                    <div>Runtime : {data?.Runtime}</div>
                    <div>Type : {data?.Type}</div>
                    <div>Website : {data?.Website}</div>
                    <div>Writer : {data?.Writer}</div>
                    <div>Year : {data?.Year}</div>
                    <div>Id : {data?.imdbID}</div>
                </>)}
            </div>
            {error && <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}>
                {error}
            </div>}
        </div >
    )
}
