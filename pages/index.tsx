import Head from "next/head";
import Header from "@/components/Header";
import { sanityClient, urlFor } from "../sanity";
import { Post } from "../typings";
import post from "@/sanity-medium-clone/schemas/post";
import Link from "next/link";

interface Props {
  posts: [Post];
}

export default function Home({ posts }: Props) {
  return (
    <div className="mx-auto max-w-7xl">
      <Head>
        <title>Medium</title>
        <meta
          name="description"
          content="Medium is an open platform where readers find dynamic thinking, and where expert and undiscovered voices can share their writing on any topic."
        />
      </Head>
      <Header />

      <div className="flex items-center justify-between border-y border-black bg-yellow-400 py-10 lg:py-0">
        <div className="space-y-5 px-10">
          <h1 className="max-w-xl font-serif text-6xl capitalize">
            <span className="underline decoration-black decoration-4">
              Medium
            </span>{" "}
            is a Place to Write, Read, and Connect
          </h1>
          <h2 className="max-w-lg font-poppins text-lg">
            It's easy and free to post your thinking on any topic and connect
            with millions of readers.
          </h2>
        </div>

        <img
          className="hidden h-32 md:inline-flex lg:h-full"
          src="https://iconape.com/wp-content/png_logo_vector/medium-m.png"
          alt="M-logo"
        />
      </div>

      <div className="grid grid-cols-1 gap-3 p-2 sm:grid-cols-2 md:gap-6 md:p-6 lg:grid-cols-3">
        {posts.map((post) => (
          <Link key={post._id} href={`/post/${post.slug.current}`}>
            <div className="group cursor-pointer overflow-hidden rounded-lg border shadow-md">
              <img
                className="h-60 w-full object-cover transition-transform duration-200 ease-in-out group-hover:scale-105"
                src={urlFor(post.mainImage).url()!}
                alt={`${post.title} Image`}
              />
              <div className="flex justify-between bg-white p-5">
                <div>
                  <p className="font-poppins text-lg font-bold">{post.title}</p>
                  <p className="font-poppins text-sm text-gray-700">
                    {post.description} by {post.author.name}
                  </p>
                </div>

                <img
                  className="h-12 w-12 rounded-full border"
                  src={urlFor(post.author.image).url()!}
                  alt={`${post.author.name} Image`}
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export const getServerSideProps = async () => {
  const query = `*[_type == "post"]{
    _id,
    title,
    slug,
    author -> {
      name,
      image
    },
      description,
      mainImage,
      slug,
  }`;

  const posts = await sanityClient.fetch(query);
  return {
    props: {
      posts,
    },
  };
};
