/* eslint-disable import/prefer-default-export */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


const baseHost = 'https://skypro-music-api.skyeng.tech/';

export const tracksApi = createApi({
    reducerPath: 'tracksApi',
    tagTypes: ['Tracks'],
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
            }),
            providesTags: ['Tracks']
               
        }),

        addFavTrack: builder.mutation({
            query: ({ id, Mass }) => ({
                url: `catalog/track/${id}/favorite/`,
                method: 'POST',
                headers: Mass
            }),
            invalidatesTags: ['Tracks']
        }),

        deleteFavTrack: builder.mutation({
            query: ({ id, Mass }) => ({
                url: `catalog/track/${id}/favorite/`,
                method: 'DELETE',
                headers: Mass
            }),
            invalidatesTags: ['Tracks']
        }),

        getSelectedTracks: builder.query({
            query: ({ id }) => ({
                url: `/catalog/selection/${id}/`,
                method: 'GET'
            }),
            providesTags: ['Tracks']
        })
    })
})

export const { useGetAllTracksQuery, useGetFavTracksQuery, useAddFavTrackMutation, useDeleteFavTrackMutation, useGetSelectedTracksQuery } = tracksApi;

