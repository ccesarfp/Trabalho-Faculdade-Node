import UserTable from "../components/UserTable/index.jsx";
import PageTitle from "../components/PageTitle.jsx";
import {useNavigate} from "react-router-dom";
import UserModal from "../components/UserModal.jsx";
import {useEffect, useState} from "react";
import api from "../../api/axios.js";

export default function UserList() {
    const [users, setUsers] = useState();
    useEffect(() => {
        api.get("api/users")
            .then(r => {
                setUsers(r.data.users);
            })
            .catch(err => {
                console.error("Erro ao buscar usuários:", err);
            });
    }, []);

    const navigate = useNavigate();
    const [editingUser, setEditingUser] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCreate = () => {
        setEditingUser(null);
        setIsModalOpen(true);
    };

    const handleOpenEdit = (user) => {
        setEditingUser(user);
        setIsModalOpen(true);
    };

    const handleSubmit = (data) => {
        if (editingUser) {
            api.put("api/users", data)
                .then(r => {
                    navigate(0);
                })
                .catch(err => {
                    console.error("Erro ao buscar usuários:", err);
                });
        } else {
            api.post("api/users", data)
                .then(r => {
                    navigate(0);
                })
                .catch(err => {
                    console.error("Erro ao buscar usuários:", err);
                });
        }
    };

    const deleteUser = (id) => {
        api.delete(`api/users/${id}`)
            .then(r => {
                navigate(0);
            })
            .catch(err => {
                console.error("Erro ao deletar usuário:", err);
            });
    }

    const onRowClick = (id) => {
        navigate(`/user-recipes/${id}`);
    }

    return (
        <>
            <div
                className="flex flex-col items-center space-y-8 p-6"
            >
                <PageTitle title="Users"/>

                <div className="max-w-4xl">
                    <div className="flex justify-end mb-4">
                        <button
                            className="px-6 py-2 bg-purple-700 text-white font-semibold rounded-lg hover:bg-purple-600 transition duration-200"
                            onClick={handleCreate}
                        >
                            Adicionar Usuário
                        </button>
                    </div>

                    <UserTable
                        users={users}
                        onRowClick={onRowClick}
                        onEdit={handleOpenEdit}
                        onDelete={deleteUser}
                    />

                    <UserModal
                        isOpen={isModalOpen}
                        onClose={() => setIsModalOpen(false)}
                        onSubmit={handleSubmit}
                        initialData={editingUser}
                    />
                </div>
            </div>
        </>
    )
}