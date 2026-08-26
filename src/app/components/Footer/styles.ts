import { css } from "@linaria/core";
import { colors, fontFamily, spacing } from "@/app/tokens";

export const footer = css`
  background: ${colors.footer};
  color: ${colors.textOnBlack};
  padding: ${spacing.xxxl} ${spacing.xl} ${spacing.xl};
`;

export const footerInner = css`
  max-width: 1920px;
  margin: 0 auto;
`;

export const ack = css`
  font-family: ${fontFamily.primary};
  font-weight: 400;
  font-size: 13px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.7);
  max-width: 700px;
  margin-bottom: ${spacing.xxl};
`;

export const linksGrid = css`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: ${spacing.xl};
  margin-bottom: ${spacing.xxl};
`;

export const linkCol = css`
  display: flex;
  flex-direction: column;
  gap: ${spacing.sm};
`;

export const linkColTitle = css`
  font-family: ${fontFamily.primary};
  font-weight: 700;
  font-size: 13px;
  line-height: 1.2;
  color: ${colors.white};
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-bottom: ${spacing.sm};
`;

export const link = css`
  font-family: ${fontFamily.primary};
  font-weight: 400;
  font-size: 13px;
  line-height: 1.4;
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: ${colors.white};
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
  color: ${colors.white};
  opacity: 0.7;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 1;
  }
`;

export const bottom = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: ${spacing.md};
  padding-top: ${spacing.lg};
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

export const bottomLinks = css`
  display: flex;
  gap: ${spacing.lg};
  flex-wrap: wrap;
`;

export const bottomLink = css`
  font-family: ${fontFamily.primary};
  font-weight: 400;
  font-size: 12px;
  line-height: 1.4;
  color: rgba(255, 255, 255, 0.5);
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: rgba(255, 255, 255, 0.8);
  }
`;

export const copyright = css`
  font-family: ${fontFamily.primary};
  font-weight: 400;
  font-size: 12px;
  line-height: 1.4;
  color: rgba(255, 255, 255, 0.5);
`;
