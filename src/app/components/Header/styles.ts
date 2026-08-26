import { css } from "@linaria/core";
import { colors, fontFamily, zIndex, spacing } from "@/app/tokens";

export const header = css`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: ${zIndex.header};
  background: ${colors.black};
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

export const headerInner = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 72px;
  padding: 0 ${spacing.xl};
  max-width: 1920px;
  margin: 0 auto;
`;

export const logo = css`
  display: flex;
  flex-direction: column;
  color: ${colors.white};
  text-decoration: none;
  white-space: nowrap;
`;

export const logoBrand = css`
  font-family: ${fontFamily.primary};
  font-weight: 900;
  font-size: 18px;
  line-height: 1.1;
  letter-spacing: 0.02em;
  text-transform: uppercase;
`;

export const logoTagline = css`
  font-family: ${fontFamily.primary};
  font-weight: 400;
  font-size: 11px;
  line-height: 1.2;
  color: rgba(255, 255, 255, 0.7);
  letter-spacing: 0.04em;
`;

export const nav = css`
  display: flex;
  align-items: center;
  gap: ${spacing.xl};
`;

export const navLink = css`
  font-family: ${fontFamily.primary};
  font-weight: 700;
  font-size: 14px;
  line-height: 1.2;
  color: ${colors.white};
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  transition: color 0.2s ease;

  &:hover {
    color: ${colors.primary};
  }
`;

export const navAction = css`
  font-family: ${fontFamily.primary};
  font-weight: 700;
  font-size: 14px;
  line-height: 1.2;
  color: ${colors.black};
  background: ${colors.primary};
  padding: 10px 24px;
  border-radius: 4px;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  transition: background 0.2s ease, color 0.2s ease;

  &:hover {
    background: ${colors.primaryHover};
    color: ${colors.black};
  }
`;

export const searchBtn = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  color: ${colors.white};
  transition: color 0.2s ease;

  &:hover {
    color: ${colors.primary};
  }
`;

export const mobileToggle = css`
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  gap: 5px;
  color: ${colors.white};
`;

export const hamburgerLine = css`
  display: block;
  width: 24px;
  height: 2px;
  background: ${colors.white};
  transition: all 0.3s ease;
`;

// Mobile menu
export const mobileMenu = css`
  position: fixed;
  top: 72px;
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

export const mobileAction = css`
  display: inline-block;
  margin-top: ${spacing.lg};
  font-family: ${fontFamily.primary};
  font-weight: 700;
  font-size: 18px;
  line-height: 1.3;
  color: ${colors.black};
  background: ${colors.primary};
  padding: 14px 32px;
  border-radius: 4px;
  text-decoration: none;
  text-transform: uppercase;
  text-align: center;
  transition: background 0.2s ease;

  &:hover {
    background: ${colors.primaryHover};
  }
`;

export const mobileClose = css`
  position: absolute;
  top: ${spacing.md};
  right: ${spacing.xl};
  width: 40px;
  height: 40px;
  color: ${colors.white};
`;

// Responsive
const sm = 576;
const md = 768;

export const responsive = css`
  @media (max-width: ${md - 1}px) {
    ${headerInner} {
      height: 60px;
      padding: 0 ${spacing.lg};
    }

    ${nav} {
      display: none;
    }

    ${mobileToggle} {
      display: flex;
    }

    ${logoBrand} {
      font-size: 16px;
    }

    ${logoTagline} {
      font-size: 10px;
    }
  }

  @media (max-width: ${sm - 1}px) {
    ${headerInner} {
      height: 56px;
      padding: 0 ${spacing.md};
    }
  }
`;
