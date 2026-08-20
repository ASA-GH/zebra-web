"use client";

import { css } from "@linaria/core";
import { styled } from "@linaria/react";

const container = css`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

const heading = css`
  font-size: 2rem;
  font-weight: 600;
`;

const Card = styled.div`
  margin-top: 2rem;
  padding: 1.5rem;
  border-radius: 12px;
  background: #f5f5f5;
  color: #333;
`;

export default function Home() {
  return (
    <div className={container}>
      <h1 className={heading}>Zebra Web</h1>
      <Card>Next.js + TypeScript 6 + Linaria</Card>
    </div>
  );
}
