import Image from "next/image";
import Logo from "@/public/images/logo.svg";
export default function Nav() {
  return (
    <nav>
      <Image src={Logo} width={128} height={32} />
      <h1 className="font-thin bg-slate-600">My</h1>
    </nav>
  );
}
