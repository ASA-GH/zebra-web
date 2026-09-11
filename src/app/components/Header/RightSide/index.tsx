import Link from "next/link";

import {
  searchBtn,
  rightSide,
  accountBtn,
  cartLink,
  mobileToggle,
} from "./styles";

import { Search } from "@/app/components/Header/RightSide/Search";
import { MyAccount } from "@/app/components/Header/RightSide/MyAccount";
import { Cart } from "@/app/components/Header/RightSide/Cart";

export function RightSide({ menuOpen, setMenuOpen }: Readonly<{ menuOpen: boolean, setMenuOpen: Function }>) {

  return (
    <div className={rightSide}>
      <button className={searchBtn} aria-label="Search">
        <Search/>
      </button>
      <button className={accountBtn} aria-label="My Account">
        <MyAccount/>
      </button>
      <Link href="/shop/cart" className={cartLink} aria-label="Cart">
        <Cart/>
      </Link>
      <button
        className={mobileToggle}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open: boolean) => !open)}
      >
        <span className={`${mobileToggle}__icon mobileToggle--open`} aria-hidden="true">
          <img src="/icons/icon-burger.svg" alt="" style={{ width: 14, height: 12 }} />
        </span>
        <span className={`${mobileToggle}__icon mobileToggle--close`} aria-hidden="true">
          <img src="/icons/icon-close.svg" alt="" style={{ width: 14, height: 14 }} />
        </span>
      </button>
    </div>
  );
}
