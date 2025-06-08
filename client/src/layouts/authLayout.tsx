import Header from "../components/base/header.tsx";
import {Outlet} from "react-router-dom";
import Footer from "../components/base/footer.tsx";

const AuthLayout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header/>
            <div className="flex-1 px-10 py-5">
                <Outlet/>
            </div>
            <Footer/>
        </div>
    )
}

export default AuthLayout;