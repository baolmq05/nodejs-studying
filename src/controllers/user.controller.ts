import express, { Request, Response } from "express"
import { handleCreateUser } from "../services/user.service";

const renderUserList = (req: Request, res: Response): void => {
    return res.render('index', { foo: "Foo" });
}

const renderUserCreate = (req: Request, res: Response): void => {
    return res.render('create-user');
}

const storeUser = (req: Request, res: Response): void => {
    const { fullname, email, address } = req.body;

    // Service Layer
    handleCreateUser(fullname, email, address);

    res.redirect('/create-user');
}

export { renderUserList, renderUserCreate, storeUser }