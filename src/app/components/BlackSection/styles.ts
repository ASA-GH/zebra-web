import { css } from "@linaria/core";
import { breakpoints, colors, fontWeight } from "@/app/tokens";

export const section = css`
    padding: 7.5rem 0;
    background-color: ${colors.black};
    margin: 0 0 3.2rem;
`;

export const customClass = css`
    && {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0;
    }
`;

export const text = css`
    color: ${colors.white};
    font-weight: ${fontWeight.black};
    font-size: 2.2rem;
    line-height: 1.25;
    text-align: center;
    padding: 0 1.6rem;
    
    @media (min-width: ${breakpoints.md}) {
        font-size: 2.4rem;
        line-height: 1.3;
        max-width: 83.3333%;
    }
`;
