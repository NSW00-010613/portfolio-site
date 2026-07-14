"use client";

import Image from "next/image";
import { motion } from "framer-motion";



type Props = {
  progress: number;
};

export default function LoadingScreen({
  progress,
}: Props) {
  return (
    <div className="fixed inset-0 z-9999 bg-gray-800 flex flex-col justify-center items-center">

      <h1 className="mb-16 text-white text-4xl font-bold">
        Portfolio Loading
      </h1>

      <div className="relative w-[80%] max-w-4xl">


        {/* チーズ */}
        <div className="absolute right-0 -top-10">
          <motion.div
            animate={{
              rotate: [-5, 5, -5],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
            }}
          ><Image
              src="/images/Cheese.png"
              alt="Cheese"
              width={80}
              height={120}
            />
          </motion.div>
        </div>

        {/* ネズミ */}
        <motion.div
          className="absolute -top-8"
          animate={{
            left: `${progress}%`,
          }}
          transition={{
            ease: "linear",
            duration: 0.1,
          }}
          style={{
            transform: "translateX(-50%)",
          }}
        >
          <motion.div
            animate={{
              y: [0, -10, 0],
              rotate: [0, 15, 5, 0],
            }}
            transition={{
              duration: 0.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          ><Image
              src="/images/Rat.png"
              alt="Rat"
              width={120}
              height={120}
              className="scale-x-[-1]"
            />
          </motion.div>
        </motion.div>

      </div>

      <div className="mt-20 text-center">
        <p className="text-4xl font-bold text-white">
          {progress}%
        </p>

        <p className="text-zinc-400 mt-3">
          Preparing Portfolio...
        </p>
      </div>

    </div>
  );
}
