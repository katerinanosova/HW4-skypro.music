import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import * as S from "./AuthPage.styled";
import GlobalStyle from "../../GlobalStyles";
import { loginUser, registerUser } from "../../API/api-user";

export default function AuthPage({ isLoginMode }) {
    
    const [error, setError] = useState(null);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [isNewUserLoading, setIsNewUserLoading] = useState(false);
    const navigate = useNavigate();
  
    const handleLogin = async () => {
      if (email === '' || password === '') {
        setError('Укажите почту и пароль');
      } else {
        try {
          setIsNewUserLoading(true);
          const user = await loginUser({ email, password });
          setIsNewUserLoading(false);
          console.log(user);
        } catch (errorData) {
          const ed = JSON.parse(errorData.message);
          setIsNewUserLoading(false);
          if (ed.detail) {
            setError(ed.detail)
          }
          if (ed.password) {
            setError(ed.password.join(' '))
          } 
          if (ed.username) {
            setError(ed.username[0])
          }
          if (ed.email) {
            setError(ed.email[0])
          } 
        }
      }
    };

    
  
    const handleRegister = async () => {
      if (email === '' || password === '') {
        setError('Укажите почту/пароль');
      } else if (password !== repeatPassword) {
        setError('Пароли не совпадают');
      }
      else {
        try {
          setIsNewUserLoading(true);
          const user = await registerUser({ email, password, username: email });
          setIsNewUserLoading(false);
          console.log(user);
          navigate('/login');
          setEmail('');
          setPassword('');
          setRepeatPassword('');
        } catch (errorData) {
          const ed = JSON.parse(errorData.message)
          setIsNewUserLoading(false);
          if (ed.password) {
            setError(ed.password.join(' '))
          } 
          if (ed.username) {
            setError(ed.username[0])
          }
          if (ed.email) {
            setError(ed.email[0])
          }
        } 
      }
    };
  
    // Сбрасываем ошибку если пользователь меняет данные на форме или меняется режим формы
    useEffect(() => {
      setError(null);
    }, [isLoginMode, email, password, repeatPassword]);
  
    return (
        <div>
            <GlobalStyle />
            <S.PageContainer>
        <S.ModalForm>
          <Link to="/login">
            <S.ModalLogo>
              <S.ModalLogoImage src="/img/logo_modal.png" alt="logo" />
            </S.ModalLogo>
          </Link>
          {isLoginMode ? (
            <>
              <S.Inputs>
                <S.ModalInput
                  type="text"
                  name="login"
                  placeholder="Почта"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                />
                <S.ModalInput
                  type="password"
                  name="password"
                  placeholder="Пароль"
                  value={password}
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                />
              </S.Inputs>
              {error && <S.Error>{error}</S.Error>}
              <S.Buttons>
                <S.PrimaryButton disabled={isNewUserLoading} onClick={() => handleLogin({ email, password })}>
                  Войти
                </S.PrimaryButton >
                <Link to="/register">
                  <S.SecondaryButton disabled={isNewUserLoading}> Зарегистрироваться
                  </S.SecondaryButton>
                </Link>
              </S.Buttons>
            </>
          ) : (
            <>
              <S.Inputs>
                <S.ModalInput
                  type="text"
                  name="login"
                  placeholder="Почта"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                />
                <S.ModalInput
                  type="password"
                  name="password"
                  placeholder="Пароль"
                  value={password}
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                />
                <S.ModalInput
                  type="password"
                  name="repeat-password"
                  placeholder="Повторите пароль"
                  value={repeatPassword}
                  onChange={(event) => {
                    setRepeatPassword(event.target.value);
                  }}
                />
              </S.Inputs>
              {error && <S.Error>{error}</S.Error>}
              <S.Buttons>
                <S.PrimaryButton disabled={isNewUserLoading} onClick={handleRegister}>
                  Зарегистрироваться
                </S.PrimaryButton>
              </S.Buttons>
            </>
          )}
        </S.ModalForm>
      </S.PageContainer>
        </div>
    );
  }