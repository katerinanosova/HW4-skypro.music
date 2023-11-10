import { useContext, useEffect } from "react";
import { useGetFavTracksQuery } from "../../API/api-tracks";
import { refreshToken } from "../../API/api-user";
import { GetTracks } from "../../Components/Tracklist/Track";
import * as S from '../../Components/Tracklist/Tracklist.styled';
import { userContext } from "../../userContext";



export default function Favorites() {

  const { token, setToken } = useContext(userContext);
  const Mass = {
    Authorization: `Bearer ${token.access}`,
    "content-type": "application/json"
  }

  const { data = [], isLoading, isError, error } = useGetFavTracksQuery(Mass);

  const getNewToken = async () => {
    const newAccessToken = await refreshToken({ token: token.refresh });
    setToken({ access: newAccessToken })
  }
  
  

  useEffect(() => {
      if (isError) {
        if (error.status === 401) {
          getNewToken();
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
            <GetTracks isLoading={isLoading} tracks={data}
                     getTracksError={error ? error.data.detail : ''}/> 
          </S.ContentPlaylist>
        </S.CenterblockContent>
      </S.MainCenterblock>
    )
}