import { get } from "./forEach.js";
import axios from 'axios';


let api:string='https://670e5f763e71518616543f31.mockapi.io/exam'

export const getApi =async()=> {
    try {
        const {data}=await axios.get(api)
        get(data)
    } catch (error) {
        console.error(error);
    }    
}



// search


let SearchInp=document.querySelector('.SearchInp') as HTMLInputElement
SearchInp.oninput=async()=>{
    try {
        const {data}=await axios.get(`${api}?name=${SearchInp.value}`)
        get(data)
    } catch (error) {
        console.error(error);
    }
}


// sort

let sortBy=document.querySelector('.sortBy') as HTMLSelectElement

sortBy.onchange=async()=>{
    try {
        const {data}=await axios.get(`${api}?sortBy=${sortBy.value}`)
        get(data)
    } catch (error) {
        console.error(error);
    }
}


// delete

export async function deleteUSer(id:string) {
    try {
        const {data}=await axios.delete(`${api}/${id}`)
        getApi() 
    } catch (error) {
        console.error(error);
    }    
}










































































