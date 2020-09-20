import { Application } from 'express';
import home from './handlers/home';

export const register = (app: Application): void => {
    app.get('/', home);
};
