"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type FloatingImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
};

export default function FloatingImage({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
}: FloatingImageProps) {
  return (
    <motion.div
      className={className}
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 5.4, repeat: Infinity, ease: "easeInOut" }}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        className="h-auto w-full"
        sizes="(max-width: 768px) 90vw, 50vw"
        unoptimized={src.endsWith(".svg")}
      />
    </motion.div>
  );
}
