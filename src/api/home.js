import axios from './index';

//获取主页数据
export let getMove=()=>{
    return axios.get('/home')
};





