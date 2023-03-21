import {request, gql} from 'graphql-request';

const graphqlAPI = process.env.HYGRAPH_PUBLIC_ENDPOINT || ''

export const getPosts = async ()=>{
    const getDataQuery = gql`
        query ContentComponents {
            contentComponents {
            createdAt
            datecreatedAt
            description
            heading
            slug
            categories {
                name
            }
            }
        }      
    `
    
    const results = await request(graphqlAPI,getDataQuery)
    .then(val=>{
        return val.contentComponents
    })    
    return results;
}

export const getPostsDetails = async (slug : String)=>{
    const getPostContentDetails = gql`
        query GetPostContentDetails($slug: String!) {
            contentComponent(where: {slug: $slug}){
                datecreatedAt
                description
                heading
                slug
                content {
                    raw
                }
                categories {
                    name
                }
          }
        }
    `
    const result = request(graphqlAPI,getPostContentDetails, {slug})
    .then(val=>val.contentComponent)
    return result;
}
