import Link from "next/link";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/calebfrance-fsd",
      icon: <Github className="h-6 w-6 text-white" />,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/caleb-france-dodoo-7986372bb/",
      icon: <Linkedin className="h-6 w-6 text-white" />,
    },
    {
      name: "Email",
      href: "mailto:calebfranced@gmail.com",
      icon: <Mail className="h-6 w-6 text-white" />,
    },
    {
      name: "Phone",
      href: "tel:+12368808127",
      icon: <Phone className="h-6 w-6 text-white" />,
    },
  ];

  return (
    <footer className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
          <div className="flex space-x-6">
            {socialLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white transition-colors hover:text-gray-200"
              >
                <span className="sr-only">{link.name}</span>
                {link.icon}
              </Link>
            ))}
          </div>
          <div className="text-center md:text-right">
            <p className="text-sm">
              © {currentYear} Caleb France Dodoo. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
