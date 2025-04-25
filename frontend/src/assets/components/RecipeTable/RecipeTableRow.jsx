import ActionButtons from './ActionButtons'

export default function RecipeTableRow({ recipe, onEdit, onDelete, onRowClick }) {
    return (
        <tr
            onClick={onRowClick}
            className="hover:bg-purple-100 cursor-pointer transition duration-200"
        >
            <td className="px-6 py-4">{recipe.name}</td>
            <td className="px-6 py-4">{recipe.complexity}</td>
            <td className="px-6 py-4">
                <ActionButtons
                    recipe={recipe}
                    onEdit={onEdit}
                    onDelete={onDelete}
                />
            </td>
        </tr>
    )
}
