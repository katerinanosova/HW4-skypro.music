// import { useState } from "react";
import Filter from "../../Components/Tracklist/Filter";
import { GetTracks } from "../../Components/Tracklist/Track";
import * as S from '../../Components/Tracklist/Tracklist.styled';
import { genres, years, author } from "../../Components/Tracklist/Tracklist";

export default function Favorites({ isLoading, tracks, getTracksError, activeIndex, setActiveIndex }) {


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
            <GetTracks isLoading={isLoading} tracks={tracks}
                    getTracksError={getTracksError} />
          </S.ContentPlaylist>
        </S.CenterblockContent>
      </S.MainCenterblock>
    )
}