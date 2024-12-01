
import axios from "axios"
import {useEffect,useState} from 'react';
import { ProjectCards } from "./ProjectCards"

export const Body = () => {
    const [data,setData] = useState([]);

    const token = localStorage.getItem('authorization');
    const getData = async () => {
        const response = await axios.get('http://localhost:8080/api/v1/content',{
            headers : {
                'Content-Type' : 'application/json',
                'authorization' : token
            }
        });
        setData(response.data);
    }

    useEffect(()=>{
        getData();
    },[]);

    const projects = data.map((temp)=>{
        return <ProjectCards title={temp['title']} type={temp['type']} description={temp['description']} date={temp['date']}/>  
    })

    return(
        <div className='flex flex-wrap pl-[16.67%]'>
            {projects}
        </div>
    )
}