import { Router } from 'express';

const router = Router();

router.get('/products', (req , res) => {
    console.log('GET /products');
});
router.get('/products/:id', () => {});
router.post('/products', () => {});
router.put('/products/:id', () => {});
router.delete('/products/:id', () => {});

router.get('/products', () => {});
router.get('/products/:id', () => {});
router.post('/products', () => {});
router.put('/products/:id', () => {});
router.delete('/products/:id', () => {});

export default router;