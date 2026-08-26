import { css } from "@linaria/core";
import { colors, fontFamily, spacing } from "@/app/tokens";

export const hero = css`
  position: relative;
  width: 100%;
  min-height: 80vh;
  max-height: 900px;
  overflow: hidden;
  background: ${colors.black};
`;

export const heroMedia = css`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  opacity: 0.7;
`;

export const heroOverlay = css`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.3) 0%,
    rgba(0, 0, 0, 0.1) 40%,
    rgba(0, 0, 0, 0.6) 100%
  );
`;

export const heroContent = css`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: ${spacing.xxxl} ${spacing.xxl};
  max-width: 1920px;
  margin: 0 auto;
`;

export const heroTag = css`
  display: inline-block;
  font-family: ${fontFamily.primary};
  font-weight: 700;
  font-size: 12px;
  line-height: 1.2;
  color: ${colors.black};
  background: ${colors.primary};
  padding: 6px 14px;
  border-radius: 4px;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-bottom: ${spacing.md};
`;

export const heroTitle = css`
  font-family: ${fontFamily.primary};
  font-weight: 900;
  font-size: clamp(28px, 5vw, 56px);
  line-height: 1.1;
  color: ${colors.white};
  max-width: 700px;
  margin-bottom: ${spacing.md};
`;

export const heroDesc = css`
  font-family: ${fontFamily.primary};
  font-weight: 400;
  font-size: clamp(14px, 1.5vw, 18px);
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.85);
  max-width: 540px;
  margin-bottom: ${spacing.lg};
`;

export const heroCta = css`
  display: inline-flex;
  align-items: center;
  font-family: ${fontFamily.primary};
  font-weight: 700;
  font-size: 16px;
  line-height: 1.2;
  color: ${colors.black};
  background: ${colors.primary};
  padding: 14px 32px;
  border-radius: 4px;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  transition: background 0.2s ease;

  &:hover {
    background: ${colors.primaryHover};
  }
`;

// Responsive
const md = 768;

export const responsive = css`
  @media (max-width: ${md - 1}px) {
    ${hero} {
      min-height: 60vh;
      max-height: 500px;
    }

    ${heroContent} {
      padding: ${spacing.xl} ${spacing.lg};
    }
  }

  @media (max-width: 480px) {
    ${hero} {
      min-height: 50vh;
      max-height: 400px;
    }

    ${heroContent} {
      padding: ${spacing.lg} ${spacing.md};
    }
  }
`;
