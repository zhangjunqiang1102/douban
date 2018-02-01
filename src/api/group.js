import axios from "./index";
//获取小组数据
export let getGroup = () => {

  export function getGroup() {
    return axios.get('/group')
  }
};
