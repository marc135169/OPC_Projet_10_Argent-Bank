export const fetchUserProfile = async () => {
    const token = sessionStorage.getItem("token");
    if (!token) return;
    try {
        const response = await fetch(`http://localhost:3001/api/v1/user/profile`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        })        
        return await response.json()

    } catch (error) {
        return console.log({error})
    }
}

