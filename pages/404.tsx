import React from "react";
import Link from "next/link";
import Head from "next/head";
import Header from "@/components/Header";

const Error = () => {
  return (
    <>
      <Header />
      <div className=" flex h-screen flex-col items-center justify-center gap-6">
        <Head>
          <title>Page Not Found - Medium</title>
          <meta name="description" content="Page Not Found" />
        </Head>
        <h1 className="bg-gradient-to-br from-green-600 to-green-900 bg-clip-text font-semibold text-transparent sm:text-9xl md:text-[300px]">
          404
        </h1>
        <h3 className="text-xl font-semibold">
          Sorry, but this page does not exist.
        </h3>
        <Link
          href="/"
          className="mt-0 rounded-full bg-green-700 px-5 py-3 text-white transition-all hover:bg-green-600"
        >
          Homepage
        </Link>
      </div>
    </>
  );
};

export default Error;
