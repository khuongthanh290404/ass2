import express from 'express';
import { deletetUser, getUser, Login, Register } from '../controller/auth';

const routerAuth = express.Router();
routerAuth.post('/register', Register);
routerAuth.post('/login', Login);
routerAuth.get('/user', getUser);
routerAuth.delete('/user/:id', deletetUser);
export default routerAuth;
