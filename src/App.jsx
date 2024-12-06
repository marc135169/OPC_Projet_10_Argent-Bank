import Navbar from "./components/navbar.jsx";
import Footer from "./components/footer.jsx";
import {Outlet} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./redux/store.js";
import {useEffect} from "react";
import {fetchUserProfile} from "./data/getUserProfile.js";

export default function App() {
    useEffect(() => {
        fetchUserProfile()
    }, []);
    return (
        <Provider store={store}>
            <Navbar/>                           
            <Outlet/>            
            <Footer/>            
        </Provider>
    )
}
 