import { createGlobalStyle } from 'styled-components';

import RobotoLightWoff from './roboto-v27-latin-300.woff';
import RobotoLightWoff2 from './roboto-v27-latin-300.woff2';

import RobotoRegularWoff from './roboto-v27-latin-900.woff';
import RobotoRegularWoff2 from './roboto-v27-latin-900.woff2';

import RobotoMediumWoff from './roboto-v27-latin-regular.woff';
import RobotoMediumWoff2 from './roboto-v27-latin-regular.woff2';

export default createGlobalStyle`
    @font-face {
        font-family: 'Roboto Light';
        src: url(${RobotoLightWoff}) format('woff'),
       		 url(${RobotoLightWoff2}) format('woff2');
       	font-weight: 300;
    }
    @font-face {
        font-family: 'Roboto Regular';
        src: url(${RobotoRegularWoff}) format('woff'),
       		 url(${RobotoRegularWoff2}) format('woff2');
    }
    @font-face {
        font-family: 'Roboto Medium';
        src: url(${RobotoMediumWoff}) format('woff'),
       		 url(${RobotoMediumWoff2}) format('woff2');
    }
`;