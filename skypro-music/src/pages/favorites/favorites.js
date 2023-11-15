import { useContext, 
  // useEffect  
 } from "react";
// import { useNavigate } from "react-router-dom";
import { useGetFavTracksQuery } from "../../API/api-tracks";
import { refreshToken } from "../../API/api-user";
import { GetTracks } from "../../Components/Tracklist/Track";
import * as S from '../../Components/Tracklist/Tracklist.styled';
import { userContext } from "../../userContext";




export default function Favorites() {

  const { token, 
    setToken, 
    // setUser 
  } = useContext(userContext);
  const Mass = {
    Authorization: `Bearer ${token.access}`,
    "content-type": "application/json"
  }

  // const navigate = useNavigate();
  const { data = [], isLoading, isError, error, refetch } = useGetFavTracksQuery(Mass);

  const getNewToken = async () => {
    const newAccessToken = await refreshToken({ token: token.refresh });
    setToken({ access: newAccessToken });
    refetch();
  }
  
  
  // useEffect(() => {
      if (isError && error.status === 401) {
          getNewToken();
          // setUser(null);
          // setToken(null);
          // window.localStorage.removeItem('user');
          // window.localStorage.removeItem('token');
          // navigate('/login');
      }
    // }, [isError, error])
    



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
          {/* {error && error} */}
            {!isError && data.map((track) => (
              <GetTracks key={track.id} track={track} tracks={data} isLoading={isLoading} />
            ))}
            {/* <GetTracks isLoading={isLoading} tracks={data} getNewToken={getNewToken}
                     getTracksError={error ? error.data.detail : ''}/>  */}
          </S.ContentPlaylist>
        </S.CenterblockContent>
      </S.MainCenterblock>
    )
}