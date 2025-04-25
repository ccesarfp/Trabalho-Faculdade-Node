export default function UserTableHeader() {
    return (
        <thead className="bg-gray-100 text-gray-700 text-left text-sm uppercase tracking-wider">
        <tr>
            <th className="px-6 py-4">Name</th>
            <th className="px-6 py-4">Email</th>
            <th className="px-6 py-4">Recipes</th>
            <th className="px-6 py-4">Status</th>
            <th className="px-6 py-4">Actions</th>
        </tr>
        </thead>
    )
}
