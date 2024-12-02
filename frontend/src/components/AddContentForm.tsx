import { useSetRecoilState} from "recoil"
import { Button } from "./Button"
import { FormState } from "../atoms/FormState"
import axios from "axios";
import { ProjectState } from "../atoms/ProjectAtom";

export const AddContentForm = () => {
    
    const token = localStorage.getItem('authorization');
    const setFormState = useSetRecoilState(FormState);
    const setData = useSetRecoilState(ProjectState);

    const handleClickOutSide = (e:any) => {
        if (e.target.id === "submission-overlay") {
			setFormState(false);
		}
    }

    const postContent = async () => {
        const titleElement = document.querySelector('input[name="title"]');
        const title = titleElement ? (titleElement as HTMLInputElement).value : '';

        const typeElement = document.querySelector('input[name="type"]');
        const type = typeElement ? (typeElement as HTMLInputElement).value : '';

        const descriptionElement = document.querySelector('input[name="description"]');
        const description = descriptionElement ? (descriptionElement as HTMLInputElement).value : '';

        const linkElement = document.querySelector('input[name="link"]');
        const link= linkElement ? (linkElement as HTMLInputElement).value : '';

        const post_response = await axios.post('http://localhost:8080/api/v1/content',
            {
                title : title,
                type : type,
                description : description,
                tag : [],
                link : link,
            },
            {
            headers : {
                'Content-Type' : 'application/json',
                'authorization' : token
            },
        })

        const response = await axios.get(`http://localhost:8080/api/v1/content`,{
            headers:{
                'Content-Type' : 'application/json',
                'authorization' : token
            }
        })
        
        setData(response.data);

        setFormState(false);
        console.log(post_response)
        
    }

    return(
        <>
            <div id="submission-overlay" onClick={handleClickOutSide} className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-50 backdrop-blur-sm">
                <div className="h-[400px] w-[400px] z-50">
                    <h1 className="text-md font-bold text-gray-800">Enter Title</h1>
                    <input name='title' type = 'text' className="w-full mb-2 p-1 rounded-lg border border-gray-300"></input>

                    <h1 className="text-md font-bold text-gray-800">Select Type</h1>
                    <select
                        className="w-full mb-2 p-1 rounded-lg border border-gray-300"
                        name="type">
                        <option value="tweets">tweets</option>
                        <option value="documents">documents</option>
                        <option value="videos">videos</option>
                    </select>

                    <h1 className="text-md font-bold text-gray-800">Enter Description</h1>
                    <input name='description' type = 'text' className="w-full mb-2 p-1 rounded-lg border border-gray-300"></input>
                    <h1 className="text-md font-bold text-gray-800">Enter Link</h1>
                    <input name='link' type = 'text' className="w-full mb-2 p-1 rounded-lg border border-gray-300"></input>
                    <div className="flex items-center">
                        <Button variant="primary" size="md" onClick={() => postContent()} text={"Submit"} />
                    </div>
                </div>
            </div>
        </>
    )
}