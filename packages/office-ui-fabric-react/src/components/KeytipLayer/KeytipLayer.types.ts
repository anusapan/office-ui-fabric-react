import * as React from 'react';
import { IRefObject, IStyleFunctionOrObject } from '../../Utilities';
import { IStyle } from '../../Styling';
import { IKeytipTransitionKey } from '../../utilities/keytips/IKeytipTransitionKey';

export interface IKeytipLayer {}

export interface IKeytipLayerProps extends React.ClassAttributes<IKeytipLayer> {
  /**
   * Optional callback to access the KeytipLayer component. Use this instead of ref for accessing
   * the public methods and properties of the component.
   */
  componentRef?: IRefObject<IKeytipLayer>;

  /**
   * String to put inside the layer to be used for the aria-describedby for the component with the keytip
   * Should be one of the starting sequences
   */
  content: string;

  /**
   * List of key sequences that will start keytips mode
   */
  keytipStartSequences?: IKeytipTransitionKey[];

  /**
   * List of key sequences that execute the return functionality in keytips (going back to the previous level of keytips)
   */
  keytipReturnSequences?: IKeytipTransitionKey[];

  /**
   * List of key sequences that will exit keytips mode
   */
  keytipExitSequences?: IKeytipTransitionKey[];

  /**
   * Callback function triggered when keytip mode is exited.
   * ev is the Mouse or Keyboard Event that triggered the exit, if any.
   */
  onExitKeytipMode?: (ev?: React.KeyboardEvent<HTMLElement> | React.MouseEvent<HTMLElement>) => void;

  /**
   * Callback function triggered when keytip mode is entered
   */
  onEnterKeytipMode?: () => void;

  /**
   * (Optional) Call to provide customized styling.
   */
  styles?: IStyleFunctionOrObject<IKeytipLayerStyleProps, IKeytipLayerStyles>;
}

export interface IKeytipLayerStyles {
  innerContent: IStyle;
}

export interface IKeytipLayerStyleProps {}
