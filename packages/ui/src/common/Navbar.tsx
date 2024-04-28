import Link from "next/link";
import Image from "next/image";
import { Button } from "../components/ui/button";

interface NavbarProps {
  src: string;
  loginLink: string;
  signupLink: string;
  linkTitle: string;
  imageWidth: number;
  imageHeight: number;
}

const Navbar = ({
  imageWidth,
  imageHeight,
  src,
  loginLink,
  signupLink,
  linkTitle,
}: NavbarProps) => {
  return (
    <div className="flex container justify-between items-center py-4">
      <div>
        {/* <Image src={src} width={imageWidth} height={imageHeight} alt="logo" />*/}
        <p className="font-bold text-2xl tracking-wide text-blue-500">Jobify</p>
      </div>
      <div className="flex gap-3 items-center">
        <Button variant={"link"}>{linkTitle}</Button>
        <Link href={loginLink}>
          <Button variant={"outline"}>Login</Button>
        </Link>
        <Link href={signupLink}>
          <Button variant={"default"} className="bg-blue-500 hover:bg-blue-600">Signup</Button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
