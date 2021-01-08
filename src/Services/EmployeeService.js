import contentfulClient from '../contentful';

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