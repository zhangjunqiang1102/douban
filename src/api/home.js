import axios from './index';

//获取主页数据
<<<<<<< HEAD
// export let getHome=(id)=>{
//     return axios.get(`/home${id}`)
// };
export let getHome=()=>{
    return axios.get('/home')
};



=======
export function getHome(id){
    return axios.get(`/home${id}`)
}
>>>>>>> 25cf44f2c3eeec66a6ad77ef64ca99d6ea474a37





