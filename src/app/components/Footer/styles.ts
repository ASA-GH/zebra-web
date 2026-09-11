import { css } from "@linaria/core";
import { colors, fontFamily, spacing } from "@/app/tokens";

export const footer = css`
  background: ${colors.footer};
  padding: ${spacing.xxxl} ${spacing.xl} ${spacing.xl};
`;

export const footerInner = css`
  max-width: 1920px;
  margin: 0 auto;
`;

export const footerNav = css`
  display: flex;
  flex-wrap: wrap;
  gap: ${spacing.md} ${spacing.xl};
  margin-bottom: ${spacing.xl};
`;

export const link = css`
  font-family: ${fontFamily.primary};
  font-weight: 400;
  font-size: 14px;
  line-height: 1.4;
  text-decoration: underline;
  text-underline-offset: 3px;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.8;
  }
`;

export const newsletterSection = css`
  margin-bottom: ${spacing.lg};
`;

export const newsletterLink = css`
  font-family: ${fontFamily.primary};
  font-weight: 700;
  font-size: 16px;
  line-height: 1.2;
  text-decoration: underline;
  text-underline-offset: 3px;

  &:hover {
    opacity: 0.8;
  }
`;

export const social = css`
  display: flex;
  gap: ${spacing.md};
  margin-bottom: ${spacing.xxl};
`;

export const socialLink = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  opacity: 0.7;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 1;
  }
`;

export const socialIcon = css`
  width: 24px;
  height: 24px;
`;

export const address = css`
  font-family: ${fontFamily.primary};
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.7);
  max-width: 400px;
  margin-bottom: ${spacing.xxl};
`;

export const phone = css`
  font-family: ${fontFamily.primary};
  font-weight: 700;
  font-size: 16px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const bottomNav = css`
  display: flex;
  gap: ${spacing.lg};
  padding-top: ${spacing.lg};
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

export const bottomLink = css`
  font-family: ${fontFamily.primary};
  font-weight: 400;
  font-size: 14px;
  line-height: 1.4;
  color: rgba(255, 255, 255, 0.5);
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: rgba(255, 255, 255, 0.8);
  }
`;
