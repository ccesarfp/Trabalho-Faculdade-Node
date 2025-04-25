import UserTableHeader from './UserTableHeader.jsx'
import UserTableRow from './UserTableRow.jsx'

export default function UserTable({ users, onRowClick, onEdit, onDelete }) {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white shadow-md rounded-xl overflow-hidden">
                <UserTableHeader />
                <tbody className="text-gray-600 divide-y divide-gray-200">
                    {users && users.map((user, index) => (
                        <UserTableRow
                            key={index}
                            onClick={onRowClick}
                            user={user}
                            onEdit={onEdit}
                            onDelete={onDelete}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    )
}
