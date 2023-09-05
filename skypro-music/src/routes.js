import { Routes, Route } from "react-router-dom";
import Login from "./pages/login/login";
import Registration from "./pages/registration/registration";
import NotFound from "./pages/not-found/not-found";
import Favorites from "./pages/favorites/favorites";
import Categories from "./pages/categoties/categories";
import MainPage from "./pages/main/main-page";
import ProtectedRoute from "./Components/protected-route";

export default function AppRoutes ({ user }) {
    console.log(user);
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="*" element={<NotFound />} />

            <Route element={<ProtectedRoute isAllowed={Boolean(user)} />}>
                <Route path="/" element={<MainPage />} />
                <Route path="/favorites" element={<Favorites />} />
                <Route path="/categories" element={<Categories />} />
            </Route>
                                
        </Routes>
    )
}
