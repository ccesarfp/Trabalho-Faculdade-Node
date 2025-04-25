import { useState } from 'react'
import UserTableHeader from './RecipeTableHeader.jsx'
import RecipeTableRow from './RecipeTableRow.jsx'
import RecipeDetailModal from '../RecipeDetailModal.jsx'

export default function RecipeTable({ recipes, onRowClick, onEdit, onDelete }) {
    const [selectedRecipe, setSelectedRecipe] = useState(null);

    const closeModal = () => setSelectedRecipe(null);

    return (
        <>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white shadow-md rounded-xl overflow-hidden">
                    <UserTableHeader />
                    <tbody className="text-gray-600 divide-y divide-gray-200">
                    {recipes && recipes.map((recipe, index) => (
                        <RecipeTableRow
                            key={index}
                            recipe={recipe}
                            onEdit={onEdit}
                            onDelete={onDelete}
                            onRowClick={() => setSelectedRecipe(recipe)}
                        />
                    ))}
                    </tbody>
                </table>
            </div>

            {selectedRecipe && (
                <RecipeDetailModal
                    recipe={selectedRecipe}
                    closeModal={closeModal}
                />
            )}
        </>
    )
}
