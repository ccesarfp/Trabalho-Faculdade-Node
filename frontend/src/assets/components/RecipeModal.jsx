import { useState, useEffect } from "react";

export default function RecipeModal({ isOpen, onClose, onSubmit, initialData }) {
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [complexity, setComplexity] = useState("LOW");

    useEffect(() => {
        if (initialData) {
            setId(initialData.id || "");
            setName(initialData.name || "");
            setDescription(initialData.description || "");
            setComplexity(initialData.complexity || "LOW");
        } else {
            setId("");
            setName("");
            setDescription("");
            setComplexity("LOW");
        }
    }, [initialData]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ id, name, description, complexity });
        onClose();
    };

    if (!isOpen) return null;

    const isEditing = !!initialData;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6">
                <h2 className="text-xl font-semibold text-purple-700 mb-4">
                    {isEditing ? "Editar Receita" : "Criar Receita"}
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Nome</label>
                        <input
                            type="text"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Descrição</label>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                            rows={3}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Complexidade</label>
                        <select
                            value={complexity}
                            onChange={(e) => setComplexity(e.target.value)}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                        >
                            <option value="LOW">Low</option>
                            <option value="MEDIUM">Medium</option>
                            <option value="HIGH">High</option>
                        </select>
                    </div>

                    <div className="flex justify-end space-x-3">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 text-sm text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
                        >
                            Cancelar
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 text-sm text-white bg-purple-600 rounded-md hover:bg-purple-700"
                        >
                            {isEditing ? "Salvar" : "Criar"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
