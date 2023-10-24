const Breakpoint = {
  XS: '320px',
  S: '498px',
  M: '768px',
  L: '1024px',
  XL: '1280px',
};

export const MediaQuery = {
  XS_AND_DOWN: `@media screen and (max-width: ${Breakpoint.XS})`,
  S_AND_DOWN: `@media screen and (max-width: ${Breakpoint.S})`,
  M_AND_DOWN: `@media screen and (max-width: ${Breakpoint.M})`,
  L_AND_DOWN: `@media screen and (max-width: ${Breakpoint.L})`,
  XL_AND_DOWN: `@media screen and (max-width: ${Breakpoint.XL})`,

  XS_AND_UP: `@media screen and (min-width: ${Breakpoint.XS})`,
  S_AND_UP: `@media screen and (min-width: ${Breakpoint.S})`,
  M_AND_UP: `@media screen and (min-width: ${Breakpoint.M})`,
  L_AND_UP: `@media screen and (min-width: ${Breakpoint.L})`,
  XL_AND_UP: `@media screen and (min-width: ${Breakpoint.XL})`,

  S_TO_M: `@media only screen and (min-width: ${Breakpoint.S}) and (max-width: ${Breakpoint.M})`,
  M_TO_L: `@media only screen and (min-width: ${Breakpoint.M}) and (max-width: ${Breakpoint.L})`,
  M_TO_XL: `@media only screen and (min-width: ${Breakpoint.M}) and (max-width: ${Breakpoint.XL})`,
};

export const Spacer = {
  XXXL: '32px',
  XXL: '24px',
  XL: '20px',
  L: '16px',
  M: '12px',
  S: '8px',
  XS: '4px',
  NONE: '0px',
};

export const Indexes = {
  COOKIE: 10,
  MODAL: 3,
  FIXED: 2,
  ABSOLUTE: 1,
  DEFAULT: 0,
};