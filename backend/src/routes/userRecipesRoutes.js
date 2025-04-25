import express from 'express';
import {getUserRecipes} from "../controllers/userRecipesController.js";

const router = express.Router();

router.get('/:id', getUserRecipes);

export default router;