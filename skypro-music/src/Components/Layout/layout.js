import { useContext } from "react";
import { Outlet } from "react-router-dom";
import AudioPlayer from "../Audioplayer/AudioPlayer";
import NavMenu from "../NavMenu/NavMenu";
import Sidebar from "../Sidebar/Sidebar";
import GlobalStyle from "../../GlobalStyles";
import * as S from '../../App.styled';
import { userContext } from "../../userContext";




export default function Layout() {

    const { setUser, setToken } = useContext(userContext);
    const userLogout = () => {
        setUser(null);
        setToken(null);
        window.localStorage.removeItem('user');
        window.localStorage.removeItem('token');
      }
  

    return (
        <>
            <GlobalStyle />
            <S.Wrapper>
                <S.Container>
                <S.Main>
                    <NavMenu userLogout={userLogout} />
                    <Outlet />
                    <Sidebar userLogout={userLogout} />
                </S.Main>
                <AudioPlayer />
                <S.Footer />
                </S.Container>
            </S.Wrapper>
        </>
    )
}