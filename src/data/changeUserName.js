
export const changeUserName = async (userName) => {
    const token = sessionStorage.getItem('token');
    if (!token) {
        console.error("Token non disponible");
        return { success: false, message: "Token non disponible" };
    }
    try{
        const response = await fetch('http://localhost:3001/api/v1/user/profile',{
            method: 'PUT',
            headers:{
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify({ userName }),
        })

        const responseData = await response.json();
        
        if (responseData.status === 200) {            
            return { success: true, data: responseData.body };
        } else {            
            return { success: false, message: responseData.message };
        }
    } catch (error) {
        return { success: false, message: "Network error", error: error.message };
    }
};