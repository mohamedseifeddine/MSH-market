import { createGlobalStyle } from 'styled-components'
import themeGet from '@styled-system/theme-get'
import reset from './reset'

export default createGlobalStyle`
  ${reset};

  @font-face {
    font-family: "Arial";
    src: url("static/fonts/arial.ttf");
    font-style: normal;
    font-weight: 400;
  }

  :root {
    position: relative;
    background-color: white;

    // Root font size
    font-size: 10px;

    --fz-xxs: 1.1rem;
    --fz-xs: 1.3rem;
    --fz-sm: 1.4rem;
    --fz-md: 1.6rem;
    --fz-lg: 1.8rem;
    --fz-xl: 2.0rem;
    --fz-xxl: 2.2rem;
    --fz-xxxl: 2.4rem;
    --fz-four: 2.8rem;
    --fz-heading: 3.7rem;
    --fz-four-viz: 12.5rem;

    @media (max-width: ${themeGet('devices.sizes.medium')}px) {
      font-size: 8px;
      --fz-four-viz: 6rem;
    }
    @media (max-width: ${themeGet('devices.sizes.small')}px) {
      font-size: 7px;
      --fz-four-viz: 3rem;
    }
    
  }
  #nprogress .bar {
    position: fixed;
    z-index: 9999999;
    top: 0;
    left: 0;
    width: 100%;
    height: 0.32rem;
    background: ${themeGet('colors.primary')};
  }
`
