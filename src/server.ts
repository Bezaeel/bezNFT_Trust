import "module-alias/register";
import "reflect-metadata";
import startServer from '@app/ExpressApp';

Promise.resolve(startServer).then((expressApp) => {
    expressApp.listen(3000, () => {
        console.log("server started...");
    });
});