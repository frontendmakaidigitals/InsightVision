"use client";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
interface LinkProps {
  links: { name: string; link: string }[];
}

const containerVariants = {
  initial: {},
  hover: {},
};

const childVariants = {
  initial: { y: 0 },
  hover: { y: -4 }, // move all up a little
};
const Menu: React.FC<LinkProps> = ({ links }) => {
  const pathName = usePathname();
  const [hoverIdx, setHoverIdx] = useState<number | null>(null);
  return (
    <div className="flex items-center gap-12">
      <AnimatePresence mode="wait">
        {links.map((link, idx) => (
          <motion.div
            variants={containerVariants}
            initial="initial"
            whileHover="hover"
            key={idx}
            onMouseEnter={() => setHoverIdx(idx)}
            onMouseLeave={() => setHoverIdx(null)}
            className={`pb-1 overflow-hidden text-lg relative `}
          >
            <Link href={link.link}>
              <AnimatePresence>
                {(hoverIdx === idx || pathName === link.link) && (
                  <motion.div
                    initial={{
                      width:
                        pathName?.toLowerCase() === link.link ? "100%" : "0%",
                    }}
                    animate={{ width: "100%" }}
                    exit={{ x: 100, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="z-10 absolute top-[90%] bg-black left-0 h-[1px]"
                  />
                )}
              </AnimatePresence>
              {link.name.split("").map((char, index) => (
                <motion.p
                  variants={childVariants}
                  transition={{
                    delay: index * 0.05,
                    ease: [0.165, 0.84, 0.44, 1],
                    duration: 0.5,
                  }}
                  key={index}
                  className="inline-block"
                >
                  {char === "-" ? (
                    <span className="inline-block">&nbsp;</span>
                  ) : (
                    char
                  )}
                </motion.p>
              ))}
            </Link>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default Menu;
