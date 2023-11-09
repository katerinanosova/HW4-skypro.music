import { useContext, useEffect } from "react";
import { useGetFavTracksQuery } from "../../API/api-tracks";
import { refreshToken } from "../../API/api-user";
import { GetTracks } from "../../Components/Tracklist/Track";
import * as S from '../../Components/Tracklist/Tracklist.styled';
import { userContext } from "../../userContext";


// const favTracks = [
//     {
//         id: 8,
//         name: "Chase",
//         author: "Alexander Nakarada",
//         release_date: "2005-06-11",
//         genre: "Классическая музыка",
//         duration_in_seconds: 205,
//         album: "Chase",
//         logo: null,
//         track_file: "https://skypro-music-api.skyeng.tech/media/music_files/Alexander_Nakarada_-_Chase.mp3",
//     },
//     {
//         id: 9,
//         name: "Open Sea epic",
//         author: "Frank Schroter",
//         release_date: "2019-06-12",
//         genre: "Классическая музыка",
//         duration_in_seconds: 165,
//         album: "Open Sea epic",
//         logo: null,
//         track_file: "https://skypro-music-api.skyeng.tech/media/music_files/Frank_Schroter_-_Open_Sea_epic.mp3",
//     }
// ]

export default function Favorites() {

  const { token } = useContext(userContext);
  const Mass = {
    Authorization: `Bearer ${token.access}`,
    "content-type": "application/json"
  }

  const { favTracks = [], isLoading, isError, error } = useGetFavTracksQuery(Mass);
    

  useEffect(() => {
      if (isError) {
        if (error.status === 401) {
          refreshToken({ token: token.refresh });
          // refetch();
        }
      }
    }, [isError, error])
    



    return (
        <S.MainCenterblock>
        <S.CenterblockSearch>
          <S.SearchSvg>
            <use xlinkHref="img/icon/sprite.svg#icon-search" />
          </S.SearchSvg>
          <S.SearchText
            type="search"
            placeholder="Поиск"
            name="search"
          />
        </S.CenterblockSearch>
        <S.CenterblockH2>Мои треки</S.CenterblockH2>
        <S.CenterblockContent>
          <S.ContentTitle>
            <S.PlaylistTitleCol01>Трек</S.PlaylistTitleCol01>
            <S.PlaylistTitleCol02>ИСПОЛНИТЕЛЬ</S.PlaylistTitleCol02>
            <S.PlaylistTitleCol03>АЛЬБОМ</S.PlaylistTitleCol03>
            <S.PlaylistTitleCol04>
              <S.PlaylistTitleSvg alt="time">
                <use xlinkHref="img/icon/sprite.svg#icon-watch" />
              </S.PlaylistTitleSvg>
            </S.PlaylistTitleCol04>
          </S.ContentTitle>
          <S.ContentPlaylist>
            <GetTracks isLoading={isLoading} tracks={favTracks}
                     getTracksError={error ? error.data.detail : ''}/> 
          </S.ContentPlaylist>
        </S.CenterblockContent>
      </S.MainCenterblock>
    )
}