import { Route, Routes } from "react-router-dom";
import PublicRoute from '../core/guards/auth-guard'
import Login from "../pages/Login";
import Home from "../pages/Home";


function AppRouter (){
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="login" element={<PublicRoute><Login /></PublicRoute>}/>
            <Route />
        </Routes>
    )
}
export default AppRouter;