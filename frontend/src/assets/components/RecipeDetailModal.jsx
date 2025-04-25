import {useEffect} from "react";

export default function RecipeDetailModal({ recipe, closeModal }) {

    useEffect(() => {
        console.log(recipe);
    }, [recipe]);

    return (
        <>
            {recipe && <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white rounded-2xl shadow-xl w-[90%] max-w-sm p-6">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                        {recipe.name}
                    </h2>
                    <p className="text-gray-600 mb-4">
                        {recipe.description}
                    </p>
                    <span
                        className="inline-block bg-purple-200 text-purple-800 text-sm font-medium px-3 py-1 rounded-full">
          Complexidade: {recipe.complexity}
        </span>

                    <div className="mt-6 text-right">
                        <button
                            className="text-sm text-purple-700 hover:underline"
                            onClick={closeModal}
                        >
                            Fechar
                        </button>
                    </div>
                </div>
            </div>
            }
        </>
    );
}
