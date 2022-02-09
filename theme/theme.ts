const size = {
  small: 320,
  medium: 768,
  large: 1024,
  xlarge: 1440,
}

export default {
  devices: {
    sizes: {
      small: 320,
      medium: 768,
      large: 1024,
      xlarge: 1440,
    },
    mobile: `(max-width: ${size.medium - 1}px)`,
    tablet: `(min-width: ${size.medium}px) and 
    (max-width: ${size.large - 1}px)`,
    desktop: `(min-width: ${size.large}px)`,
  },

  colors: {
    primary: '#5ACDBA',
    secondary: '#FFB32E',
    yellow: '#FDA452',
    red: '#F24E1E',
    jetBlack: '#2D3436',
    anthracite: '#3C3C3C',
    gullGray: '#5F5F5F',
    perlGray: '#D4D4D4',
    whiteOnWhite: '#F5F5F5',
    white: '#FFFFFF',
    black: '#202121',
    orange: '#FFB32E',
    orangeOnWhite: '#FEBF51',
    redTomato: '#DB4437',
    logoBlue: '#5ACDBA',
    logoYellow: '#F5AF02',
    logoGreen: '#86B817',
    logoRed: '#E53238',
    anthracite60: 'rgba(60,60,60,0.6)',
    darkBlue: '#162A53',
    whiteOnBlue: '#FAFBFF',
    lightBlue: '#F7F9FA',
    lightGray: '#e7ebec',
  },

  fontFamilies: {
    primary: 'Inter, sans-serif',
    secondary: 'Roboto, sans-serif',
    arial: 'Arial',
  },
}
