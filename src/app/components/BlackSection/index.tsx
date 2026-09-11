import {
  customClass,
  section,
  text
} from "./styles";
import { Container } from "@/app/components/ui/Container";

export function BlackSection() {
  return (
    <section className={section}>
      <Container customClass={customClass} >
        <p className={text}>
          The Sydney Opera House honours our First Nations by fostering a shared sense of belonging for all Australians,
          and we acknowledge the Gadigal, traditional custodians of Tubowgule, the land on which the Opera House stands.
        </p>
      </Container>
    </section>
  );
}
