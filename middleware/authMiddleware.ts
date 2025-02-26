import { Request, Response, NextFunction } from "express";

const adminAuthMiddleware = (req: Request, res: Response, next: NextFunction) => {
    // const isAuthenticated = req.isAuthenticated && req.isAuthenticated();
    const isAuthenticated = true;

    if (isAuthenticated) {
        return next();
    } else {
        res.status(403).send('Access denied');
    }
}

export { adminAuthMiddleware };