import * as recipeService from "../services/recipeService.js";
import {getUserByPublicId} from "../services/userService.js";

export const createRecipe = async (req, res) => {
    const { name, description, complexity, user_id } = req.body;

    const user = await getUserByPublicId(user_id);
    if (user.length < 1) {
        return res.status(400).json({
            message: res.__('User not exists'),
        })
    }
    const userId = user[0].id;

    const errors = [];
    if (!name || typeof name !== 'string') {
        errors.push('Name is required');
    }
    if (errors.length > 0) {
        res.status(400).json({
            "errors": errors
        });
        return;
    }

    await recipeService.saveRecipe({
        name, description, complexity, user_id: userId
    });

    res.status(200).json({
        "message": res.__('Recipe Created')
    });
}

export const updateRecipe = async (req, res) => {
    const { id, name, description, complexity } = req.body;

    if(!id) {
        res.status(400).json({
            message: res.__('Recipe id not found'),
        });
        return;
    }

    const errors = [];
    if (!name || typeof name !== 'string') {
        errors.push('Name is required');
    }
    if (errors.length > 0) {
        res.status(400).json({
            "errors": errors
        });
        return;
    }

    await recipeService.saveRecipe({
        public_id: id, name, description, complexity,
    }, "update");

    res.status(200).json({
        "message": res.__('Recipe Updated')
    });
}

export const deleteRecipe = async (req, res) => {
    const recipeId = req.params.id;
    if(!recipeId) {
        res.status(400).json({
            message: res.__('Recipe id not found'),
        });
        return;
    }

    await recipeService.deleteRecipe(recipeId);

    res.status(200).json({
        "message": res.__('Recipe Deleted')
    });
}