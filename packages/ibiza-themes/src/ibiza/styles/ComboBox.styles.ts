import { borderRadius } from './styleConstants';
import { Depths } from '../IbizaDepths';
import { NeutralColors, SharedColors } from '../IbizaColors';
import { IComboBoxStyles } from 'office-ui-fabric-react/lib/ComboBox';

export const ComboBoxStyles: Partial<IComboBoxStyles> = {
  root: {
    borderRadius: borderRadius, // the bound input box
    borderColor: NeutralColors.gray80,
    paddingLeft: 8
  },
  rootHovered: {
    borderColor: NeutralColors.gray160,
    selectors: {
      '.ms-ComboBox-Input': {
        color: NeutralColors.gray190
      }
    }
  },
  rootError: {
    borderColor: SharedColors.red10 // current structure of ComboBox does not allow to change the hover/focus color when has error
  },
  callout: {
    borderRadius: borderRadius,
    border: 'none',
    boxShadow: Depths.depth8,
    selectors: {
      '.ms-Callout-main': { borderRadius: borderRadius }
    }
  },
  header: {
    padding: '0 8px'
  },
  optionsContainer: {
    selectors: {
      '.ms-ComboBox-option': {
        paddingLeft: 8,
        paddingRight: 8,
        selectors: {
          ':hover:active': {
            backgroundColor: NeutralColors.gray30
          }
        }
      },
      '.is-checked': {
        backgroundColor: 'transparent',
        selectors: {
          ':hover': {
            backgroundColor: NeutralColors.gray20
          }
        }
      },
      '.ms-Checkbox': {
        selectors: {
          ':hover': {
            backgroundColor: NeutralColors.gray20
          }
        }
      }
    }
  }
};
