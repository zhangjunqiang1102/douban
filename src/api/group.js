import axios from "./index";


//获取小组数据
export let getGroup=(id)=>{
    return axios.get('/group')
};

//获取小组数据
