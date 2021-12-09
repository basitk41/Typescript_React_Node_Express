import { Application } from 'express'
module.exports = (app:Application) => {
    require('./users')(app);
}