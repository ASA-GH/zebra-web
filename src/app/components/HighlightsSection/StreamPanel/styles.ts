import { css } from "@linaria/core";
import { colors, borderRadius, fontWeight, breakpoints } from "@/app/tokens";

export const streamPanel = css`
  display: grid;
  gap: 3.2rem;
  @media (min-width: ${breakpoints.md}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const streamCard = css`
  display: flex;
  flex-direction: column;
  border-radius: ${borderRadius.sm};

  cursor: pointer;
  transition: transform 0.3s ease;
  background-color: ${colors.tagBg};

  &:hover {
    background-color: ${colors.page};
    transform: translateY(-4px);
  }
`;

export const streamCardContent = css`
    padding: 2rem;
    display: flex;
    flex-direction: column;
`;

export const streamCardHeading = css`
  font-weight: ${fontWeight.black};
  font-size: 2.4rem;
  line-height: 1.25;
  margin-bottom: 2rem;
    @media (min-width: ${breakpoints.md}) {
      line-height: 1.3;
    }
`;

export const streamCardDescription = css`
  font-weight: ${fontWeight.book};
  line-height: 1.5;
  margin-bottom: 2rem;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  -webkit-line-clamp: 3;  
`;

export const streamCardList = css`
    display: inline-flex;
    flex-wrap: wrap;
    gap: 1rem;
`;

export const streamCardCategory = css`
  font-weight: ${fontWeight.book};
  font-size: 1.4rem;
  line-height: 1.5;
  background-color: ${colors.platinum};
  border-radius: 0.4rem;
  padding: 0.25em 0.5em;
`;

export const streamCardImage = css`
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: ${borderRadius.sm};
  overflow: hidden;
  flex-shrink: 0;
`;
