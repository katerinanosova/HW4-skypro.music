/* eslint-disable object-shorthand */
import { useDispatch, useSelector } from 'react-redux';
import { useContext, useState } from 'react';
import getTrackDuration from '../../helpers';
import * as S from './Track.styled';
import { setCurrentTrack } from '../../store/audioplayer/actions';
import { useAddFavTrackMutation, useDeleteFavTrackMutation } from '../../API/api-tracks';
import { userContext } from '../../userContext';




export function GetTracks({ tracks, isLoading, getTracksError }) {

  const defaultTracks =
    [ 
    {id: 1, name: "Guilt", author: "Nero", album: "Welcome Reality", duration_in_seconds: 284},
    {id: 2, name: "Elektro", author: "Dynoro, Outwork, Mr. Gee", album: "Elektro", duration_in_seconds: 144 },
    {id: 3, name: "Iam Fire", author: "Ali Bakgor", album: "Iam Fire", duration_in_seconds: 144},
    {id: 4, name: "Non Stop", author: "Стоункат, Psychopath", album: "Non Stop", duration_in_seconds: 144},
  ]

  const { token, user } = useContext(userContext);
  
  const playingTrack = useSelector((store) => store.audioplayer.track)
  const isPlaying = useSelector((store) => store.audioplayer.playing)
  const dispatch = useDispatch();
  const [addFavTrack, {isError, error}] = useAddFavTrackMutation();
  const [deleteFavTrack] = useDeleteFavTrackMutation();

  const likedByUser = Boolean(tracks?.stared_user?.find((staredUser) => staredUser.id === user.id))
  const [isLiked, setIsLiked] = useState(likedByUser);

  async function handleLikeDislikeTrack (id) {

    const Mass = {
      Authorization: `Bearer ${token.access}`,
      "content-type": "application/json"
    }

    if (isLiked) {
      setIsLiked(false);
      await deleteFavTrack({ id, Mass }).unwrap();
    } else {
      setIsLiked(true);
      await addFavTrack({ id, Mass }).unwrap();
        if (isError) {
          console.log(error);
        }
    }
  }

  if (isLoading) {
    return (
      defaultTracks.map(track => 
        <S.PlaylistItem key={track.id}>
        <S.PlaylistTrack >
          <S.TrackTitle>
            <div>
              <S.TrackTitleImageLoading /> 
                <S.TrackTitleSvg alt="music">
                <use xlinkHref="img/icon/sprite.svg#icon-note"/>
              </S.TrackTitleSvg> 
            </div>
            <S.TrackTitleTextLoading />
          </S.TrackTitle>
          <S.TrackAuthorLoading /> 
          <S.TrackAlbum>
            <S.TrackAlbumLinkLoading />
          </S.TrackAlbum>         
        </S.PlaylistTrack>
      </S.PlaylistItem> 
        )
    )
  }


 
  const trackList = tracks.map(track => 
        <S.PlaylistItem key={track.id}>
        <S.PlaylistTrack onClick={() => {dispatch(setCurrentTrack({ playlist: tracks, track: track }))}}>
          <S.TrackTitle>
          <div> 
            <S.TrackTitleImage>
              {playingTrack && playingTrack.id === track.id ? 
              <S.TrackTitleDotSvg $isPlaying={isPlaying} alt="music" />
              : <S.TrackTitleSvg alt="music">
              <use xlinkHref="img/icon/sprite.svg#icon-note"/>
            </S.TrackTitleSvg> }
           </S.TrackTitleImage>
          </div>
          <S.TrackTitleText>
            <S.TrackTitleLink href="http://">
                {track.name} 
                <S.TrackTitleSpan>
                {track.version ? track.version : ''}
                </S.TrackTitleSpan>
            </S.TrackTitleLink>
          </S.TrackTitleText>
          </S.TrackTitle>
          <S.TrackAuthor>
            <S.TrackAuthorLink href="http://">
            {track.author}
            </S.TrackAuthorLink>
          </S.TrackAuthor>
          <S.TrackAlbum>
            <S.TrackAlbumLink href="http://">
              {track.album}
              </S.TrackAlbumLink>     
          </S.TrackAlbum>
          <S.TrackTime onClick={() => {handleLikeDislikeTrack(track.id)}}>
            <S.TrackTimeSvg alt="time" >
              <use xlinkHref={isLiked ? "img/icon/sprite.svg#icon-like-active" : "img/icon/sprite.svg#icon-like"} />
            </S.TrackTimeSvg>
            <S.TrackTimeText>{getTrackDuration(track.duration_in_seconds)}</S.TrackTimeText>
          </S.TrackTime>         
        </S.PlaylistTrack>
      </S.PlaylistItem> 
        )
        return (
          getTracksError || trackList
        );
}