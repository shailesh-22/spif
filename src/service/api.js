import axios from "axios";

const API_URL = 'http://103.160.153.38:8020/limens/statements_view'

export const addUser = async (data) => {
    try{
       return axios.post(API_URL, data)
    } catch (error) {
        console.log('Error while calling addUser api', error.message);
    }
      
}

export const getUser = async (data) => {
    try{
       return axios.get(`${API_URL}/${data}`)
    } catch (error) {
        console.log('Error while calling addUser api', error.message);
    }
      
}