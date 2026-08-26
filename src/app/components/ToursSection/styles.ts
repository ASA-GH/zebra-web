import { css } from "@linaria/core";
import { colors, fontFamily, spacing } from "@/app/tokens";

export const section = css`
  padding: ${spacing.xxxl} ${spacing.xl};
  max-width: 1920px;
  margin: 0 auto;
`;

export const sectionHeader = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${spacing.xl};
`;

export const sectionTitle = css`
  font-family: ${fontFamily.primary};
  font-weight: 900;
  font-size: clamp(24px, 3vw, 40px);
  line-height: 1.15;
  color: ${colors.text};
`;

export const sectionCta = css`
  font-family: ${fontFamily.primary};
  font-weight: 700;
  font-size: 14px;
  line-height: 1.2;
  color: ${colors.text};
  text-decoration: underline;
  text-underline-offset: 3px;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  transition: color 0.2s ease;

  &:hover {
    color: ${colors.primary};
  }
`;

export const carouselWrapper = css`
  position: relative;
`;

export const ctaBanner = css`
  margin-top: ${spacing.xxl};
  text-align: center;
`;

export const ctaBannerLink = css`
  display: inline-block;
  font-family: ${fontFamily.primary};
  font-weight: 700;
  font-size: 16px;
  line-height: 1.2;
  color: ${colors.black};
  background: ${colors.primary};
  padding: 14px 32px;
  border-radius: 4px;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  transition: background 0.2s ease;

  &:hover {
    background: ${colors.primaryHover};
  }
`;
