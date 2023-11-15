/* eslint-disable object-shorthand */
import { useDispatch, useSelector } from 'react-redux';
import { useContext, useEffect, 
  useState
 } from 'react';
import getTrackDuration from '../../helpers';
import * as S from './Track.styled';
import { setCurrentTrack } from '../../store/audioplayer/actions';
import { useAddFavTrackMutation, useDeleteFavTrackMutation } from '../../API/api-tracks';
import { userContext } from '../../userContext';
import { refreshToken } from '../../API/api-user';




export function GetTracks({ track, tracks, isLoading }) {

  const defaultTracks =
    [ 
    {id: 1, name: "Guilt", release_date: "1991-09-07", genre: 'rock', author: "Nero", album: "Welcome Reality", duration_in_seconds: 284},
    {id: 2, name: "Elektro", release_date: "1994-09-07", genre: 'rock', author: "Dynoro, Outwork, Mr. Gee", album: "Elektro", duration_in_seconds: 144 },
    {id: 3, name: "Iam Fire", release_date: "1989-09-07", genre: 'classic', author: "Ali Bakgor", album: "Iam Fire", duration_in_seconds: 144},
    {id: 4, name: "Non Stop",  release_date: "1993-09-07", genre: 'disco', author: "Стоункат, Psychopath", album: "Non Stop", duration_in_seconds: 144},
  ]


  const { token, user, setToken } = useContext(userContext);
  
  const playingTrack = useSelector((store) => store.audioplayer.track)
  const isPlaying = useSelector((store) => store.audioplayer.playing)
  const dispatch = useDispatch();
  const [addFavTrack, { error: likeError, isError: likeIsError }] = useAddFavTrackMutation();
  const [deleteFavTrack, { error: dislikeError, isError: dislikeIsError }] = useDeleteFavTrackMutation();

  const likedByUser = Boolean(track.stared_user ? track?.stared_user?.find((staredUser) => staredUser.id === user.id) : []);
  const [isLiked, setIsLiked] = useState(false);

  async function handleLikeDislikeTrack (id) {

    const Mass = {
      Authorization: `Bearer ${token.access}`,
      "content-type": "application/json"
    }

    if (isLiked) {
      setIsLiked(false);
      deleteFavTrack({ id, Mass });

    } else {
      setIsLiked(true);
      addFavTrack({ id, Mass });
    }
  }

  const getNewToken = async () => {

    const newAccessToken = await refreshToken({ token: token.refresh });
    setToken({ access: newAccessToken, refresh: token.refresh });
    console.log(isLiked);
    handleLikeDislikeTrack (track.id)
    
  }

  if (likeIsError && likeError.status === 401) {
    getNewToken();
  }

  if (dislikeIsError && dislikeError.status === 401) {
    getNewToken();
  }

  useEffect(() => {
    setIsLiked(likedByUser);
  }, [likedByUser, track]);

  






  if (isLoading) {
    return (
      defaultTracks.map(trackDefault => 
        <S.PlaylistItem key={trackDefault.id}>
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


        return (
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
          <S.TrackTime onClick={(event) => {
            handleLikeDislikeTrack(track.id)
            event.stopPropagation()}
            }>
            <S.TrackTimeSvg alt="time" >
              <use xlinkHref={isLiked ? "img/icon/sprite.svg#icon-like-active" : "img/icon/sprite.svg#icon-like"} />
            </S.TrackTimeSvg>
            <S.TrackTimeText>{getTrackDuration(track.duration_in_seconds)}</S.TrackTimeText>
          </S.TrackTime>         
        </S.PlaylistTrack>
      </S.PlaylistItem>
        );
}