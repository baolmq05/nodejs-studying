import express, { Express } from 'express';
import { renderUserCreate, renderUserList, storeUser } from '../controllers/user.controller';

const router = express.Router();

const webRoutes = (app: Express) => {
    router.get('/', renderUserList);
    router.get('/create-user', renderUserCreate);
    router.post('/create-user', storeUser);

    app.use('/', router);
}

export default webRoutes;