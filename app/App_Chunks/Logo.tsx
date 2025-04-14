import Link from "next/link";
import React from "react";

const Logo = ({ src }: { src?: string }) => {
  return (
    <Link href={"/"}>
      {src ? (
        <img className="w-24" src={src} />
      ) : (
        <p className="text-2xl font-[500]">Logo</p>
      )}
    </Link>
  );
};

export default Logo;
