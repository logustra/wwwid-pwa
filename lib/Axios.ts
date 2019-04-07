import axios from 'axios'

const Axios = axios.create({
    baseURL: 'https://api.rss2json.com',
    headers: {
        'Content-Type': 'application/json',
    },
})

export default Axios
