'use client';

import Header from "@/components/Header";
import { postDate } from "@/helpers/date";
import { singlePost } from "@/interfaces/post.interface";
import { getPostBySlug } from "@/lib/actions";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function PostDetail ( { params }: { params: { slug: string } } ) {

    const [post, setPost] = useState<singlePost>();
    
    useEffect(() => {
        const fetchSinglePost = async () => {
            try {
                const data = await getPostBySlug( params.slug ) ;
                
                setPost(data);
            } catch (error) {
                console.log("🚀 ~ fetchSinglePost ~ error:", error)
            }
        }

        fetchSinglePost();
    } ,[]);

    return (
        <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white antialiased">
            <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
                {post && (
                    <div className="container mx-auto px-5">
                        <div className="mb-10 mx-2">
                            <Link href="/" className="text-3xl font-bold">Blog.</Link>
                        </div>
                        <h1
                            className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left"
                        >
                            {post?.title}
                        </h1>
                        <div className="flex items-center my-5">
                            <div className="w-12 h-12 relative mr-4">
                                <Image
                                    src={'/avatar.jpg'}
                                    layout="fill"
                                    className="rounded-full"
                                    alt={`admin's profile`}
                                    objectFit="cover"
                                    objectPosition="top"
                                />
                            </div>
                            <p className="text-xl font-bold">{post?.author?.node?.name}</p>
                        </div>
                        <div className="mb-8 md:mb-16 sm:mx-0">
                            <Image
                                src={post?.featuredImage.node.sourceUrl}
                                alt={post?.title}
                                width={1920}
                                height={1080}
                                className="hover:shadow-medium transition-shadow duration-200 shadow-sm"
                            />
                        </div>
                        <div className=" max-w-2xl mx-auto mb-6 text-lg">
                            <p className="mb-6">
                                Posted <span className="text-gray-600">{postDate(post?.date)}</span> | {
                                    post?.tags?.nodes?.map((tag: any, index: number) => (
                                        <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-500 mr-2">
                                            {tag?.name}
                                        </span>
                                    ))
                                }
                            </p>
                            <div dangerouslySetInnerHTML={{__html: post?.content}} />
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
}
