export async function generateStaticParams() {
    const postsResponse = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
    );

    const posts = await postsResponse.json();

    return posts.map((post) => ({
        id: String(post.id),
    }));
}

async function fetchPost(id) {
    const apiKey = process.env.API_URL;
    const postResponse = await fetch(
        `${apiKey}/posts/${id}`
    );

    return postResponse.json();
}

import { Card } from "antd";
import Image from "next/image";

export default async function BlogPost({ params }) {
    const { id } = params;
    const post = await fetchPost(id);

    return (
        <div className="flex flex-col items-center pt-10 main">
            <h1 className="blog-details">Blog Details Page</h1>
            <Card className="" title={`#${post.id}`} bordered={false}>
                <Image
                    src="/Simform_Wallpaper4.png"
                    alt="My Image"
                    width={500}
                    height={300}
                />
                <div className="title-details">{post.title}</div>
                <div className="title-details text-lg font-medium max-w-4xl mt-8 ">
                    {post.body}
                </div>
            </Card>
        </div>
    );
}
