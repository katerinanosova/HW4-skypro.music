import { useGetAllTracksQuery } from '../../API/api-tracks';
import * as S from './Playlist.styled'


export const playlists = [{
    id: 1,
    name: "day's playlist",
    img: "img/playlist01.png"
}, {
    id: 2,
    name: "top 100 hits",
    img: "img/playlist02.png"
}, {
    id: 3,
    name: "indi",
    img: "img/playlist03.png"
}]


export function Playlist() {

    const { isLoading } = useGetAllTracksQuery();
    
    const playlistItems = playlists.map(playlistItem => 
        <S.SidebarItem key={playlistItem.id}>
            <S.SidebarLink to={`/categories/${playlistItem.id}`}>
                {isLoading ? <S.SidebarImgLoading  /> : <S.SidebarImg
                  src={playlistItem.img}
                  alt={playlistItem.name}
                />}
            </S.SidebarLink>
        </S.SidebarItem>
        )

    return (
        playlistItems
    );
}