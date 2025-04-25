export default function ActionButtons({user, onEdit, onDelete}) {
    const handleEditClick = (e) => {
        e.stopPropagation(); // Evita o clique da <tr>
        onEdit(user);
    };

    const handleDeleteClick = (e) => {
        e.stopPropagation();
        onDelete(user.id);
    }

    return (
        <div className="space-x-2">
            <button
                className="text-blue-500 hover:underline text-sm"
                onClick={handleEditClick}
            >
                Edit
            </button>
            <button
                className="text-red-500 hover:underline text-sm"
                onClick={handleDeleteClick}
            >
                Delete
            </button>
        </div>
    )
}
