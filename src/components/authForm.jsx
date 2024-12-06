import {useSelector, useDispatch} from 'react-redux';
import {updateField, resetForm} from '../redux/authFormSlice.js';
import {login} from "../data/postLogin.js";
import {useNavigate} from "react-router-dom";
import {setDataProfile, setToken} from "../redux/authSlice.js";
import {fetchUserProfile} from "../data/getUserProfile.js";
import {useState} from "react";


export default function AuthForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {email, password} = useSelector((state) => state.authForm);
    const [errorMessage, setErrorMessage] = useState("");
    
    const handleChange = (e) => {
        const {name, value} = e.target;
        dispatch(updateField({name, value}));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage("");
        try {
            const response = await login(email, password);
            
            if(response.message && response.status !== 200){
                setErrorMessage(response.message);
            }                
            else{
                sessionStorage.setItem('token', response.body.token);
                const dataProfile =  await fetchUserProfile()
                dispatch(setDataProfile(dataProfile));
                dispatch(setToken(response.body.token));
                navigate('/user-panel');   
            }            
            
        } catch (error) {
            console.error('Erreur de connexion sex:', error);            
        }
        dispatch(resetForm());        
    };

    return (
        <>
            <main className="authMain w-[100%] h-[85vh] flex flex-col items-center bg-[#12002b]">
                <div
                    className="authDiv flex flex-col items-center justify-start p-8 bg-white mt-12 mx-auto w-[300px] h-[385px]">
                    <div className="authHeader flex flex-col items-center justify-center">
                        <img src="../../public/img/userIcon.png" alt="user Icon"/>
                        <h1 className="text-[24px] font-bold my-[1.25rem]">Sign In</h1>
                    </div>
                    <form onSubmit={handleSubmit} className="authForm flex flex-col items-center justify-center gap-5">
                        <div className="authForm-email flex flex-col items-center justify-center">
                            <label className="self-start font-bold">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={email}
                                onChange={handleChange}
                                required
                                className="border border-black/85 p-1"
                            />
                        </div>
                        <div className="authForm-password flex flex-col items-center justify-center">
                            <label className="self-start font-bold">Password</label>
                            <input
                                type="password"
                                name="password"
                                value={password}
                                onChange={handleChange}
                                required
                                className="border border-black/85 p-1"
                            />
                        </div>
                        <div className="authForm-checkbox flex flex-row self-start gap-2">
                            <input type="checkbox"/>
                            <label>Remember me</label>
                        </div>
                        <button type="submit"
                                className="authForm-submit border bg-[#00bc77] text-white font-bold w-full text-[1.1rem] mb-5"
                                onSubmit={handleSubmit}
                        >Sign In
                        </button>
                    </form>
                </div>
                <div>
                    <p className="Error text-red-700 font-bold mt-5">{errorMessage}</p>
                </div>
            </main>
        </>
    );
}
