import PageTitle from "../components/PageTitle.jsx";
import {useNavigate, useParams} from "react-router-dom";
import RecipeTable from "../components/RecipeTable/index.jsx";
import {useEffect, useState} from "react";
import RecipeModal from "../components/RecipeModal.jsx";
import api from "../../api/axios.js";
import toast, { Toaster } from 'react-hot-toast';

export default function UserRecipes() {
    const successIcon = "✅";
    const errorIcon = "❌";
    const styleToast = {
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      };

    const { id } = useParams();
    const [recipes, setRecipes] = useState();
    useEffect(() => {
        api.get(`api/user-recipes/${id}`)
            .then(r => {
                setRecipes(r.data.recipes);
                toast(r.data.message, {...styleToast, icon: successIcon});

            })
            .catch(err => {
                toast("Problem during load", {...styleToast, icon: errorIcon});
            });
    }, []);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingRecipe, setEditingRecipe] = useState(null);

    const handleOpenCreate = () => {
        setEditingRecipe(null);
        setIsModalOpen(true);
    };

    const handleEdit = (recipe) => {
        setEditingRecipe(recipe);
        setIsModalOpen(true);
    };
    const handleSubmit = (data) => {
        if (editingRecipe) {
            api.put("api/recipes", {...data, user_id: id})
                .then(r => {
                    toast(r.data.message, {...styleToast, icon: successIcon});
                    navigate(0);
                })
                .catch(err => {
                    toast("Problem during recipe update", {...styleToast, icon: errorIcon});
                });
        } else {
            api.post("api/recipes", {...data, user_id: id})
                .then(r => {
                    toast(r.data.message, {...styleToast, icon: successIcon});
                    navigate(0);
                })
                .catch(err => {
                    toast("Problem during recipe creation", {...styleToast, icon: errorIcon});
                });
        }
    };

    const deleteRecipe = (id) => {
        api.delete(`api/recipes/${id}`)
            .then(r => {
                toast(r.data.message, {...styleToast, icon: successIcon});
                navigate(0);
            })
            .catch(err => {
                toast("Problem during recipe delete", {...styleToast, icon: errorIcon});
            });
    }

    const navigate = useNavigate();

    return (
        <>
            <div
                className="flex flex-col items-center space-y-8 p-6"
            >
                <PageTitle title={`User Recipes`}/>

                <div className="max-w-4xl">
                    <div className="flex justify-between mb-4">
                        <button
                            className="px-6 py-2 bg-purple-500 text-white font-semibold rounded-lg hover:bg-purple-700 transition duration-200"
                            onClick={() => navigate("/")}
                        >
                            Retornar
                        </button>
                        <button
                            className="px-6 py-2 bg-purple-700 text-white font-semibold rounded-lg hover:bg-purple-500 transition duration-200"
                            onClick={handleOpenCreate}
                        >
                            Adicionar Receita
                        </button>
                    </div>

                    <RecipeTable
                        recipes={recipes}
                        onEdit={handleEdit}
                        onDelete={deleteRecipe}
                    />

                    <RecipeModal
                        isOpen={isModalOpen}
                        onClose={() => setIsModalOpen(false)}
                        onSubmit={handleSubmit}
                        initialData={editingRecipe}
                    />
                </div>
            </div>

            <Toaster 
                position="bottom-right"
                reverseOrder={false}
            />
        </>
    )
}