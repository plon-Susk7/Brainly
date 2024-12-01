
import { Twitter,VideoLabel,Article,Share,Delete} from '@mui/icons-material';
import axios from 'axios';

export interface ProjectInformation {
    id : string,
    title : string,
    type : string,
    description : string,
    date: string,
}


export const ProjectCards = (props : ProjectInformation) => {

    const token = localStorage.getItem('authorization');

    const Icon = (props : ProjectInformation) =>{
        switch(props.type){
            case 'tweets':
                return <Twitter/>
            case 'documents':
                return <Article/>
            case 'videos':
                return <VideoLabel/>
            default:
                return <Article/>
        }
    }

    const deleteContent = async (id : any) => {
        const response = await axios.delete(`http://localhost:8080/api/v1/content/${id}`,{
            headers : {
                'Content-Type' : 'application/json',
                'authorization' : token
            }
        })

        console.log(response);
    }


    return(
        <>
            <div key={props.id} className='border w-[300px] h-[400px] p-4 shadow bg-white rounded-lg'>
                <div className="flex justify-between mb-5">
                    <div className='flex items-center gap-2'>
                        {Icon(props)}
                        {props.title}
                    </div>
                    <div className='flex items-center gap-2'>
                        <Share/>
                        <Delete onClick={() => deleteContent(props.id)}/>
                    </div>
                   
                </div>
                <h1>{props.description}</h1>
                <h1 className='text-sm text-gray-400 mt-3'> Added on {props.date}</h1>
            </div>
        </>
    )
}