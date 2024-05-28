import { Router } from 'express';

const router = Router();

router.get('/products', (req , res) => {
    console.log('GET /products');
    res.json({message: 'Działa'});
});
router.get('/products/:id', () => {});
router.post('/products', () => {});
router.put('/products/:id', () => {});
router.delete('/products/:id', () => {});

router.get('/updates', () => {});
router.get('/updates/:id', () => {});
router.post('/updates', () => {});
router.put('/updates/:id', () => {});
router.delete('/updates/:id', () => {});

export default router;