import { css } from "@linaria/core";
import { colors, borderRadius, fontWeight, breakpoints } from "@/app/tokens";

export const section = css`
    margin: 0 0 4rem;
`;

export const sectionTitle = css`
    font-weight: ${fontWeight.black};
    font-size: 2.8rem;
    line-height: 1.25;
    margin-bottom: 3rem;
    @media (min-width: 768px) {
        font-size: 3.2rem;
        margin-bottom: 3.2rem;
    }
`;

export const cardGrid = css`
    display: grid;
    gap: 3.2rem;

    @media (min-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
    }
`;

// Card--page layout
export const card = css`
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

export const cardContent = css`
    padding: 2rem;
    display: flex;
    flex-direction: column;
`;

export const cardHeading = css`
    font-weight: ${fontWeight.black};
    font-size: 2.4rem;
    line-height: 1.25;
    margin-bottom: 2rem;
    @media (min-width: ${breakpoints.md}) {
        line-height: 1.3;
    }
`;

export const cardDescription = css`
    font-weight: ${fontWeight.book};
    line-height: 1.5;
    margin-bottom: 1rem;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    -webkit-line-clamp: 3;
`;

export const cardImage = css`
    width: 100%;
    aspect-ratio: 16 / 9;
    border-radius: ${borderRadius.sm};
    overflow: hidden;
    flex-shrink: 0;
`;
