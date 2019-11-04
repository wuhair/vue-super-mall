import axios from 'axios'
export default function request(config){
  const instance = axios.create({
    baseURL:'http://:8000/api/v1',
    timeout:5000
  })
  //发送真正的网络请求
  return instance(config)
}
