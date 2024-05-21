import express from 'express';
import cors from 'cors';
import router from './router'
import {protect} from "./modules/auth";
import {createNewUser, signIn} from "./handlers/user";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1', protect, router);

app.post('/users', createNewUser);
app.post('/signin',signIn)

export default app;