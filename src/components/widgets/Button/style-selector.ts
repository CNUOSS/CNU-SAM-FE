import { css, SerializedStyles } from '@emotion/react';
import { ButtonType } from '.';
import { theme } from '../../../style/theme';

export const backgroundSelector: { [button in ButtonType]: SerializedStyles } = {
  secondary: css`
    background-color: ${theme.colors.secondary};
  `,
  warning: css`
    background-color: ${theme.colors.warning};
  `,
};
