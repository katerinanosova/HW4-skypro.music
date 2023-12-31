import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

*::before,
*::after {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

a,
a:visited {
  text-decoration: none;
  font-family: "StratosSkyeng", sans-serif;
  cursor: pointer;
}

ul li {
  list-style: none;
}

button {
  cursor: pointer;
}

@font-face {
  font-family: 'StratosSkyeng';
  src: local("StratosSkyeng"), local("StratosSkyeng"),
      url('/fonts/stratosskyengweb-regular.woff2') format('woff2'), /* Super Modern Browsers */
      url('/fonts/stratosskyengweb-regular.woff') format('woff'); /* Pretty Modern Browsers */
  font-weight: 400;
  font-style: normal;
}

html,
body {
  width: 100%;
  height: 100%;
  font-family: "StratosSkyeng", sans-serif;
  color: #ffffff;
}
`
export default GlobalStyle;

