import express from 'express';
import {createRecipe, deleteRecipe, updateRecipe} from "../controllers/recipeController.js";

const router = express.Router();

router.post('/', createRecipe);
router.put('/', updateRecipe);
router.delete('/:id', deleteRecipe);

export default router;