import * as userRecipesService from "../services/userRecipesService.js";

export const getUserRecipes = async (req, res) => {
    const userId = req.params.id;
    if(!userId) {
        res.status(400).json({
            message: res.__('User id not found'),
        });
        return;
    }

    const recipes = await userRecipesService.getAllRecipes(userId);
    if(Array.isArray(recipes) && recipes.length === 0) {
        res.status(404).json({
            "message": res.__('Recipes Not Found'),
        });
        return;
    }

    res.status(200).json({
        "recipes": recipes,
        "message": res.__('Recipes Found')
    });
};