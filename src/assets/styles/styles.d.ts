import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string,
      fontColor: string,
      title: string,
      primary: {
        light: string,
        main: string,
        dark: string,
        darkHover: string
      },
    }
  }
}
