import { Request, Response } from 'express';
import { paths, isDev } from '../../../configuration';
import session from '../../session';

const home = (req: Request, res: Response): void => {
    res.render(paths.template, {
        public_path: isDev ? 'http://localhost:8080/dist' : '',
        initial_data: {
            connectedUsers: session.users
        }
    });
};

export default home;
