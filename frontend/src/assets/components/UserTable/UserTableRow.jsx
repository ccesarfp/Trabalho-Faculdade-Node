import StatusBadge from './StatusBadge'
import ActionButtons from './ActionButtons'

export default function UserTableRow({ onClick, user, onEdit, onDelete }) {
    return (
        <tr
            onClick={() => onClick(user.id)}
            className="hover:bg-purple-100 cursor-pointer transition duration-200"
        >
            <td className="px-6 py-4">{user.name}</td>
            <td className="px-6 py-4">{user.email}</td>
            <td className="px-6 py-4">
                <StatusBadge status={user.status}/>
            </td>
            <td className="px-6 py-4">
                <ActionButtons
                    onEdit={onEdit}
                    onDelete={onDelete}
                    user={user}
                />
            </td>
        </tr>
    )
}
