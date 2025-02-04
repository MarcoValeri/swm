import { Request, Response, NextFunction } from 'express';

const homeController = (req: Request, res: Response, next: NextFunction) => {
    res.render('./home', {
        pageTitle: 'SWM',
    });
}

export { homeController };