import { css } from "@linaria/core";
import { colors, fontWeight } from "@/app/tokens";

export const findMore = css`
  padding-top: 1.6rem;
`;
export const findMoreText = css`
  line-height: 1.5;
`;

export const findMoreCta = css`
  font-weight: ${fontWeight.bold};
  line-height: 1.5;
  padding: 0 2px;
  text-decoration: underline;

  &:hover {
   background-color: ${colors.findMoreHover};
  }
`;

