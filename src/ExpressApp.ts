import express from 'express';
import { useExpressServer } from 'routing-controllers';
import "reflect-metadata";
import TrustfundController from './controllers/trustfund/1.0/trustfund';


const startServer = Promise.resolve(() => {
}).then(async ()=>{
    const app = express();
    app.use(express.json({limit:"20mb"}));
    app.use(express.urlencoded({limit: "20mb", extended: false}));

    useExpressServer(app, {
        controllers: [
            TrustfundController
        ],
        defaultErrorHandler: false
    })


    app.all("*", (req,res,next) => {
        if(!res.headersSent){
            res.status(404).json({
                code: "EndpointNotFound",
                message: `Enpoint ${req.originalUrl} does not exist`
            });
        }
    });

    return app;
})

export default startServer;