import { DarkColors, NeutralColors } from '../IbizaColors';
import { IButtonStyles } from 'office-ui-fabric-react/lib/Button';

export const PrimaryButtonStyles: Partial<IButtonStyles> = {
  root: {
    border: '1px solid',
    borderColor: DarkColors.themePrimary,
    backgroundColor: DarkColors.themePrimary,
    color: NeutralColors.black,
    padding: '0 20px'
  },
  rootHovered: {
    backgroundColor: DarkColors.themeShade10,
    borderColor: DarkColors.themeShade10,
    color: NeutralColors.black
  },
  rootPressed: {
    backgroundColor: DarkColors.themeShade20,
    borderColor: DarkColors.themeShade20,
    color: NeutralColors.black
  },
  rootChecked: {
    backgroundColor: DarkColors.themeShade20,
    borderColor: DarkColors.themeShade20,
    color: NeutralColors.black
  },
  rootFocused: {
    color: NeutralColors.black
  }
};
