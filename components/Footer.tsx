// Importing necessary dependencies
import Image from "next/image";

// Functional component representing the footer of the application
function Footer() {
  return (
    // Footer container with styling
    <footer className="sm:px-16 py-4 px-8 flex justify-between items-center gap-2 flex-wrap bg-[#161921]">
      {/* Copyright information */}
      <p className="text-base font-bold text-white">
        &copy; {new Date().getFullYear()} Anime Vault
      </p>
      {/* Logo image */}
      <Image
        src="./logo.svg"
        alt="logo"
        width={47}
        height={44}
        className="object-contain"
      />
      <div className="flex items-center gap-6">
      <p className="text-base font-bold text-white">
        <a href="https://github.com/shohail-DeV">@Shohail_Parwej</a>
      </p>
      </div>
    </footer>
  );
}

// Exporting the Footer component as the default export
export default Footer;