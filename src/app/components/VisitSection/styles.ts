import { css } from "@linaria/core";
import { colors, fontFamily, spacing, borderRadius } from "@/app/tokens";

export const section = css`
  padding: ${spacing.xxxl} ${spacing.xl};
  max-width: 1920px;
  margin: 0 auto;
`;

export const sectionTitle = css`
  font-family: ${fontFamily.primary};
  font-weight: 900;
  font-size: clamp(24px, 3vw, 40px);
  line-height: 1.15;
  color: ${colors.text};
  margin-bottom: ${spacing.xl};
`;

export const cardGrid = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${spacing.xl};

  @media (max-width: 1023px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

export const visitCard = css`
  position: relative;
  aspect-ratio: 16 / 9;
  border-radius: ${borderRadius.sm};
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease;
`;

export const visitCardHover = css`
  &:hover {
    transform: scale(1.02);
  }
`;

export const visitCardImage = css`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const visitCardOverlay = css`
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, transparent 60%);
`;

export const visitCardBody = css`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: ${spacing.lg};
  color: ${colors.white};
`;

export const visitCardTitle = css`
  font-family: ${fontFamily.primary};
  font-weight: 700;
  font-size: 18px;
  line-height: 1.25;
  color: ${colors.white};
  margin-bottom: 4px;
`;

export const visitCardDesc = css`
  font-family: ${fontFamily.primary};
  font-weight: 400;
  font-size: 13px;
  line-height: 1.4;
  color: rgba(255, 255, 255, 0.8);
`;
