import { css } from "@linaria/core";
import { colors, fontFamily, spacing } from "@/app/tokens";

export const section = css`
  padding: ${spacing.xxxl} ${spacing.xl};
  max-width: 1920px;
  margin: 0 auto;
`;

export const sectionInner = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const sectionTitle = css`
  font-family: ${fontFamily.primary};
  font-weight: 900;
  font-size: clamp(20px, 3vw, 32px);
  line-height: 1.15;
  color: ${colors.text};
  text-align: center;
  margin-bottom: ${spacing.xl};
`;

export const logoGrid = css`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${spacing.xl};
  align-items: center;
  justify-items: center;
  width: 100%;
  margin-bottom: ${spacing.xxl};

  @media (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
    gap: ${spacing.lg};
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const logoItem = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const logoImg = css`
  max-width: 160px;
  height: auto;
  transition: opacity 0.2s ease;

  @media (max-width: 767px) {
    max-width: 120px;
  }
`;

export const logoLink = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  &:hover ${logoImg} {
    opacity: 0.7;
  }
`;

export const partnersText = css`
  font-family: ${fontFamily.primary};
  font-weight: 400;
  font-size: 14px;
  line-height: 1.6;
  color: ${colors.textLowlight};
  text-align: center;
`;

export const partnersLink = css`
  font-family: ${fontFamily.primary};
  font-weight: 700;
  color: ${colors.text};
  text-decoration: underline;
  text-underline-offset: 3px;

  &:hover {
    color: ${colors.primary};
  }
`;
