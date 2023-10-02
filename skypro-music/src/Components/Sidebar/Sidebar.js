import { useContext } from "react";
import { Link } from "react-router-dom";
import { Playlist } from "../Playlist/Playlist";
import * as S from './Sidebar.styled'
import { userContext } from "../../userContext";




export default function Sidebar({ isLoading, userLogout }) {

  const { user } = useContext(userContext);

  

    return (
        <S.MainSidebar>
        <S.SidebarPersonal>
          <S.SidebarPersonalName>{user.username}</S.SidebarPersonalName>
          <Link to='/login'>
          <S.SidebarIcon onClick={userLogout}>
            <svg alt="logout">
              <use xlinkHref="img/icon/sprite.svg#logout" />
            </svg>
          </S.SidebarIcon>
          </Link>
        </S.SidebarPersonal>
        <S.SidebarBlock>
          <S.SidebarList>
            <Playlist isLoading={isLoading} />
          </S.SidebarList>
        </S.SidebarBlock>
      </S.MainSidebar>
    );
}