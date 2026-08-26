import { css } from "@linaria/core";
import { colors, fontFamily, spacing, borderRadius } from "@/app/tokens";

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

// Stream card 16:9
export const streamCard = css`
  position: relative;
  aspect-ratio: 16 / 9;
  border-radius: ${borderRadius.sm};
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease;
`;

export const streamCardHover = css`
  &:hover {
    transform: scale(1.02);
  }
`;

export const streamCardImage = css`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const streamCardOverlay = css`
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, transparent 60%);
`;

export const streamCardBody = css`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: ${spacing.md};
  color: ${colors.white};
`;

export const streamCardTitle = css`
  font-family: ${fontFamily.primary};
  font-weight: 700;
  font-size: 14px;
  line-height: 1.25;
  color: ${colors.white};
`;

export const streamCardMeta = css`
  font-family: ${fontFamily.primary};
  font-weight: 400;
  font-size: 11px;
  line-height: 1.4;
  color: rgba(255, 255, 255, 0.7);
  margin-top: 4px;
`;
