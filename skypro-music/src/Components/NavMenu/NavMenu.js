import { useState } from "react";
import * as S from './NavMenu.styles'


export default function NavMenu() {
  const [open, setOpen] = useState(false);

    return (
        <S.MainNav>
        <S.NavLogo>
          <S.LogoImage src="img/logo.png" alt="logo" />
        </S.NavLogo>
        <S.NavBurger type="button" onClick={() => setOpen(!open)}>
          <S.BurgerLine />
          <S.BurgerLine />
          <S.BurgerLine />
        </S.NavBurger>

        {open ? <S.NavMenu>
          <S.MenuList>
            <S.MenuItem>
              <S.MenuLink to="/">
                Главная
              </S.MenuLink>
            </S.MenuItem>
            <S.MenuItem>
              <S.MenuLink to="/favorites">
                Мой плейлист
              </S.MenuLink>
            </S.MenuItem>
            <S.MenuItem>
              <S.MenuLink to="/login">
                Войти
              </S.MenuLink>
            </S.MenuItem>
          </S.MenuList>
        </S.NavMenu> : null}
        
        
      </S.MainNav>
    );
}