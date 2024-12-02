
import axios from "axios"
import {useEffect} from 'react';
import { ProjectCards } from "./ProjectCards"
import { useRecoilState } from "recoil";
import { ProjectState } from "../atoms/ProjectAtom";

export const Body = () => {
    const [data,setData] = useRecoilState(ProjectState);

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
        return <ProjectCards key = {temp['_id']} id={temp['_id']} title={temp['title']} type={temp['type']} description={temp['description']} date={temp['date']}/>  
    })

    return(
        <div className='flex flex-wrap pl-[16.67%]'>
            {projects}
        </div>
    )
}