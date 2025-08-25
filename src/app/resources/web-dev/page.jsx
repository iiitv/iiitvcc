
import Link from "next/link";
import Image from "next/image";
import { Montserrat, Alata } from "next/font/google";

const montserratFont = Montserrat({
  weight: ["100", "200", "400", "600"],
  subsets: ["latin"],
});

const alataFont = Alata({ weight: ["400"], subsets: ["latin"] });

function WebDevResources() {
  return (
    <div className="mt-10 flex flex-col items-center">
      <div className={`${alataFont.className} text-4xl underline mb-8`}>
        Web Development
      </div>
    </div>
  );
}

export default WebDevResources;
