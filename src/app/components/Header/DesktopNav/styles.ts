import { css } from "@linaria/core";
import { colors, fontFamily, spacing, breakpoints, fontWeight } from "@/app/tokens";

export const desktopNav = css`
    display: flex;
    align-items: center;
    column-gap: 2.4rem;
    height: 100%;
    @media (max-width: ${breakpoints.md - 1}px) {
        padding: 0 ${spacing.lg};
`;

export const navLink = css`
    font-family: ${fontFamily.primary};
    font-weight: ${fontWeight.bold};
    //line-height: 1.6rem;
    color: ${colors.text};
    text-decoration: none;
    white-space: nowrap;
    text-transform: none;
    letter-spacing: normal;
    cursor: pointer;
    height: 100%;
    display: flex;
    align-items: center;
    position: relative;
    //padding: 3.8rem 0;

    &:hover {
        &::before {
            content: "";
            position: absolute;
            bottom: 0;
            left: 0;
            top: auto;
            width: 100%;
            height: 0.4rem;
            background-color: #000;
            transition-duration: 10s;
            transition-property: left, width;
        }
    }
`;
