import {Router} from 'express';
import {createProduct, getProduct, getProducts, updateProduct} from "./handlers/products";
import {body} from "express-validator";
import {deleteProduct, handleInputErrors} from "./modules/middleware";

const router = Router();

router.get('/products', getProducts);
router.get('/products/:id', getProduct);

router.post('/products',
    body('name').isString(),
    handleInputErrors,
    createProduct);

router.put('/products/:id', updateProduct);
router.delete('/products/:id', deleteProduct);

router.get('/updates', () => {});
router.get('/updates/:id', () => {});
router.post('/updates', () => {});
router.put('/updates/:id', () => {});
router.delete('/updates/:id', deleteProduct);

export default router;