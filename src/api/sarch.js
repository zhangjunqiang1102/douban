import axios from './index';

//获取search 数据
export let search=()=>{
    return axios.get('/search')
};