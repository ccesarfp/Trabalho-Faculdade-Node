import { createRoot } from 'react-dom/client'
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import UserList from "./assets/pages/UserList.jsx";
import UserRecipes from "./assets/pages/UserRecipes.jsx";
import "./index.css";

createRoot(document.getElementById('root')).render(
    <div
        className="min-h-screen bg-gradient-to-br from-purple-800 to-purple-900 flex flex-col justify-center"
    >
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<UserList/>}/>
                <Route path="/user-recipes/:id" element={<UserRecipes/>}/>
                <Route path="*" element={<Navigate to="/"/>}/>
            </Routes>
        </BrowserRouter>

        <div className="w-full bg-gray-200 py-4 px-6">
            <p className="text-gray-700 text-center text-sm">Esse Projeto Foi Desenvolvido Por Caio Cesar Fagundes Padilha</p>
            <p className="text-gray-700 text-center text-sm">como Atividade da Matéria de Experiência Criativa Inovando Colaborativamente</p>
        </div>
    </div>
)
