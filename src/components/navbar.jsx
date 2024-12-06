import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {clearDataProfile, clearToken} from "../redux/authSlice.js";

export default function Navbar() {
    const {isAuthenticated} = useSelector((state) => state.auth);
    const {dataProfile} = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logInLogOut = () => {
        if (!isAuthenticated) {
            navigate('/login');
        } else {
            navigate('/');
            dispatch(clearToken())
            dispatch(clearDataProfile())
            sessionStorage.removeItem('token');
        }
    }
    
    return (
        <nav className="main-nav flex flex-row justify-between items-center py-[5px] px-5">
            <Link className="main-nav-logo" to="/">
                <img
                    className="main-nav-logo-image w-[200px]"
                    src="../../public/img/argentBankLogo.png"
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </Link>
            <div className="flex items-center">
                {isAuthenticated && (
                <>
                    <Link to={"/user-panel"} className="flex items-center">
                    <img className="w-5 h-5 mr-1" src="../../public/img/userIcon.png" alt="user Icon"></img>
                    <div className="mr-6 font-bold hover:underline">{dataProfile ? dataProfile.body.firstName : ''}</div>
                    </Link>
                    <Link to={"/"} className="flex items-center" onClick={logInLogOut}>
                        <i className="fa fa-sign-out mr-2"></i>
                    </Link>
                </>
                    )}
                <Link className="main-nav-item mr-2 font-bold text-[16px] hover:underline"
                      to={isAuthenticated ? "/" : "/login"} onClick={logInLogOut}>
                    {!isAuthenticated ? "Sign In" : "Sign Out"}
                </Link>
            </div>
        </nav>
    )
}