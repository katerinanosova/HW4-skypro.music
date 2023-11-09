import { useState } from "react";
import Filter from "./Filter";
import { GetTracks } from "./Track";
import * as S from './Tracklist.styled';
import { useGetAllTracksQuery } from "../../API/api-tracks";



export const genres = ['Рок', 'Техно', 'Поп', 'Металл', 'Панк-рок'];
export const years = [2000, 2001, 2002];
export const author = ['Nero', 'Ali Bakgor', 'Стоункат, Psychopath']


export default function Tracklist() {

    const { data = [], error, isLoading } = useGetAllTracksQuery();
    
    const [activeIndex, setActiveIndex] = useState(0);


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
        <S.CenterblockH2>Треки</S.CenterblockH2>
        <S.CenterblockFilter>
          <S.FilterTitle>Искать по:</S.FilterTitle>
          <Filter type='исполнителю' filterName={author} isActive={activeIndex === 1} onShow={() => setActiveIndex(1)} onHide={() => setActiveIndex(0)} />
          <Filter type='году выпуска' filterName={years} isActive={activeIndex === 2} onShow={() => setActiveIndex(2)} onHide={() => setActiveIndex(0)} />
          <Filter type='жанру' filterName={genres} isActive={activeIndex === 3} onShow={() => setActiveIndex(3)} onHide={() => setActiveIndex(0)} />          
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
            <GetTracks tracks={data} isLoading={isLoading} getTracksError={error}  />
          </S.ContentPlaylist>
        </S.CenterblockContent>
      </S.MainCenterblock>
    );
}