import axios from "axios";

const API_URL = 'http://103.160.153.38:8020/limens/statements_view/'

export const addUser = async (data) => {
    try{
       return axios.post(API_URL, data)
    } catch (error) {
        console.log('Error while calling addUser api', error.message);
    }
      
}

export const getUsers = async () => {
    try{
       return axios.get(API_URL);
    } catch (error) {
        console.log('Error while calling addUser api', error.message);
    }
      
}

export const getUser = async (data,i) => {
    try{
       return axios.get(`${API_URL}${data}/`)
    } catch (error) {
        console.log('Error while calling addUser api', error.message);
    }
      
}

export const editUser = async (data , sStatementID) =>{
    try{
        return await axios.put(`${API_URL}${sStatementID}/`, data)
    } catch(error){
    console.log('Error while calling editUser api', error.message);
    }
}

export const eDELETEUser = async (sStatementID) =>{
    try{
        return await axios.delete(`${API_URL}${sStatementID}/`)
    } catch(error){
    console.log('Error while calling deleteUser api', error.message);
    }
}