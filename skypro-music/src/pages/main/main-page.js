
import AudioPlayer from "../../Components/Audioplayer/AudioPlayer";
import NavMenu from "../../Components/NavMenu/NavMenu";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Tracklist from "../../Components/Tracklist/Tracklist";
import GlobalStyle from "../../GlobalStyles";
import * as S from '../../App.styled';


export default function MainPage({ loading, tracks, getTracksError, currentTrack, setCurrentTrack }) {

    
  

    return (
        <>
            <GlobalStyle />
            <S.Wrapper>
                <S.Container>
                <S.Main>
                    <NavMenu />
                    <Tracklist isLoading={loading} tracks={tracks}
                    getTracksError={getTracksError}
                    setCurrentTrack={setCurrentTrack} />
                    <Sidebar isLoading={loading} />
                </S.Main>
                <AudioPlayer isLoading={loading} currentTrack={currentTrack} />
                <S.Footer />
                </S.Container>
            </S.Wrapper>
        </>
    )
}