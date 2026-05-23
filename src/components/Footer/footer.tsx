import { Button } from "@/src/components/ui/button";
import { GithubIcon } from "@/src/components/ui/github-icon";
import { LinkedinIcon } from "@/src/components/ui/linkedin-icon";
import { MailIcon } from "@/src/components/ui/mail-icon";

const contacts = [
  {
    label: "Email",
    href: "mailto:caiocesarc200@gmail.com",
    icon: MailIcon,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/caioccesar/",
    icon: LinkedinIcon,
  },
  {
    label: "GitHub",
    href: "https://github.com/caiooozs",
    icon: GithubIcon,
  },
];

const Footer = () => {
  return (
    <footer className="mt-12 border-t border-border/70 bg-background/90">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row sm:px-6">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} caio.dev
        </p>

        <div className="flex items-center gap-2">
          {contacts.map((contact) => {
            const Icon = contact.icon;

            return (
              <Button key={contact.label} variant="outline" size="sm" asChild>
                <a href={contact.href} target="_blank" rel="noreferrer">
                  <Icon size={14} />
                  {contact.label}
                </a>
              </Button>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
