import Image from "next/image";
import Logo from "@/images/Final.svg";

const LogoComp = ({ width = 200, height = 200, imgStyle }: any) => {
  return (
    <Image
      src={Logo}
      alt="Nest&Nook"
      width={width}
      height={height}
      style={imgStyle}
    />
  );
};

export default LogoComp;
