import axios from "axios"

export const fetchMovie = async (search, page, onSuccess, onError) => {
    await axios.get(`http://www.omdbapi.com/?apikey=faf7e5bb&s=${search}&page=${page}`).then(
        (res) => {
            if (!res.data.Error) {
                onSuccess(res.data)
            } else {
                onError(res.data.Error)
            }
        }).catch(err => {
            onError(err.message)
        })
}

export const fetchDetailMovie = async (id, onSuccess, onError) => {
    await axios.get(`http://www.omdbapi.com/?apikey=faf7e5bb&i=${id}`).then(
        (res) => {
            if (!res.data.Error) {
                onSuccess(res.data)
            } else {
                onError(res.data.Error)
            }
        }).catch(err => {
            onError(err.message)
        })
}