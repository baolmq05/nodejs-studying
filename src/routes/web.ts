import express, { Express } from 'express';
import { destroyUser, renderUserCreate, renderUserDetail, renderUserList, storeUser, updateUser } from '../controllers/user.controller';

const router = express.Router();

const webRoutes = (app: Express) => {
    router.get('/', renderUserList);
    router.get('/create-user', renderUserCreate);
    router.post('/create-user', storeUser);
    router.get('/user/:id', renderUserDetail);
    router.post('/update-user', updateUser);
    router.post('/destroy-user/:id', destroyUser);

    app.use('/', router);
}

export default webRoutes;