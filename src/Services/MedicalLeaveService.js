import contentfulClient from '../contentful';

export const getAllMedicalLeaverForEmployee = async(entryId) => {
    const response = await contentfulClient.getEntry(entryId)
    return response;
}