import { borderRadius, outlineOffset } from './styleConstants';
import { getFocusStyle } from 'office-ui-fabric-react/lib/Styling';
import { NeutralColors, DarkColors } from '../IbizaColors';
import { IButtonStyles } from 'office-ui-fabric-react/lib/Button';
import { IExtendedTheme } from '../IExtendedTheme';

// TODO: "any" is used here to get around "is using xxx but cannot be named" TS error. Should be able to remove
//        this 'any' once we upgrade to TS3.1+
// tslint:disable-next-line:no-any
export const DefaultButtonStyles = (extendedTheme: IExtendedTheme): Partial<IButtonStyles> => {
  return {
    root: {
      borderRadius: borderRadius,
      backgroundColor: NeutralColors.black,
      border: `1px solid ${DarkColors.themePrimary}`,
      color: DarkColors.themePrimary,
      fontSize: '12px',
      ...getFocusStyle(extendedTheme.theme, 1)
    },
    rootHovered: {
      selectors: {
        '.ms-Button--primary': {
          backgroundColor: extendedTheme.theme.palette.themeSecondary
        }
      },
      color: DarkColors.themeShade10,
      borderColor: DarkColors.themeShade10,
      backgroundColor: NeutralColors.gray105
    },
    rootPressed: {
      color: DarkColors.themeShade20,
      borderColor: DarkColors.themeShade20,
      backgroundColor: NeutralColors.gray105
    },
    rootChecked: {
      color: DarkColors.themeShade20,
      borderColor: DarkColors.themeShade20,
      backgroundColor: NeutralColors.gray105
    },
    rootFocused: {
      outlineOffset: outlineOffset,
      outline: `${DarkColors.themeShade25} dashed 1px`
    },
    rootDisabled: {
      backgroundColor: NeutralColors.gray20,
      borderColor: NeutralColors.gray20
    },
    splitButtonMenuButton: {
      background: 'transparent',
      borderTopRightRadius: borderRadius,
      borderBottomRightRadius: borderRadius,
      border: `1px solid ${NeutralColors.gray110}`,
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
          backgroundColor: NeutralColors.gray20
        },
        '.ms-Button.is-disabled + .ms-Button': {
          backgroundColor: NeutralColors.gray20,
          border: 'none'
        }
      }
    }
  };
};
