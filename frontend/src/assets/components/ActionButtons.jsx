export default function ActionButtons({ data, onEdit, onDelete }) {
    const handleClick = (e) => {
        e.stopPropagation();
        onEdit(data);
    }

    const handleDelete = (e) => {
        e.stopPropagation();
        onDelete(data.id);
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
