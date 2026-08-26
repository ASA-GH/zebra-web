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
  margin-bottom: ${spacing.lg};
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

  @media (max-width: 767px) {
    font-size: 12px;
  }
`;

// Tabs
export const tabList = css`
  display: flex;
  gap: 0;
  border-bottom: 2px solid ${colors.border};
  margin-bottom: ${spacing.xl};
`;

export const tabBtn = css`
  position: relative;
  font-family: ${fontFamily.primary};
  font-weight: 700;
  font-size: 16px;
  line-height: 1.3;
  color: ${colors.textLowlight};
  background: none;
  border: none;
  padding: 14px 24px;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  transition: color 0.2s ease;

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    right: 0;
    height: 2px;
    background: ${colors.primary};
    transform: scaleX(0);
    transition: transform 0.2s ease;
  }

  &:hover {
    color: ${colors.text};
  }

  &[data-active] {
    color: ${colors.text};

    &::after {
      transform: scaleX(1);
    }
  }

  @media (max-width: 767px) {
    padding: 12px 16px;
    font-size: 14px;
  }
`;

// Carousel wrapper inside highlights
export const carouselWrapper = css`
  position: relative;
`;

export const findMore = css`
  text-align: center;
  margin-top: ${spacing.xl};
`;

export const findMoreCta = css`
  display: inline-block;
  font-family: ${fontFamily.primary};
  font-weight: 700;
  font-size: 16px;
  line-height: 1.2;
  color: ${colors.black};
  background: ${colors.primary};
  padding: 14px 32px;
  border-radius: ${borderRadius.sm};
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  transition: background 0.2s ease;

  &:hover {
    background: ${colors.primaryHover};
  }
`;

// Stream cards (16:9)
export const streamGrid = css`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${spacing.md};

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: ${spacing.lg};
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(6, 1fr);
    gap: ${spacing.xl};
  }
`;

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
  font-size: 13px;
  line-height: 1.25;
  color: ${colors.white};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const streamCardMeta = css`
  font-family: ${fontFamily.primary};
  font-weight: 400;
  font-size: 11px;
  line-height: 1.4;
  color: rgba(255, 255, 255, 0.7);
  margin-top: 4px;
`;
