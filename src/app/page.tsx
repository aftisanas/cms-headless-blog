'use client';

import Banner from "@/components/Banner";
import ExcerptBlog from "@/components/ExcerptBlog";
import Hero from "@/components/Hero";
import Header from "@/components/Header";
import { postDate } from "@/helpers/date";
import { Posts } from "@/interfaces/post.interface";
import { getPosts } from "@/lib/actions";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [posts, setPosts] = useState<Posts[]>([]);
  

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const allPosts = await getPosts(10);

        setPosts(allPosts);
      } catch (error) {
        console.log("🚀 ~ fetchBlogs ~ error:", error);
      }
    }

    fetchBlogs();
  }, []);

  return (
    <>
      <div className="min-h-screen flex-col items-center justify-between p-24">
        <Banner />
        <Header />
        <Hero />

        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl lg:mx-0">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">The blogs</h2>
                <p className="mt-2 text-lg leading-8 text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, voluptatem.
                </p>
              </div>
              <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                { posts && posts.map((post: any) => (
                  <ExcerptBlog post={post} key={post?.slug} />
                ))}
              </div>
          </div>
        </div>
      </div>
    </>
  );
}

