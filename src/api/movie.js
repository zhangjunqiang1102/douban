import axios from "./index";

//获取电影数据

export function getMovie(){
    return axios.get('/movie')
}

// 获取某一部电影
export function getMovieDetail(id) {
    return axios.get(`/movie/${id}`);
}