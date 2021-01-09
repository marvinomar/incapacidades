import * as contentfulManagement from 'contentful-management';

const ACCESS_TOKEN = "CFPAT-s1wLMWASWBZb8eQR5zeKlR6GlV58HIHfkSoNa8j41zg";

export const SPACE_ID = 'fzhvooy2sy96';
export const ENVIROMENT_ID = 'master';

 export const managementClient = contentfulManagement.createClient({
    accessToken: ACCESS_TOKEN
});


