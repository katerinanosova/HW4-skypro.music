import { Routes, Route } from "react-router-dom";
import NotFound from "./pages/not-found/not-found";
import Favorites from "./pages/favorites/favorites";
import Categories from "./pages/categoties/categories";
import MainPage from "./pages/main/main-page";
import ProtectedRoute from "./Components/protected-route";
import AuthPage from "./pages/AuthPage/AuthPage";
import Layout from "./Components/Layout/layout";

export default function AppRoutes ({ user, loading, tracks, getTracksError }) {
    
    return (
        <Routes>
            <Route path="/login" element={<AuthPage isLoginMode />} />
            <Route path="/register" element={<AuthPage isLoginMode={false} />} />
                        
            <Route path="*" element={<NotFound />} />

            <Route element={<ProtectedRoute isAllowed={Boolean(user)} />}>
                <Route path="/" element={<Layout loading={loading} />}>
                    <Route index element={<MainPage
                        tracks={tracks}
                        getTracksError={getTracksError}
                        />} />
                    <Route path="favorites" element={<Favorites
                            tracks={tracks}
                            getTracksError={getTracksError} />} />
                    <Route path="categories/:id" element={<Categories />} />
                </Route>
            </Route>
                                
        </Routes>
    )
}
