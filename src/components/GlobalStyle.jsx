import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}

html {
    font-family: 'Poppins', sans-serif;
}

body {
  margin: 0;
}

img {
  max-width: 100%;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin-top: 0;
}

a {
  text-decoration: none;
  color: inherit;
}

/* common rules */


input,
textarea,
select {
  font-size: 16px;
  padding: 0.3em 0.8em;
  border-radius: 4px;
  border: 1px solid #777;
  display: block;
  width: 300px;
}
textarea {
  min-height: 5rem;
  min-width: 300px;
  resize: vertical;
}


/* utility classes */

.flex {
  display: flex;
}

.between {
  justify-content: space-between;
  align-items: center;
}

.tac {
  text-align: center;
}

`;

export default GlobalStyle;
