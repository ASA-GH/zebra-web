import Link from "next/link";
import { findMore, findMoreCta, findMoreText } from "./styles";

export function FindMore({ text }: Readonly<{ text: string }>) {
  return (
    <div className={findMore}>
      <p className={findMoreText}>
        <Link href="/" className={findMoreCta}>{text}</Link>
        {" "}
        at the Opera House
      </p>
    </div>
  );
}
