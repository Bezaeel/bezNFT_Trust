import { ThirdwebSDK } from '@3rdweb/sdk';
import Details from '@app/models/details';
import { ethers } from "ethers";
import * as dotenv from "dotenv";



dotenv.config();
export default class TrustfundBackend {
    

    private static sdk = new ThirdwebSDK(
        new ethers.Wallet(
            process.env.PRIVATE_KEY as string,
            ethers.getDefaultProvider("https://rinkeby-light.eth.linkpool.io/")
        )
    )

    private static nft_address = "0xDFDa25C9805976F0846106DDC1DAD2778C24F5D0";
    private static nft = this.sdk.getNFTModule(this.nft_address);

    static async hold(toSubmit: Details) : Promise<string>{
        const result = await this.nft.mint({
            customerID: toSubmit.customer_id,
            description: toSubmit.description,
            file: toSubmit.file
        });

        return result.uri;
    }

    //TODO: implement function to upload file to IPFS instead of accepting file URL from request
}