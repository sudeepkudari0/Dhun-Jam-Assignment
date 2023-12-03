import { FormEvent, useState } from 'react'

type LoginFormProps = {
    onLogin: (username: string, password: string) => void;
  };
const LoginForm = ({onLogin}: LoginFormProps) => {
    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')
    function handleSubmit(event: FormEvent<HTMLFormElement>): void {
        event.preventDefault();
        onLogin(username, password);
    }

    return (
        <div className='flex flex-row w-full h-screen justify-center'>
            <div className='flex flex-col items-center justify-center'>
                <div className='m-5'>
                    <h1 className='text-3xl font-extrabold'>Venue Admin Form</h1>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className='flex flex-col gap-5 w-[600px] justify-center items-center'>
                        <div>
                            <input className='w-96 h-10 border-white border-2 rounded-lg p-3 font-bold' type="text" placeholder="username" value={username}
          onChange={(e) => setusername(e.target.value)} />
                        </div>
                        <div>
                            <input className='w-96 h-10 border-white border-2 rounded-lg p-3 font-bold' 
                            type="password" placeholder="password" value={password} onChange={(e) => setpassword(e.target.value)} />
                        </div>
                        <div>
                            <input className='w-96 h-10 bg-[#6741D9] cursor-pointer p-2 rounded-lg p-3 font-bold' type='submit' value='Sign in' />
                        </div>
                    </div>
                </form>
            <div className='m-5'>
                <h1 className='text-[15px] cursor-pointer'>New Registration?</h1>
            </div>
            </div>
        </div>
    )
}

export default LoginForm