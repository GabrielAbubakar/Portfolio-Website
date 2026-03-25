import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string;
    colors: {
      background: string;
      headerText: string;
      primary: string;
      bodyText: string;
      thumbscrollThumb: string;
      thumbscrollHover: string;
      thumbscrollTrack: string;
      buttonText: string;
      buttonBack: string;
      // Including these to avoid potential lint/type errors if added
      buttonBackground?: string;
      buttonStroke?: string;
    };
  }
}
