import axios from "axios";
import { Button } from "./Button"

export const Login = () => {


    const handleLogin = async () => {

        const usernameElement = document.querySelector('input[name="username"]');
        const username = usernameElement ? (usernameElement as HTMLInputElement).value : '';
        const passwordElement = document.querySelector('input[name="password"]');
        const password = passwordElement ? (passwordElement as HTMLInputElement).value : '';
        try {
            const result = await axios.post('http://localhost:8080/api/v1/signin',
                {
                    username : username,
                    password : password
                },
                {
                headers : {
                    'Content-Type' : 'application/json',
                },
            })
            localStorage.setItem('authorization',result.data.token);
        }catch (error){
            alert("Wrong password or username! Please try again!");
        }

    }

    return(
        <>
            <div className="fixed inset-0 z-50 flex items-center justify-center">
                <div className="h-[400px] w-[300px] bg-gray-200 flex flex-col items-center justify-center gap-3 p-4">
                    <h1>Enter username</h1>
                    <input name='username' type='text' className="w-full mb-2 p-1 rounded-lg border border-gray-300"></input>
                    <h1>Enter password</h1>
                    <input name='password' type='password' className="w-full mb-2 p-1 rounded-lg border border-gray-300"></input>
                    <Button variant="primary" size="md" onClick={() => {handleLogin()}} text={"Submit"} />
                </div>
            </div>
        </>
    )
}