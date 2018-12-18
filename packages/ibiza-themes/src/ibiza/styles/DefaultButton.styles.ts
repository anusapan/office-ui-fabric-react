import { borderRadius, outlineOffset } from './styleConstants';
import { getFocusStyle } from 'office-ui-fabric-react/lib/Styling';
import { FontSizes } from '../IbizaType';
import { IButtonStyles } from 'office-ui-fabric-react/lib/Button';
import { IExtendedTheme } from '../IExtendedTheme';

// TODO: "any" is used here to get around "is using xxx but cannot be named" TS error. Should be able to remove
//        this 'any' once we upgrade to TS3.1+
// tslint:disable-next-line:no-any
export const DefaultButtonStyles = (extendedTheme: IExtendedTheme): Partial<IButtonStyles> => {
  return {
    root: {
      backgroundColor: extendedTheme.theme.semanticColors.buttonBackground,
      border: `1px solid ${extendedTheme.theme.palette.themePrimary}`,
      color: extendedTheme.theme.palette.themePrimary,
      fontSize: FontSizes.size12,
      height: FontSizes.size24,
      ...getFocusStyle(extendedTheme.theme, 1)
    },
    rootHovered: {
      color: extendedTheme.theme.palette.themeSecondary,
      borderColor: extendedTheme.theme.palette.themeSecondary,
      backgroundColor: extendedTheme.theme.semanticColors.buttonBackgroundHovered
    },
    rootPressed: {
      color: extendedTheme.theme.palette.themeTertiary,
      borderColor: extendedTheme.theme.palette.themeTertiary,
      backgroundColor: extendedTheme.theme.semanticColors.buttonBackgroundPressed
    },
    rootChecked: {
      color: extendedTheme.theme.palette.themeTertiary,
      borderColor: extendedTheme.theme.palette.themeTertiary,
      backgroundColor: extendedTheme.theme.semanticColors.buttonBackgroundChecked
    },
    rootFocused: {
      selectors: {
        '.ms-Fabric--isFocusVisible &:focus::after': {
          borderColor: 'transparent',
          outline: 'none'
        }
      },
      outlineOffset: outlineOffset,
      outline: `${extendedTheme.semanticColors.buttonOutlineFocused} dotted 1px`
    },
    rootDisabled: {
      selectors: {
        '.ms-Fabric--isFocusVisible &:focus::after': {
          borderColor: 'transparent',
          outline: 'none'
        }
      },
      backgroundColor: extendedTheme.theme.semanticColors.buttonBackgroundDisabled,
      borderColor: extendedTheme.theme.semanticColors.buttonBorderDisabled,
      color: extendedTheme.theme.semanticColors.buttonTextDisabled
    },
    splitButtonMenuButton: {
      background: 'transparent',
      borderTopRightRadius: borderRadius,
      borderBottomRightRadius: borderRadius,
      border: `1px solid ${extendedTheme.theme.palette.neutralLighter}`,
      borderLeft: 'none'
    },
    splitButtonContainer: {
      selectors: {
        '.ms-Button--default': {
          borderRight: 'none',
          borderTopRightRadius: '0',
          borderBottomRightRadius: '0'
        },
        '.ms-Button--primary': {
          border: 'none',
          backgroundColor: extendedTheme.theme.palette.themePrimary
        },
        '.ms-Button--primary + .ms-Button': {
          backgroundColor: extendedTheme.theme.palette.themePrimary,
          border: 'none'
        },
        '.ms-Button.is-disabled': {
          backgroundColor: extendedTheme.theme.semanticColors.buttonBackgroundDisabled
        },
        '.ms-Button.is-disabled + .ms-Button': {
          backgroundColor: extendedTheme.theme.semanticColors.buttonBackgroundDisabled,
          border: 'none'
        }
      }
    }
  };
};
