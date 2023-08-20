import axios from 'axios';

const movieDb = axios.create(
    {
        baseURL:'https://api.themoviedb.org/3/movie',
        params: {
            api_key:'88ef394c8a3bbfdf6359af834e58c48b',
            language: 'es-ES'
        }   
    }
)
export default movieDb;