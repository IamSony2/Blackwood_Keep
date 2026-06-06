import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";

interface Props {
  children: React.ReactNode;
  minimal?: boolean;
}

export function PageLayout({ children, minimal = false }: Props) {
  return (
    <>
      <SiteHeader minimal={minimal} />
      <main>{children}</main>
      <SiteFooter minimal={minimal} />
    </>
  );
}
