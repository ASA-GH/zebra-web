import { css } from "@linaria/core";
import { colors, fontFamily, borderRadius, spacing } from "@/app/tokens";

export const card = css`
  position: relative;
  aspect-ratio: 1 / 1;
  border-radius: ${borderRadius.sm};
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
`;

export const cardImage = css`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
`;

export const cardOverlay = css`
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.85) 0%, transparent 60%);
  transition: opacity 0.3s ease;
`;

export const cardHover = css`
  &:hover {
    transform: scale(1.02);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);

    ${cardImage} {
      transform: scale(1.05);
    }

    ${cardOverlay} {
      background: linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.2) 70%);
    }
  }
`;

export const cardBody = css`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: ${spacing.lg};
  color: ${colors.white};
`;

export const cardCategory = css`
  display: inline-block;
  font-family: ${fontFamily.primary};
  font-weight: 700;
  font-size: 10px;
  line-height: 1.2;
  color: ${colors.black};
  background: ${colors.primary};
  padding: 4px 8px;
  border-radius: 2px;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-bottom: ${spacing.sm};
`;

export const cardTitle = css`
  font-family: ${fontFamily.primary};
  font-weight: 700;
  font-size: 15px;
  line-height: 1.25;
  color: ${colors.white};
  margin-bottom: 4px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const cardDates = css`
  font-family: ${fontFamily.primary};
  font-weight: 400;
  font-size: 12px;
  line-height: 1.4;
  color: rgba(255, 255, 255, 0.75);
`;

export const cardCta = css`
  display: inline-block;
  margin-top: ${spacing.sm};
  font-family: ${fontFamily.primary};
  font-weight: 700;
  font-size: 12px;
  line-height: 1.2;
  color: ${colors.primary};
  text-transform: uppercase;
  letter-spacing: 0.04em;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: ${colors.primaryHover};
  }
`;
