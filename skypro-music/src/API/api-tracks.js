/* eslint-disable import/prefer-default-export */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// export async function getTracksApi() {
//     const response = await fetch('https://skypro-music-api.skyeng.tech/catalog/track/all');
        
//     if (!response.ok) {
//         throw new Error('Ошибка сервера');
//     }
    
//     const data = await response.json();
//     return data;
    
// }

export const tracksApi = createApi({
    reducerPath: 'tracksApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://skypro-music-api.skyeng.tech/',
    }),
    endpoints: (builder) => ({
        getAllTracks: builder.query({
            query: () => 'catalog/track/all/'
        })
    })
})

export const { useGetAllTracksQuery } = tracksApi;