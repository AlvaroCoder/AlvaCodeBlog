import React from 'react';
import {request, gql} from 'graphql-request';
import uuid from "uuid";

const graphqlAPI = process.env.HYGRAPH_PUBLIC_ENDPOINT || ''

const getPosts = async ()=>{
    const getDataQuery = gql`
        query ContentComponents {
            contentComponents {
            createdAt
            datecreatedAt
            description
            heading
            id
            publishedAt
            updatedAt
            url
            }
        }      
    `
    
    const results = await request(graphqlAPI,getDataQuery)
    .then(val=>{
        return val.contentComponents
    })    
    return results;
}
export default getPosts;