import { css } from "@linaria/core";
import { colors, fontFamily, zIndex, spacing } from "@/app/tokens";

export const mobileMenu = css`
    position: fixed;
    top: 97px;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: ${zIndex.mobileMenu};
    background: ${colors.black};
    padding: ${spacing.xl};
    overflow-y: auto;
    transform: translateX(100%);
    transition: transform 0.3s ease;

    &.open {
        transform: translateX(0);
    }
`;

export const mobileNav = css`
    display: flex;
    flex-direction: column;
    gap: ${spacing.md};
    padding-top: ${spacing.xl};
`;

export const mobileNavLink = css`
    font-family: ${fontFamily.primary};
    font-weight: 700;
    font-size: 20px;
    line-height: 1.3;
    color: ${colors.white};
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    padding: ${spacing.sm} 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    transition: color 0.2s ease;

    &:hover {
        color: ${colors.primary};
    }
`;

