import contentfulClient from '../contentfulClient';

//Service for CRUD operation for Medical Leave content model in Contentful

export const getAllMedicalLeaverForEmployee = async(entryId) => {
    const response = await contentfulClient.getEntry(entryId)
    return response;
}