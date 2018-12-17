import { ITheme } from 'office-ui-fabric-react';

export interface IExtendedTheme {
  semanticColors: {
    errorBorder: string;
    errorText: string;
    buttonOutlineFocused: string;
  };
  theme: ITheme;
}
