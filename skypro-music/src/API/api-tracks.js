/* eslint-disable import/prefer-default-export */
export async function getTracksApi() {
    const response = await fetch('https://skypro-music-api.skyeng.tech/catalog/track/all');
        
    if (!response.ok) {
        throw new Error('Ошибка сервера');
    }
    
    const data = await response.json();
    return data;
    
}