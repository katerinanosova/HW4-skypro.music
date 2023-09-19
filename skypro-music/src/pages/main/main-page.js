import { useState } from "react";
import AudioPlayer from "../../Components/Audioplayer/AudioPlayer";
import NavMenu from "../../Components/NavMenu/NavMenu";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Tracklist from "../../Components/Tracklist/Tracklist";
import GlobalStyle from "../../GlobalStyles";
import * as S from '../../App.styled';


export default function MainPage() {

    const [loading, setLoading] = useState(true);
  

    return (
        <>
            <GlobalStyle />
            <S.Wrapper>
                <S.Container>
                <S.Main>
                    <NavMenu />
                    <Tracklist isLoading={loading} setLoading={setLoading}/>
                    <Sidebar isLoading={loading} />
                </S.Main>
                <AudioPlayer isLoading={loading} />
                <S.Footer />
                </S.Container>
            </S.Wrapper>
        </>
    )
}