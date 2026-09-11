import type { ReactNode } from "react";
import { css } from "@linaria/core";
import { breakpoints } from "@/app/tokens";
import { createClasses } from "@/app/components/ui/index";

interface ContainerProps {
  children: ReactNode;
  customClass?: string;
}

export const container = css`
    width: 100%;
    max-width: 1320px;
    padding: 0 1.6rem;
    margin: 0 auto;

    @media (min-width: ${breakpoints.sm}px) {
        max-width: 540px;
    }
    @media (min-width: ${breakpoints.md}px) {
        max-width: 720px;
    }
    @media (min-width: ${breakpoints.lg}px) {
        max-width: 960px;
    }
    @media (min-width: ${breakpoints.xl}px) {
        max-width: 1140px;
    }
    @media (min-width: ${breakpoints.xxl}px) {
        max-width: 1320px;
    }
`;

export function Container({ children, customClass }: Readonly<ContainerProps>) {
  return (
    <div className={createClasses(container, customClass)}
         aria-label="container">
      {children}
    </div>
  );
}

