import { Request, Response, NextFunction } from "express";

const adminLoginController = (req: Request, res: Response, next: NextFunction) => {
    res.render('./admin/admin-login', {
        pageTitle: 'Admin Login'
    })
}

export { adminLoginController };