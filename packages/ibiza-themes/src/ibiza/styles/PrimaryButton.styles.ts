import { IButtonStyles } from 'office-ui-fabric-react/lib/Button';
import { IExtendedTheme } from '../IExtendedTheme';

export const PrimaryButtonStyles = (extendedTheme: IExtendedTheme): Partial<IButtonStyles> => {
  return {
    root: {
      border: '1px solid',
      borderColor: extendedTheme.theme.palette.themePrimary,
      backgroundColor: extendedTheme.theme.palette.themePrimary,
      color: extendedTheme.theme.palette.black,
      padding: '0 20px'
    },
    rootHovered: {
      backgroundColor: extendedTheme.theme.palette.themeSecondary,
      borderColor: extendedTheme.theme.palette.themeSecondary,
      color: extendedTheme.theme.palette.black
    },
    rootPressed: {
      backgroundColor: extendedTheme.theme.palette.themeTertiary,
      borderColor: extendedTheme.theme.palette.themeTertiary,
      color: extendedTheme.theme.palette.black
    },
    rootChecked: {
      backgroundColor: extendedTheme.theme.palette.themeTertiary,
      borderColor: extendedTheme.theme.palette.themeTertiary,
      color: extendedTheme.theme.palette.black
    },
    rootFocused: {
      color: extendedTheme.theme.palette.black,
      outline: `${extendedTheme.theme.palette.black} dotted 1px`
    }
  };
};
