import express, { Request, Response } from "express"
import { handleCreateUser, handleDestroyUser, handleGetUsers, handleUpdateUser, handleUserDetail } from "services/user.service";

const renderUserList = async (req: Request, res: Response): Promise<void> => {
    const userList = await handleGetUsers();
    return res.render('index', { userList: userList });
}

const renderUserCreate = (req: Request, res: Response): void => {
    return res.render('create-user');
}

const storeUser = async (req: Request, res: Response): Promise<void> => {
    const { fullname, age, address } = req.body;

    // Service Layer
    const result = await handleCreateUser(fullname, age, address.trim());

    if (result != null || result) {
        res.redirect('/');
    }

    res.redirect('/create-user');
}

const renderUserDetail = async (req: Request<{ id: string }>, res: Response) => {
    const { id } = req.params;

    // Service Layer
    const result = await handleUserDetail(id);

    return res.render('edit-user', { user: result });
}

const updateUser = async (req: Request<{ id: string }>, res: Response) => {
    const { id, fullname, age, address } = req.body;

    // Service Layer
    const result = await handleUpdateUser(fullname, age, address.trim(), id);

    if (result != null || result) {
        res.redirect('/');
    }

    res.redirect('/');
}

const destroyUser = async (req: Request, res: Response) => {
    const id = req.params.id as string;

    // Service Layer
    const result = await handleDestroyUser(id);

    if (result) {
        return res.redirect('/');
    } else {
        console.log(result);
    }
}

export { renderUserList, renderUserCreate, storeUser, renderUserDetail, updateUser, destroyUser }