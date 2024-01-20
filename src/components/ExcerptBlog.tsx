import { postDate } from "@/helpers/date";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Post = {
    title: string
    excerpt: string
    slug: string
    date: string
    featuredImage: {
        node: {
            sourceUrl: string
        }
    }
    tags: {
        nodes: [
            {name: string}
        ]
    }
    author: {
        node: {
            name: string
        }
    }
}

const ExcerptBlog: React.FC<{ post: Post }> = ({ post }) => {
    return (
        <article key={post?.slug} className="flex max-w-xl flex-col items-start justify-between">
            <div className="flex items-center gap-x-4 text-xs">
                <time dateTime="2020-03-16" className="text-gray-500">
                    { postDate(post?.date) }
                </time>
                <a
                    href={`post?.category.href`}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                    {post.tags.nodes[0]?.name}
                </a>
            </div>
            <div className="group relative">
                <div className="my-5">
                    <Image 
                        src={post?.featuredImage?.node?.sourceUrl}
                        alt="post picture"
                        width={500}
                        height={250}
                        objectFit="cover"
                        className="aspect-[3/2] w-full rounded-2xl"
                    />
                </div>
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <Link href={`/posts/${post?.slug}`}>
                        <span className="absolute inset-0" />
                        {post?.title}
                    </Link>
                </h3>
                <div 
                    className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600" 
                    dangerouslySetInnerHTML={{__html: post?.excerpt}} 
                />
            </div>
            <div className="relative mt-8 flex items-center gap-x-4">
                <Image 
                    src={`/avatar.jpg`} 
                    alt="author's picture" 
                    className="h-10 w-10 rounded-full bg-gray-50" 
                    width={40} 
                    height={40}
                    objectFit="cover"
                />
                <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                        <a href={`post.author.href`}>
                            <span className="absolute inset-0" />
                            {post?.author?.node?.name}
                        </a>
                    </p>
                    <p className="text-gray-600">Admin</p>
                </div>
            </div>
        </article>
    )
}

export default ExcerptBlog