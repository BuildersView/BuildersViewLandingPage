import { Separator } from "@/components/ui/separator";

const footerLinks = [
  { label: "מי אנחנו", href: "#process" },
  { label: "פרויקטים", href: "#projects" },
  { label: "שאלות נפוצות", href: "#faq" },
  { label: "צור קשר", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="bg-bg-secondary px-6 md:px-12 lg:px-20 py-16">
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-xl font-bold text-foreground mb-3">
              BuildersView
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed">
              שותפים לבנייה של רעיונות.
              <br />
              מהחזון ועד למוצר חי ומתוחזק.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-medium text-foreground mb-4">ניווט</h4>
            <nav className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-text-secondary hover:text-foreground transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-medium text-foreground mb-4">
              יצירת קשר
            </h4>
            <div className="flex flex-col gap-3 text-sm text-text-secondary">
              <a
                href="mailto:hello@buildersview.co.il"
                className="hover:text-foreground transition-colors duration-200"
              >
                hello@buildersview.co.il
              </a>
              <a
                href="tel:+972501234567"
                className="hover:text-foreground transition-colors duration-200"
                dir="ltr"
              >
                050-123-4567
              </a>
            </div>
          </div>
        </div>

        <Separator className="my-10 bg-border" />

        <p className="text-xs text-muted-foreground text-center">
          &copy; {new Date().getFullYear()} BuildersView. כל הזכויות שמורות.
        </p>
      </div>
    </footer>
  );
}
