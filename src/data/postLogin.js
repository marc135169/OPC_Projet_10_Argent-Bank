import {toast} from "react-toastify";

const login = async (email, password) => {
    try {
        const response = await fetch('http://localhost:3001/api/v1/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({email, password}),
        });

        return await response.json();

    } catch (error) {
        toast.error(`${error.message}`, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",            
        });
        return {
            success: false,
            message: "Unable to connect to the server, retry later",
            error: error.message,
        };
    }
};

export {login};



