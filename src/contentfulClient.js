import * as contentful from 'contentful';

const SPACE_ID = 'fzhvooy2sy96';
const ENVIROMENT_ID = 'master';
const ACCESS_TOKEN = 'BSS6P-xg34Wqx9CtGKvzk77AkG-u36VVYQrqlRSslho';

const contentfulClient = contentful.createClient({
    space: SPACE_ID,
    environment: ENVIROMENT_ID,
    accessToken: ACCESS_TOKEN,
});

export default contentfulClient;