import Image from "next/image";
import Link from "next/link";
// import { popUpFromBottomForText } from "../../content/FramerMotionVariants";
// import { motion } from "framer-motion";

type TrackProps = {
  url: string;
  title: string;
  artist: string;
  coverImage: string;
  id: number;
};

export default function Track({
  url,
  title,
  artist,
  coverImage,
  id,
}: TrackProps) {
  return (
    <Link
      href={url}
      rel="noreferrer"
      target="_blank"
      className="bg-gray-100 hover:bg-gray-200 dark:bg-darkPrimary hover:dark:bg-darkSecondary border-l first:border-t border-r border-b  border-gray-300 dark:border-neutral-600 p-4 font-barlow flex items-center gap-5 overflow-hidden relative xs:pl-16 md:!pl-20 "
    >
      <>
        <div className="absolute left-4 md:left-6 text-xl text-gray-500 transform origin-center font-inter tracking-wider hidden xs:inline-flex">
          #{id + 1}
        </div>

        <div className="relative w-12 h-12 transform origin-center">
          {coverImage ? (
            <Image
              src={coverImage}
              width={50}
              height={50}
              alt={title}
              quality={50}
            ></Image>
          ) : (
            <div className="w-full h-full bg-white animate-pulse"></div>
          )}
        </div>
        <div>
          <p className="text-base md:text-xl text-gray-900 dark:text-white font-semibold transform origin-left font-barlow">
            {title ?? <div className="w-full h-4 bg-white animate-pulse"></div>}
          </p>
          <p className="transform origin-left text-gray-500 text-xs sm:text-sm md:text-base line-clamp-1">
            {artist ?? (
              <div className="w-full h-4 bg-white animate-pulse"></div>
            )}
          </p>
        </div>
      </>
    </Link>
  );
}
