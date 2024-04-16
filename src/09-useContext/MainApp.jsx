import { Navigate, Route, Routes } from "react-router-dom"
import { HomePage, LoginPage, AboutPage, NavBar } from './index'
import { UserProvider } from "./context/UserProvider"

export const MainApp = () => {
    return (
        <UserProvider>
            <NavBar />
            <hr />

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/login" element={<LoginPage />} />

                <Route path="/*" element={<Navigate to="/" />} />

            </Routes>
        </UserProvider>
    )
}
