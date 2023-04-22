import { Inter } from "@next/font/google";
import { useRouter } from "next/router";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  const router = useRouter();

  useEffect(() => {
    router.push("/slides/01");
  });

  
  return <>HOME</>;
}
