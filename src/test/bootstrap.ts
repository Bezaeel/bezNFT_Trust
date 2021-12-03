import "module-alias/register";
import "reflect-metadata";

import nock from "nock";

import Chai from 'chai';
import ChaiHTTP from 'chai-http';
import ChaiSubset from 'chai-subset';
import ChaiDatetime from 'chai-datetime';
import ChaiAsPromised from "chai-as-promised";

Chai.use(ChaiDatetime);
Chai.use(ChaiHTTP);
Chai.use(ChaiSubset);
Chai.use(ChaiAsPromised);
Chai.should();

nock.disableNetConnect();
nock.enableNetConnect("127.0.0.1");

export default Chai;