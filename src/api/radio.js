import axios from './index';

//获取广播数据
export let radio =()=>{
    return axios.get('/radio')
};