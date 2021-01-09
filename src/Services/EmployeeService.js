import contentfulClient from '../contentfulClient';
import { managementClient, SPACE_ID, ENVIROMENT_ID } from '../contentFulManagement';

//Service for CRUD operation for Employee content model in Contentful

export const getAllEmployees = async () => {
    const response = await contentfulClient.getEntries({
        content_type: 'employee'
    });
    return response;
}

export const getEmployee = async (entryId) => {
    const respose = await contentfulClient.getEntry(entryId);
    return respose;
}

//Infor por publishing entry: https://www.contentful.com/developers/docs/references/content-management-api/#/reference/entries/entry-publishing
const publishEntry = async (entryId) => {
    const space = await managementClient.getSpace(SPACE_ID);
    const enviroment = await space.getEnvironment(ENVIROMENT_ID);
    const entry = await enviroment.getEntry(entryId);
    return await entry.publish()
}



//To save a employee first you have to create a entry
//more info here: https://www.contentful.com/developers/docs/references/content-management-api/#/reference/entries
export const saveEmployee = async (employeeData) => {
    const space = await managementClient.getSpace(SPACE_ID);
    const enviroment = await space.getEnvironment(ENVIROMENT_ID);
    const entryResult = await enviroment.createEntry('employee', {
        fields: {
            id: {
                "en-US": parseInt(employeeData.id)
            },
            nombre: {
                "en-US": employeeData.nombre
            },
            startingDate: {
                "en-US": employeeData.startingDate
            },
            position: {
                "en-US": employeeData.position
            },
            dui: {
                "en-US": employeeData.dui
            }
        }
    });
    
    //After creating a entry then you have to publish it
    const result = publishEntry(entryResult.sys.id);
    return result;
}