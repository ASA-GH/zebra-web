import { css } from "@linaria/core";
import { fontWeight } from "@/app/tokens";

export const standardPanel = css`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

export const card = css`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  cursor: pointer;
  grid-column: span 2;
  @media (min-width: 768px) {
    grid-column: span 1;
  }
`;

export const cardContent = css`
  display: flex;
  flex-direction: column;
  padding: 20px;
  font-weight: ${fontWeight.black};
`;

export const cardImage = css`
  position: relative;
  flex-shrink: 0;
  aspect-ratio: 1 / 1;
  overflow: hidden;

  &:hover {
    & img {
      transform: scale(1.05);
    }
  }
`;

export const cardCategory = css`
  font-weight: ${fontWeight.black};
  line-height: 1.5;
  margin-bottom: 1rem;
`;

export const cardHeading = css`
  font-weight: ${fontWeight.black};
  font-size: 2.4rem;
  line-height: 1.3;
  margin-bottom: 1rem;
  }
`;

export const cardDates = css`
  font-weight: ${fontWeight.black};
  line-height: 1.5;
`;
