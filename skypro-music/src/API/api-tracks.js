/* eslint-disable import/prefer-default-export */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


const baseHost = 'https://skypro-music-api.skyeng.tech/';

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
            query: (Mass) => ({
                url: 'catalog/track/favorite/all/',
                method: 'GET',
                headers: Mass
            }) 
        })
    })
})

export const { useGetAllTracksQuery, useGetFavTracksQuery } = tracksApi;

