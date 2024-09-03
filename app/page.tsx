import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn, sortPosts } from "@/lib/utils";
import { posts } from "#site/content";
import Link from "next/link";
import { PostItem } from "@/components/post-item";

export default function Home() {
    const latestPosts = sortPosts(posts).slice(0, 5);
    return (
        <>
            <section className="space-y-6 pb-8 pt-6 md:pb-12 md:mt-10 lg:py-32">
                <div className="container flex flex-col gap-4 text-center">
                    <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-balance">
                        Hello, we&apos;re ACM Club!
                    </h1>
                    <p className="max-w-[42rem] mx-auto text-muted-foreground sm:text-xl text-balance">
                        我们是一个致力于培养计算机编程竞赛人才的俱乐部，旨在通过算法和编程的训练提高学生的编程技能和解决问题的能力。
                        我们负责icpc、ccpc、acm等比赛的选拔和培训，为广大编程爱好者提供一个交流学习的平台。
                    </p>
                    <div className="flex flex-col gap-4 justify-center sm:flex-row">
                        <Link
                            href="/blog"
                            className={cn(
                                buttonVariants({ size: "lg" }),
                                "w-full sm:w-fit"
                            )}
                        >
                            看我们的博客
                        </Link>
                        <Link
                            href={siteConfig.links.github}
                            target="_blank"
                            rel="noreferrer"
                            className={cn(
                                buttonVariants({
                                    variant: "outline",
                                    size: "lg",
                                }),
                                "w-full sm:w-fit"
                            )}
                        >
                            GitHub
                        </Link>
                    </div>
                </div>
            </section>
            <section className="container max-w-4xl py-6 lg:py-10 flex flex-col space-y-6 mt-60">
                <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-center">
                    最新文章
                </h2>
                <ul className="flex flex-col">
                    {latestPosts.map(
                        (post) =>
                            post.published && (
                                <li
                                    key={post.slug}
                                    className="first:border-t first:border-border"
                                >
                                    <PostItem
                                        slug={post.slug}
                                        title={post.title}
                                        description={post.description}
                                        date={post.date}
                                        tags={post.tags}
                                    />
                                </li>
                            )
                    )}
                </ul>
            </section>
        </>
    );
}
