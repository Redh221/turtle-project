"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

function About() {
  return (
    <>
      <Link href="/">
        <Button onClick={() => console.log("vivva")}>First page</Button>
      </Link>
    </>
  );
}

export default About;
