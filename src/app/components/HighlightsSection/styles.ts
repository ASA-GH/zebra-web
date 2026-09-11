import { css } from "@linaria/core";
import { colors, fontWeight } from "@/app/tokens";

export const section = css`
  padding: 3.2rem 0 0;
`;

export const sectionTitle = css`
    font-size: 2.8rem;
    line-height: 1.25;
    margin-bottom: 0.5em;
    font-weight: ${fontWeight.black};
    color: ${colors.text};
    @media (min-width: 768px) {
        font-size: 3.2rem;
    }
`;
