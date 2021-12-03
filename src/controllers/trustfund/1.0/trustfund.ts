import TrustfundBackend from '@app/backend/trustfund';
import Details from '@app/models/details';
import {NextFunction, Request, Response} from 'express';
import {
    JsonController,
    Post,
    Req,
    Res
} from 'routing-controllers';

@JsonController('/1.0/trustfund')
export default class TrustfundController {
    
    @Post('/hold')
    hold(
        @Req() req: Request,
        @Res() res: Response,
        next: NextFunction
    ){
      
        const body = req.body as Details;
        const data = TrustfundBackend.hold(body)

        if(data){
            console.log(data);
            return {
                isSuccess: true,
                code: 200,
                data: data
            }
        }

        return {
            isSuccess: true,
            message: "an error occurred",
            code: 500,
            data: null
        }
    }
}