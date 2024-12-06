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
        return {
            success: false,
            message: "Unable to connect to the server, retry later",
            error: error.message,
        };
    }
};

export {login};



