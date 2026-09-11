import { css } from "@linaria/core";
import { colors, fontFamily, spacing, borderRadius } from "@/app/tokens";

// Card container — flex column (content top, image bottom)
export const card = css`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: ${borderRadius.sm};
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  }
`;

// Content area
export const cardContent = css`
  flex: 1;
  padding: ${spacing.lg};
  display: flex;
  flex-direction: column;
`;

// Image area
export const cardImage = css`
  position: relative;
  flex-shrink: 0;
  aspect-ratio: 1 / 1;
  overflow: hidden;

  &:hover {
    /* subtle image zoom on hover */
    & img {
      transform: scale(1.05);
    }
  }
`;

// Category — plain text, no badge
export const cardCategory = css`
  font-family: ${fontFamily.primary};
  font-weight: 400;
  font-size: 13px;
  line-height: 1.4;
  color: ${colors.textLowlight};
  margin-bottom: ${spacing.sm};
`;

// Heading
export const cardHeading = css`
  font-family: ${fontFamily.primary};
  font-weight: 700;
  font-size: 15px;
  line-height: 1.25;
  color: ${colors.text};
  margin-bottom: ${spacing.sm};

  a {
    color: inherit;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

// Dates
export const cardDates = css`
  font-family: ${fontFamily.primary};
  font-weight: 400;
  font-size: 12px;
  line-height: 1.4;
  color: ${colors.textLowlight};
`;
