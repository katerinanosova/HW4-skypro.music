import { useContext } from "react";
import { Outlet } from "react-router-dom";
import AudioPlayer from "../Audioplayer/AudioPlayer";
import NavMenu from "../NavMenu/NavMenu";
import Sidebar from "../Sidebar/Sidebar";
import GlobalStyle from "../../GlobalStyles";
import * as S from '../../App.styled';
import { userContext } from "../../userContext";




export default function Layout({ loading }) {

    const { setUser } = useContext(userContext);
    const userLogout = () => {
        setUser(null);
        window.localStorage.removeItem('user');
      }
  

    return (
        <>
            <GlobalStyle />
            <S.Wrapper>
                <S.Container>
                <S.Main>
                    <NavMenu userLogout={userLogout} />
                    <Outlet />
                    <Sidebar userLogout={userLogout} isLoading={loading} />
                </S.Main>
                <AudioPlayer isLoading={loading} />
                <S.Footer />
                </S.Container>
            </S.Wrapper>
        </>
    )
}