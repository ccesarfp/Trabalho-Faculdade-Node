import express from 'express';
import userRoutes from './userRoutes.js';
import userRecipesRoutes from "./userRecipesRoutes.js";
import recipesRoutes from "./recipesRoutes.js";

const router = express.Router();

router.use("/users", userRoutes);
router.use("/user-recipes", userRecipesRoutes);
router.use("/recipes", recipesRoutes);

router.use((req, res) => {
    res.status(404).send('Not Found');
});

export default router;