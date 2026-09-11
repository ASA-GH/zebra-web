import { css } from "@linaria/core";
import { colors, zIndex, breakpoints } from "@/app/tokens";

export const header = css`
    position: relative;
    z-index: ${zIndex.header};
`;

export const nav = css`
    height: 96px;
    width: 100%;
    background-color: ${colors.white};
`;
export const container = css`
    display: flex;
    align-items: center;
    column-gap: 4.6rem;
    height: 100%;
    position: relative;
`;

export const logo = css`
    display: flex;
    align-items: center;
    text-decoration: none;
    flex-shrink: 0;
`;

export const logoSvg = css`
    width: 100%;
    max-width: 75px;
    min-width: 60px;
    height: auto;
    fill: ${colors.text};
    @media (max-width: ${breakpoints.md - 1}px) {
        width: 100px;
    }
`;
