export default function ActionButtons({ recipe, onEdit, onDelete }) {
    const handleClick = (e) => {
        e.preventDefault();
        onEdit(recipe);
    }

    const handleDelete = (e) => {
        e.preventDefault();
        onDelete(recipe.id);
    }

    return (
        <div className="space-x-2">
            <button
                className="text-blue-500 hover:underline text-sm"
                onClick={handleClick}
            >
                Edit
            </button>
            <button
                className="text-red-500 hover:underline text-sm"
                onClick={handleDelete}
            >
                Delete
            </button>
        </div>
    )
}
