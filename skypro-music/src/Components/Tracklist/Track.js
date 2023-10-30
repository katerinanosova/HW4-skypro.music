/* eslint-disable object-shorthand */
import { useDispatch } from 'react-redux';
import getTrackDuration from '../../helpers';
import * as S from './Track.styled';
import { setCurrentTrack } from '../../store/audioplayer/actions';





export function GetTracks({ isLoading, tracks, getTracksError}) {

  const dispatch = useDispatch()
 
  const trackList = tracks.map(track => 
        <S.PlaylistItem key={track.id}>
        <S.PlaylistTrack onClick={() => {dispatch(setCurrentTrack({ playlist: tracks, track: track }))}}>
          <S.TrackTitle>
          <div>
            {isLoading ? <S.TrackTitleImageLoading /> : <S.TrackTitleImage>
             <S.TrackTitleSvg alt="music">
               <use xlinkHref="img/icon/sprite.svg#icon-note"/>
             </S.TrackTitleSvg>
           </S.TrackTitleImage>}
          </div>
          {isLoading ? <S.TrackTitleTextLoading /> : <S.TrackTitleText>
            <S.TrackTitleLink href="http://">
                {track.name} 
                <S.TrackTitleSpan>
                {track.version ? track.version : ''}
                </S.TrackTitleSpan>
            </S.TrackTitleLink>
          </S.TrackTitleText> }
          </S.TrackTitle>
          {isLoading 
          ? <S.TrackAuthorLoading /> 
          : <S.TrackAuthor>
            <S.TrackAuthorLink href="http://">
            {track.author}
            </S.TrackAuthorLink>
          </S.TrackAuthor> }
          
          <S.TrackAlbum>
            {isLoading
            ? <S.TrackAlbumLinkLoading />
            : <S.TrackAlbumLink href="http://">
              {track.album}
              </S.TrackAlbumLink>}     
          </S.TrackAlbum>
          {isLoading ? '' : <S.TrackTime>
            <S.TrackTimeSvg alt="time">
              <use xlinkHref="img/icon/sprite.svg#icon-like" />
            </S.TrackTimeSvg>
            <S.TrackTimeText>{getTrackDuration(track.duration_in_seconds)}</S.TrackTimeText>
          </S.TrackTime> }         
        </S.PlaylistTrack>
      </S.PlaylistItem> 
        )
        return (
          getTracksError || trackList
        );
}