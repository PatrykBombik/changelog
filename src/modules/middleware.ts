import {validationResult} from "express-validator";
import prisma from "../db";

export const handleInputErrors = (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        res.status(400).json({errors: errors.array()});
        return;
    }

    next();
};


export const deleteProduct = async (req, res) => {
    const deletedProduct = await prisma.product.delete({
        where: {
            id_belongsToId: {
                id: req.params.id,
                belongsToId: req.user.id
            }
        }
    });
    res.json({data: deletedProduct});
};