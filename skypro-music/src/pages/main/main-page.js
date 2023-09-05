import { useEffect, useState } from "react";
import "../../App.css";
import AudioPlayer from "../../Components/Audioplayer/AudioPlayer";
import NavMenu from "../../Components/NavMenu/NavMenu";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Tracklist from "../../Components/Tracklist/Tracklist";
import GlobalStyle from "../../GlobalStyles";
import * as S from '../../App.styled';

function delay(interval) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, interval);
    });
  };

export default function MainPage() {

    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
        delay(1000).then(() => {
        setLoading(!loading);
        })
    }, []);


    return (
        <>
            <GlobalStyle />
            <S.Wrapper>
                <S.Container>
                <S.Main>
                    <NavMenu />
                    <Tracklist isLoading={loading}/>
                    <Sidebar isLoading={loading}/>
                </S.Main>
                <AudioPlayer isLoading={loading} />
                <S.Footer />
                </S.Container>
            </S.Wrapper>
        </>
    )
}