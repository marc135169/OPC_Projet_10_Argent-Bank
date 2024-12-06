import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {changeUserName} from "../data/changeUserName.js";
import {setDataProfile} from "../redux/authSlice.js";
import AccountBalance from "../components/accountBalance.jsx";


export default function UserPanel() { 
    const {dataProfile, isAuthenticated} = useSelector(state => state.auth);
    const userName = dataProfile?.body?.userName || "Pseudo";
    const firstName = dataProfile?.body?.firstName || "first Name";
    const lastName = dataProfile?.body?.lastName || "Last Name";
    const [editMode, setEditMode] = useState(false);
    const navigate = useNavigate();
    const [newUserName, setUserName] = useState(userName);
    const dispatch = useDispatch();
    
    const handleEditMode = () => {
        if (isAuthenticated) {            
            setEditMode(true);
        }
        else{
            navigate('/login');
        }
    }
    const handleCancel = () => {
        setEditMode(false);
    }
     const handleSave = async () => {
         try {
             const response = await changeUserName(newUserName);
             if (response.success) {  
                 dispatch(setDataProfile({
                     ...dataProfile,
                     body: response.data,
                 }));
                 setEditMode(false);
             } else {
                 console.error("Update Error :", response.message);
             }
         } catch (error) {
             console.error("Save error:", error);
         }
    }
    
    const handleUserNameChange = (e) => {
        setUserName(e.target.value);
    };
    
    
    return (
        <>
            <main className="userPanelMain w-[100%] h-[85vh] flex flex-col items-center bg-[#12002b]">
                <section className="settingPanel">
                    {!editMode &&
                        <div className="infoPanel" id="mainPanel">
                            <h1 className="text-white text-3xl my-5 w-52">Welcome back {userName} !</h1>
                            <button onClick={handleEditMode}
                                    className="text-white bg-[#00bc77] py-2 px-5 w-32 rounded-md">Edit Name
                            </button>
                        </div>
                    }
                    {editMode &&
                        <div className="EditPanel flex flex-col items-center justify-center gap-5">
                            <h1 className="text-white text-3xl mt-5">Edit user Info</h1>
                            <div className="infoPanel flex items-center justify-center gap-2">
                                <label className="text-white">User Name:</label>
                                <input type="text" placeholder={userName} value={newUserName}
                                       onChange={handleUserNameChange}
                                       className="w-40 placeholder-black px-2 rounded-md"/>
                            </div>
                            <div className="infoPanel flex items-center justify-center gap-2">
                                <label className="text-white">First Name:</label>
                                <input type="text" placeholder={firstName} disabled className="w-40 px-2 rounded-md"/>
                            </div>
                            <div className="infoPanel flex items-center justify-center gap-2">
                                <label className="text-white">Last Name:</label>
                                <input type="text" placeholder={lastName} disabled className="w-40 px-2 rounded-md"/>
                            </div>
                            <div className="flex items-center justify-center gap-10">
                                <button onClick={handleSave}
                                        className="text-white bg-[#00bc77] py-2 px-5 w-32 rounded-md">Save
                                </button>
                                <button onClick={handleCancel}
                                        className="text-white bg-[#00bc77] py-2 px-5 w-32 rounded-md">Cancel
                                </button>
                            </div>
                        </div>
                    }
                </section>
                <section className="informationPanel flex flex-col mt-20 w-full items-center justify-center gap-10">
                    <AccountBalance multi="8349" money="2,082.79" balance="Available"/>
                    <AccountBalance multi="6712" money="10,928.42" balance="Available"/>
                    <AccountBalance multi="8349" money="184.30" balance="Current"/>
                </section>
            </main>
        </>
    )
}