import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/about">
        <Button>About</Button>
      </Link>
      vova
    </div>
  );
}
