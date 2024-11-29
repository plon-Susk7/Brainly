
import { Twitter,VideoLabel,Article,Share,Delete} from '@mui/icons-material';

export interface ProjectInformation {
    title : string,
    type : string,
    description : string,
    date: string,
}


export const ProjectCards = (props : ProjectInformation) => {

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


    return(
        <>
            <div className='border w-[300px] h-[400px] p-4 shadow bg-white rounded-lg'>
                <div className="flex justify-between mb-5">
                    <div className='flex items-center gap-2'>
                        {Icon(props)}
                        {props.title}
                    </div>
                    <div className='flex items-center gap-2'>
                        <Share/>
                        <Delete/>
                    </div>
                   
                </div>
                <h1>{props.description}</h1>
                <h1 className='text-sm text-gray-400 mt-3'> Added on {props.date}</h1>
            </div>
        </>
    )
}