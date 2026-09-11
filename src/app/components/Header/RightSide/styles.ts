import { css } from "@linaria/core";
import { colors, breakpoints } from "@/app/tokens";

export const searchBtn = css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 27px;
    color: ${colors.text};
    transition: color 0.2s ease;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;

    &:hover {
        color: ${colors.primary};
    }
    @media (max-width: ${breakpoints.md - 1}px) {
            display: none;
    }
`;

export const accountBtn = css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 27px;
    color: ${colors.text};
    transition: color 0.2s ease;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;

    &:hover {
        color: ${colors.primary};
    }
`;

export const cartLink = css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 27px;
    color: ${colors.text};
    transition: color 0.2s ease;

    &:hover {
        color: ${colors.primary};
    }
`;

export const rightSide = css`
    display: flex;
    align-items: center;
    column-gap: 2.4rem;
    justify-content: flex-end;
    width: 100%;
`;

export const mobileToggle = css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 22px;
    height: 22px;
    color: ${colors.text};
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    position: relative;

    & .mobileToggle__icon {
        display: flex;
        align-items: center;
        justify-content: center;
        transition: opacity 0.2s ease;
    }

    & .mobileToggle--close {
        position: absolute;
        opacity: 0;
    }

    // When menu is open: show close, hide burger
    &[aria-expanded="true"] .mobileToggle--open {
        opacity: 0;
    }

    &[aria-expanded="true"] .mobileToggle--close {
        opacity: 1;
    }
`;
