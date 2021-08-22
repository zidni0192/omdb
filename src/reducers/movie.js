import { createSlice } from '@reduxjs/toolkit'

export const movieSlice = createSlice({
    name: 'movie',
    initialState: {
        data: {},
        total: {},
        detail: {
            // tt0372784: { "Title": "Batman Begins", "Year": "2005", "Rated": "PG-13", "Released": "15 Jun 2005", "Runtime": "140 min", "Genre": "Action, Adventure", "Director": "Christopher Nolan", "Writer": "Bob Kane, David S. Goyer, Christopher Nolan", "Actors": "Christian Bale, Michael Caine, Ken Watanabe", "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from corruption.", "Language": "English, Mandarin", "Country": "United Kingdom, United States", "Awards": "Nominated for 1 Oscar. 13 wins & 79 nominations total", "Poster": "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg", "Ratings": [{ "Source": "Internet Movie Database", "Value": "8.2/10" }, { "Source": "Rotten Tomatoes", "Value": "84%" }, { "Source": "Metacritic", "Value": "70/100" }], "Metascore": "70", "imdbRating": "8.2", "imdbVotes": "1,347,873", "imdbID": "tt0372784", "Type": "movie", "DVD": "09 Sep 2009", "BoxOffice": "$206,852,432", "Production": "Warner Brothers, Di Bonaventura Pictures", "Website": "N/A", "Response": "True" }
        }
    },
    reducers: {
        getMovie: (state, { payload: { key, data, total } }) => {
            if (state.data[key]) {
                state.data[key] = [...state.data[key], ...data]
            } else {
                state.data[key] = data
                state.total[key] = total
            }
        },
        getDetail: (state, { payload: { key, data } }) => {
            state.detail[key] = data
        }
    },
})

export const { getMovie, getDetail } = movieSlice.actions

export default movieSlice.reducer