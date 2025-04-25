import * as userService from "../services/userService.js";

export const getUsers = async (req, res) => {
    const users = await userService.getAllUsers();
    if(Array.isArray(users) && users.length === 0) {
        res.status(404).json({
            "message": res.__('Users Not Found'),
        });
        return;
    }

    res.status(200).json({
        "users": users,
        "message": res.__('Users Found')
    });
}

export const createUser = async (req, res) => {
    const { name, email } = req.body;

    const errors = [];
    if (!name || typeof name !== 'string') {
        errors.push('Name is required');
    }
    if (!email || typeof email !== 'string') {
        errors.push('Email is required');
    } else {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            errors.push('Email problem');
        }
    }
    if (errors.length > 0) {
        res.status(400).json({
            "errors": errors
        });
        return;
    }

    await userService.saveUser({
        name, email, status: "active",
    });

    res.status(200).json({
        "message": res.__('User Created')
    });
}

export const updateUser = async (req, res) => {
    const { id, name, email } = req.body;

    if(!id) {
        res.status(400).json({
            message: res.__('User id not found'),
        });
        return;
    }

    const errors = [];
    if (!name || typeof name !== 'string') {
        errors.push('Name is required');
    }
    if (!email || typeof email !== 'string') {
        errors.push('Email is required');
    } else {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            errors.push('Email problem');
        }
    }
    if (errors.length > 0) {
        res.status(400).json({
            "errors": errors
        });
        return;
    }

    await userService.saveUser({
        public_id: id, name, email, status: "active",
    }, "update");

    res.status(200).json({
        "message": res.__('User Updated')
    });
}

export const deleteUser = async (req, res) => {
    const userId = req.params.id;
    if(!userId) {
        res.status(400).json({
            message: res.__('User id not found'),
        });
        return;
    }

    const t = await userService.saveUser({
        public_id: userId,
    }, "delete");

    res.status(200).json({
        "message": res.__('User Deleted')
    });
}