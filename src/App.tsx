import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import BackgroundHandler from "@components/BackgroundHandler/BackgroundHandler";
import Footer from "@components/Footer/Footer";
import Header from "@components/Header/Header";
import AboutMePage from "@pages/AboutMePage";
import PortfolioPage from "@pages/PortfolioPage";
import ProjectPage from "@pages/ProjectPage";
import ScrollHandler from "@components/ScrollHandler/ScrollHandler";

function App() {
    
    return (
        <BrowserRouter>
            <ScrollHandler/>
            <BackgroundHandler/>
            <Header/>
            <Routes>
                <Route path="/projects" element={<PortfolioPage/>}/>
                <Route path="/project/:projectIdName" element={<ProjectPage/>}/>
                <Route path="/about-me" element={<AboutMePage/>}/>
                <Route path="*" element={<Navigate to="/projects" replace/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    );

}

export default App;