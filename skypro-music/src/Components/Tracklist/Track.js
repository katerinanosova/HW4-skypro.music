import * as S from './Track.styled';


export const tracks = [{
    id: 0,
    title: "Guilt",
    version: " (Hi Profile Remix)",
    author: "Nero",
    album: "Welcome Reality",
    time: "4:44"
}, {
    id: 1,
    title: "Elektro",
    version: "",
    author: "Dynoro, Outwork, Mr. Gee",
    album: "Elektro",
    time: "2:22"
}, {
    id: 2,
    title: "I’m Fire",
    version: "",
    author: "Ali Bakgor",
    album: "I’m Fire",
    time: "2:22"
}, {
    id: 3,
    title: "Non Stop",
    version: "",
    author: "Стоункат, Psychopath",
    album: "Non Stop",
    time: "4:12"
}, {
    id: 4,
    title: "Non Stop",
    version: "",
    author: "Стоункат, Psychopath",
    album: "Non Stop",
    time: "4:12"
}, {
    id: 5,
    title: "Non Stop",
    version: "",
    author: "Стоункат, Psychopath",
    album: "Non Stop",
    time: "4:12"
}, {
    id: 6,
    title: "Non Stop",
    version: "",
    author: "Стоункат, Psychopath",
    album: "Non Stop",
    time: "4:12"
}, {
    id: 7,
    title: "Non Stop",
    version: "",
    author: "Стоункат, Psychopath",
    album: "Non Stop",
    time: "4:12"
}, {
    id: 8,
    title: "Non Stop",
    version: "",
    author: "Стоункат, Psychopath",
    album: "Non Stop",
    time: "4:12"
}, {
    id: 9,
    title: "Non Stop",
    version: "",
    author: "Стоункат, Psychopath",
    album: "Non Stop",
    time: "4:12"
}]


export function GetTracks({ isLoading }) {
    const trackList = tracks.map(track => 
        <S.PlaylistItem key={track.id}>
        <S.PlaylistTrack>
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
                {track.title} 
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
            <S.TrackTimeText>{track.time}</S.TrackTimeText>
          </S.TrackTime> }         
        </S.PlaylistTrack>
      </S.PlaylistItem> 
        )
        return (
            trackList
        );
}