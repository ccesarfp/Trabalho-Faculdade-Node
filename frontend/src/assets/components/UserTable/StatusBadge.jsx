const colorClasses = {
    active: 'text-green-700 bg-green-100',
    pending: 'text-yellow-700 bg-yellow-100',
    inactive: 'text-red-700 bg-red-100',
}

export default function StatusBadge({ status }) {
    return (
        <span
            className={`inline-block px-2 py-1 text-xs font-semibold rounded-full ${colorClasses[status]}`}
        >
      {status}
    </span>
    )
}
