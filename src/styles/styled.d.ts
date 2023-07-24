import 'styled-components';

interface IDefaultTheme {
    colors: {
        white: string;
        black: string;
        grey: string;
    }
}

declare module 'styled-components' {
    export interface DefaultTheme extends IDefaultTheme { }
}