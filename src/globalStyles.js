import { createGlobalStyle } from 'styled-components';
import { styles } from './styles';

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}

html {
  font-family: ${styles.font.main};
}

body {
  margin: 0;
  background-color: ${styles.color.primary};
}
`;

export default GlobalStyle;
