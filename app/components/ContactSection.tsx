import Link from "next/link";
import { Mail, Phone, Github } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      name: "Email",
      value: "calebfranced@gmail.com",
      href: "mailto:calebfranced@gmail.com",
      icon: <Mail className="h-6 w-6" />,
    },
    {
      name: "Phone",
      value: "+1 (236) 880-8127",
      href: "tel:+12368808127",
      icon: <Phone className="h-6 w-6" />,
    },
    {
      name: "GitHub",
      value: "calebfrance-fsd",
      href: "https://github.com/calebfrance-fsd",
      icon: <Github className="h-6 w-6" />,
    },
  ];

  return (
    <section id="contact" className="section">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="mb-12 text-center text-5xl font-bold text-white">Get in Touch</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {contactInfo.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-lg bg-gray-800/50 p-8 backdrop-blur-sm transition-all duration-300 hover:bg-gray-800/70 hover:shadow-lg"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 rounded-full bg-gray-700/50 p-4 text-white transition-colors group-hover:bg-blue-600/20">
                  {item.icon}
                </div>
                <h3 className="mb-2 text-xl font-semibold text-white">{item.name}</h3>
                <p className="text-gray-300">{item.value}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
