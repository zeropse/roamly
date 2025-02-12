import { Twitter, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <div className="w-full text-white p-3">
      <div className="flex flex-row gap-4 items-center justify-center cursor-pointer">
        <Twitter className="w-8 h-8" />
        <Facebook className="w-8 h-8" />
        <Instagram className="w-8 h-8" />
        <Linkedin className="w-8 h-8" />
      </div>
    </div>
  );
};

export default Footer;
