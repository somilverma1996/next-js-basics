// import { Post } from "../../components/post";

import { Card, Row, Col } from "antd"
import Link from "next/link";

async function getBlogPosts() {
    const apiKey = process.env.API_URL;
    const postsResponse = await fetch(
        `${apiKey}/posts`,
        { cache: "force-cache" }
    );

    return postsResponse.json();
}

export default async function Page() {
    const posts = await getBlogPosts();
    return (
        <div className="flex flex-col items-center pt-10">
            <h1 className="text-4xl font-bold">Blogs Page</h1>
            <div className="card-row-wrapper">
                <Row gutter={[20, 20]}>
                    {posts.map((post) => (
                        <Col key={post.id} xs={24} md={6} lg={4}>
                            <Card className="card-wrapper" title={`#${post.id}`} bordered={false}>
                                <Link href={`/blog/${post.id}`}>
                                    <div className="title">{post.title}</div>
                                </Link>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    );
}
