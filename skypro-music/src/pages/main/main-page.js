// import { useContext } from "react";
// import AudioPlayer from "../../Components/Audioplayer/AudioPlayer";
// import NavMenu from "../../Components/NavMenu/NavMenu";
// import Sidebar from "../../Components/Sidebar/Sidebar";
import Tracklist from "../../Components/Tracklist/Tracklist";
// import GlobalStyle from "../../GlobalStyles";
// import * as S from '../../App.styled';
// import { userContext } from "../../userContext";



export default function MainPage({ loading, tracks, getTracksError, setCurrentTrack }) {

    // const { setUser } = useContext(userContext);
    // const userLogout = () => {
    //     setUser(null);
    //     window.localStorage.removeItem('user');
    //   }
  

    return (
        // <>
        //     <GlobalStyle />
        //     <S.Wrapper>
        //         <S.Container>
        //         <S.Main>
        //             <NavMenu userLogout={userLogout} />
                    <Tracklist isLoading={loading} tracks={tracks}
                    getTracksError={getTracksError}
                    setCurrentTrack={setCurrentTrack} />
        //             <Sidebar userLogout={userLogout} isLoading={loading} />
        //         </S.Main>
        //         <AudioPlayer isLoading={loading} />
        //         <S.Footer />
        //         </S.Container>
        //     </S.Wrapper>
        // </>
    )
}