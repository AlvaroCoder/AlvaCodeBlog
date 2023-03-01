import React from 'react';
import {request, gql} from 'graphql-request';
import uuid from 'uuid';

export const getPosts = ()=>{
    const query = gql`
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
}