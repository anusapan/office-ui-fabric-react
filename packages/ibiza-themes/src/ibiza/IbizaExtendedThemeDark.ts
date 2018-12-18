import { createTheme, ITheme } from 'office-ui-fabric-react';
import { NeutralColors, DarkColors } from './IbizaColors';
import { IExtendedTheme } from './IExtendedTheme';

export class IbizaExtendedThemeDark implements IExtendedTheme {
  public readonly semanticColors = {
    errorBorder: DarkColors.errorBorder,
    errorText: DarkColors.errorText,
    buttonOutlineFocused: DarkColors.themeShade25
  };

  public readonly theme: ITheme;
  constructor() {
    this.theme = createTheme({
      palette: {
        themeDarker: DarkColors.themeTint30,
        themeDark: DarkColors.themeTint20,
        themeDarkAlt: DarkColors.themeTint10,
        themePrimary: DarkColors.themePrimary,
        themeSecondary: DarkColors.themeShade10,
        themeTertiary: DarkColors.themeShade20,
        themeLight: DarkColors.themeShade30,
        themeLighter: DarkColors.themeShade40,
        themeLighterAlt: DarkColors.themeShade50,

        neutralDark: NeutralColors.gray20,
        neutralPrimary: NeutralColors.white,
        neutralPrimaryAlt: NeutralColors.gray40,
        neutralSecondary: NeutralColors.gray50,
        neutralTertiary: NeutralColors.gray60,
        neutralTertiaryAlt: NeutralColors.gray70,
        neutralQuaternary: NeutralColors.gray80,
        neutralQuaternaryAlt: NeutralColors.gray90,
        neutralLight: NeutralColors.gray100,
        neutralLighter: NeutralColors.gray110,
        neutralLighterAlt: NeutralColors.gray120,

        black: NeutralColors.gray05,
        white: NeutralColors.white
      },
      semanticColors: {
        buttonBackground: NeutralColors.gray05,
        buttonBackgroundDisabled: NeutralColors.gray105,
        buttonBackgroundChecked: NeutralColors.gray100,
        buttonBackgroundHovered: NeutralColors.gray100,
        buttonBackgroundPressed: NeutralColors.gray100,
        buttonBackgroundCheckedHovered: NeutralColors.gray100,
        buttonTextDisabled: NeutralColors.gray65,

        buttonBorderDisabled: NeutralColors.gray105
      }
    });
  }
}

const ibizaExtendedThemeDark = new IbizaExtendedThemeDark();
export default ibizaExtendedThemeDark;
