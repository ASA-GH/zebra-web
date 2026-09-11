import { css } from "@linaria/core";
import { colors, fontWeight } from "@/app/tokens";

export const tabList = css`
  display: flex;
  align-items: center;
  gap: 2rem;
  min-height: max-content;
  margin-bottom: 2.6rem;  
`;

export const tabItem = css`
    font-weight: ${fontWeight.black};
    font-size: 1.6rem;
    line-height: 1.5;
`;
export const tabBtn = css`
    font-weight: ${fontWeight.black};
    font-size: 1.6rem;
    line-height: 1.5;
    color: ${colors.black};
    cursor: pointer;
    position: relative;
    &::before {
        content: "";
        position: absolute;
        bottom: -3px;
        left: 0;
        top: auto;
        width: 100%;
        height: 3px;
        background-color: transparent;
        transition-duration: 10s;
        transition-property: left, width;
    }


    &:hover {
        &::before {
            background-color: ${colors.black};
        }
    }

`;
export const tabBtnActive = css`
    &::before {
        background-color: ${colors.black};
    }
`;
