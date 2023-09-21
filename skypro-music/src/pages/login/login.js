import GlobalStyle from '../../GlobalStyles';
import * as S from './login.styled';

export default function Login() {
    
    // const userLogin = () => window.localStorage.setItem('user', 'gf');
    
    return (
        <div>
            <GlobalStyle />
            <S.WrapperLogin>
                <S.ContainerEnter>
                    <S.ModalBLock>
                    <S.ModalFormLogin action="#">
                        <a href="../">
                            <S.ModalLogo>
                                <S.ModalLogoImg src="../img/logo_modal.png" alt="logo" />
                            </S.ModalLogo>
                        </a>
                        <S.ModalInputLogin type="text" name="login" placeholder="Почта" />
                        <S.ModalInput type="password" name="password" placeholder="Пароль" />
                        <S.ModalBtnEnter type="button">
                            <S.ModalBtnEnterA to="/">Войти</S.ModalBtnEnterA>
                        </S.ModalBtnEnter>
                        <S.ModalBtnSignup type="button">
                            <S.ModalBtnSignupA to="/registration">Зарегистрироваться</S.ModalBtnSignupA>
                        </S.ModalBtnSignup>
                    </S.ModalFormLogin>
                    </S.ModalBLock>
                </S.ContainerEnter>
            </S.WrapperLogin>
        </div>
    )
}