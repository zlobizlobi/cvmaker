import { css } from 'styled-components';

interface IBreakPoints {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  xxl: number;
}

export const breakpoints: IBreakPoints = {
  xs: 320,
  sm: 480,
  md: 600,
  lg: 801,
  xl: 1025,
  xxl: 1450,
};

type BreakpointKeys = keyof IBreakPoints;
type Media = { [key in BreakpointKeys]: (css: string) => string };

export const media = Object.entries(breakpoints).reduce((acc, [label, size]: [string, number]) => {
  return {
    ...acc,
    [label]: (breakpointCss: string) => css`
      @media (min-width: ${size}px) {
        ${breakpointCss}
      }
    `,
  };
}, {}) as Media;
