/* eslint-disable import/prefer-default-export */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { useContext } from 'react';
import { userContext } from '../userContext';


const baseHost = 'https://skypro-music-api.skyeng.tech/';
const { token } = useContext(userContext);


export const tracksApi = createApi({
    reducerPath: 'tracksApi',
    baseQuery: fetchBaseQuery({
        baseUrl: baseHost,
    }),
    endpoints: (builder) => ({
        getAllTracks: builder.query({
            query: () => 'catalog/track/all/'
        }),

        getFavTracks: builder.query({
            query: () => 'catalog/track/favorite/all/',
            headers: {
                Authorization: `Bearer ${token.access}`
            }

        })
    })
})

export const { useGetAllTracksQuery } = tracksApi;

