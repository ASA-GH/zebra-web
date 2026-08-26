import { css } from "@linaria/core";
import { spacing } from "@/app/tokens";

export const carouselRoot = css`
  width: 100%;
  overflow: hidden;
`;

export const carouselViewport = css`
  overflow: hidden;
`;

export const carouselContainer = css`
  display: flex;
  touch-action: pan-y pinch-zoom;
`;

export const carouselBtn = css`
  position: absolute;
  top: 50%;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  border: none;
  cursor: pointer;
  transform: translateY(-50%);
  transition: background 0.2s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.7);
  }

  &:focus-visible {
    outline: 2px solid #007fff;
    outline-offset: 2px;
  }
`;

export const carouselBtnPrev = css`
  left: ${spacing.md};
`;

export const carouselBtnNext = css`
  right: ${spacing.md};
`;

export const carouselDots = css`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: ${spacing.md};
`;

export const carouselDot = css`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: none;
  padding: 0;
  background: #c6c6c6;
  cursor: pointer;
  transition: background 0.2s ease;

  &[data-selected] {
    background: #000;
  }
`;

// Card grid inside carousel
export const carouselTrack = css`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${spacing.md};

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: ${spacing.lg};
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
    gap: ${spacing.xl};
  }

  @media (min-width: 1280px) {
    grid-template-columns: repeat(5, 1fr);
    gap: ${spacing.xxl};
  }
`;

// Single carousel slide (for embla, not grid)
export const carouselSlide = css`
  min-width: 0;
  flex: 0 0 calc(100% / 2);

  @media (min-width: 768px) {
    flex: 0 0 calc(100% / 3);
  }

  @media (min-width: 1024px) {
    flex: 0 0 calc(100% / 4);
  }

  @media (min-width: 1280px) {
    flex: 0 0 calc(100% / 5);
  }
`;
