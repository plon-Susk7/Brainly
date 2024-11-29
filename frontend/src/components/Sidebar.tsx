import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLemon} from "@fortawesome/free-regular-svg-icons";
import { Twitter,VideoLabel,Article,Link,Tag } from '@mui/icons-material';



export const Sidebar = () => {


    return(
        <>  
            <div className='p-3 w-1/4 h-screen border '>
                <div className='flex gap-2 items-center text-xl font-bold mb-10'>
                    <FontAwesomeIcon icon={faLemon}/>
                    <h1>Second Brain</h1>
                </div>
                <div className='flex flex-col text-gray-500 gap-10 p-6'>
                    <span className='flex items-center'>
                        <Twitter/>
                        <h1 className="ml-3">Tweets</h1>
                    </span>
                    <span className='flex items-center'>
                        <VideoLabel/>
                        <h1 className="ml-3">Videos</h1>
                    </span>
                    <span className='flex items-center'>
                        <Article/>
                        <h1 className="ml-3">Documents</h1>                        
                    </span>
                    <span className='flex items-center'>
                        <Link/>
                        <h1 className="ml-3">Links</h1>
                    </span>
                    <span className='flex items-center'>
                        <Tag />
                        <h1 className="ml-3">Tags</h1>
                    </span>
                    
                    
                </div>
            </div>
        </>
    )

}