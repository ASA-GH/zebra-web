import { css } from "@linaria/core";
import { breakpoints, colors, fontWeight } from "@/app/tokens";

export const section = css`
  margin: 0 auto;
`;

export const sectionTitle = css`
    font-size: 2.8rem;
    line-height: 1.25;
    margin-bottom: 3.2rem;
    font-weight: ${fontWeight.black};
    color: ${colors.text};
    text-align: center;
    padding: 0 1.6rem;
    @media (min-width: ${breakpoints.md}) {
        font-size: 3.2rem;
        max-width: 83.3333%;
    }
`;

export const logoBlock = css`
    && {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0;
        margin: 0 auto 3.2rem;
    }
`;

export const logoList = css`
  display: flex;
    flex-wrap: wrap;
  align-items: center;
  justify-items: center;
    padding: 0 1.6rem;
  @media (min-width: ${breakpoints.md}) {
      max-width: 83.3333%;
  }
`;

export const logoItem = css`
    height: auto;
    width: 50%;
    padding: 1.6rem;
    @media (max-width: ${breakpoints.sm}) {
        padding: 0.2rem;
    }
    @media (min-width: ${breakpoints.md}) {
        width: 25%;
    }
`;

export const logoImg = css`
  width: 100%;
  height: auto;
  aspect-ratio: 16 / 9;
`;

export const partnersBlock = css`
    && {
        margin: 0 auto 4rem;
    }
`;

export const partners = css`
    line-height: 1.5;
    margin: 0;
    text-align: center;
`;

export const partnersLink = css`
    font-weight: ${fontWeight.bold};
    line-height: 1.5;
    padding: 0 2px;
    text-decoration: underline;

    &:hover {
      background-color: ${colors.findMoreHover};
    }
`;
