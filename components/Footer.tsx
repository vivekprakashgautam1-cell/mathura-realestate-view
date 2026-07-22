import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-navy-dark px-6 py-9 text-center text-sm text-[#cfd6dd]">
      <Image
        src="/logo.svg"
        alt="Mathura RealEstate View"
        width={180}
        height={50}
        className="mx-auto mb-3.5 h-[50px] w-auto"
      />
      <div className="mb-4 flex flex-wrap justify-center gap-6">
        <a href="https://crm.mathurarealestateview.xyz/privacy-policy.html" className="text-xs text-[#cfd6dd] transition-colors hover:text-gold">
          Privacy Policy
        </a>
        <a href="https://crm.mathurarealestateview.xyz/terms-of-service.html" className="text-xs text-[#cfd6dd] transition-colors hover:text-gold">
          Terms of Service
        </a>
        <a href="https://crm.mathurarealestateview.xyz/privacy-policy.html#data-deletion" className="text-xs text-[#cfd6dd] transition-colors hover:text-gold">
          Data Deletion
        </a>
      </div>
      <p>&copy; {new Date().getFullYear()} Mathura RealEstate View. All rights reserved.</p>
    </footer>
  );
}
