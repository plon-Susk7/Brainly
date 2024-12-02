import { useSetRecoilState } from "recoil"
import { Button } from "./Button"
import { FormState } from "../atoms/FormState"

export const AddContentForm = () => {

    const setFormState = useSetRecoilState(FormState);

    const handleClickOutSide = (e:any) => {
        if (e.target.id === "submission-overlay") {
			setFormState(false);
		}
    }

    return(
        <>
            <div id="submission-overlay" onClick={handleClickOutSide} className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-50 backdrop-blur-sm">
                <div className="h-[400px] w-[400px] z-50">
                    <h1 className="text-md font-bold text-gray-800">Enter Title</h1>
                    <input type = 'text' className="w-full mb-2 p-1 rounded-lg border border-gray-300"></input>

                    <h1 className="text-md font-bold text-gray-800">Select Type</h1>
                    <select
                        className="w-full mb-2 p-1 rounded-lg border border-gray-300"
                        name="type">
                        <option value="tweets">Tweets</option>
                        <option value="documents">Documents</option>
                        <option value="videos">Video</option>
                    </select>

                    <h1 className="text-md font-bold text-gray-800">Enter Description</h1>
                    <input type = 'text' className="w-full mb-2 p-1 rounded-lg border border-gray-300"></input>
                    <h1 className="text-md font-bold text-gray-800">Enter Link</h1>
                    <input type = 'text' className="w-full mb-2 p-1 rounded-lg border border-gray-300"></input>
                    <div className="flex items-center">
                        <Button variant="primary" size="md" onClick={() => { }} text={"Submit"} />
                    </div>
                </div>
            </div>
        </>
    )
}