"use client";

import Link from "next/link";
import { useState } from "react";

import {
  header,
  logoSvg,
  nav,
  container
} from "./styles";
import { Logo } from "@/app/components/Header/Logo";
import { DesktopNav } from "@/app/components/Header/DesktopNav";
import { RightSide } from "@/app/components/Header/RightSide";
import { MobileMenu } from "@/app/components/Header/MobileMenu";
import { Container } from "@/app/components/ui/Container";

export function Header() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <header className={header} aria-label="Main navigation">
      <nav className={nav}>
        <Container customClass={container}>
          <Link href="/" className={logoSvg} aria-label="Sydney Opera House home page"><Logo/></Link>
          <DesktopNav/>
          <RightSide menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        </Container>
      </nav>
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    </header>
  );
}
