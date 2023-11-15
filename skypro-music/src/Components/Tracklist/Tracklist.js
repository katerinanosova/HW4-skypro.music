import {   useEffect,  useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Filter from "./Filter";
import { GetTracks } from "./Track";
import * as S from './Tracklist.styled';
import { useGetAllTracksQuery } from "../../API/api-tracks";
// import { userContext } from "../../userContext";
// import { refreshToken } from "../../API/api-user";
import { setInitialTracksForFilter, setSearch } from "../../store/audioplayer/actions";




// export const genres = ['Рок', 'Техно', 'Поп', 'Металл', 'Панк-рок'];
// export const years = [2000, 2001, 2002];
// export const author = ['Nero', 'Ali Bakgor', 'Стоункат, Psychopath']


export default function Tracklist() {

  // const { token, setToken } = useContext(userContext);

  const { data = [], error, isLoading, isSuccess } = useGetAllTracksQuery();
    
  const [activeIndex, setActiveIndex] = useState(0);

  const dispatch = useDispatch();
  // const isFiltered = useSelector((store) => store.audioplayer.filtered);
  const filteredTrackList = useSelector((store) => store.audioplayer.filteredPlaylist);
  const initialTracksForFilter = useSelector((store) => store.audioplayer.initialTracksForFilter);
  const filteredByGenre = useSelector((store) => store.audioplayer.FilterCriteria.isActiveGenre);
  const filteredByAuthor = useSelector((store) => store.audioplayer.FilterCriteria.isActiveAuthor);
  const isSorted = useSelector((store) => store.audioplayer.FilterCriteria.isActiveSort)

  // const getNewToken = async () => {
  //   const newAccessToken = await refreshToken({ token: token.refresh });
  //     setToken({ access: newAccessToken });
  //     refetch();
  // }

  const genres = [...new Set(data.map(track => track.genre))];
  const author = [...new Set(data.map(track => track.author))];
  const years = ['По умолчанию', 'Сначала новые', 'Сначала старые' ];

  useEffect(() => {
    if (data) {
      dispatch(setInitialTracksForFilter({ data }));
    }
  }, [isSuccess]);


  const filteredData = (filteredByGenre || filteredByAuthor || isSorted) ? filteredTrackList : initialTracksForFilter;

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
            onChange={(e) => {dispatch(setSearch({ value: e.target.value, tracks: filteredData }))}}
          />
        </S.CenterblockSearch>
        <S.CenterblockH2>Треки</S.CenterblockH2>
        <S.CenterblockFilter>
          <S.FilterTitle>Искать по:</S.FilterTitle>
          <Filter type='исполнителю' filterName='author' filterOptions={author} tracks={filteredData} isActive={activeIndex === 1} onShow={() => setActiveIndex(1)} onHide={() => setActiveIndex(0)} />
          <Filter type='году выпуска' filterName='release_date' filterOptions={years} tracks={filteredData} isActive={activeIndex === 2} onShow={() => setActiveIndex(2)} onHide={() => setActiveIndex(0)} />
          <Filter type='жанру' filterName='genre' filterOptions={genres} tracks={filteredData} isActive={activeIndex === 3} onShow={() => setActiveIndex(3)} onHide={() => setActiveIndex(0)} />          
        </S.CenterblockFilter>
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
            {error && error}
            {!error && filteredData.map((track) => (
              <GetTracks key={track.id} track={track} tracks={filteredData} isLoading={isLoading} />
            ))}

          </S.ContentPlaylist>
        </S.CenterblockContent>
      </S.MainCenterblock>
    );
}