import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { siteConfig } from "@/config/site";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "关于我们",
    description: "关于ACM俱乐部的信息",
};

export default async function AboutPage() {
    return (
        <div className="container max-w-6xl py-6 lg:py-10">
            <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
                <div className="flex-1 space-x-4">
                    <h1 className="inline-block font-black text-4xl lg:text-5xl">
                        关于ACM俱乐部
                    </h1>
                </div>
            </div>
            <hr className="my-8" />
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                <div className="min-w-48 max-w-48 flex flex-col gap-2">
                    <Avatar className="h-48 w-48">
                        <AvatarImage
                            src="/avatar.png"
                            alt={siteConfig.author}
                        />
                        <AvatarFallback>ACM</AvatarFallback>
                    </Avatar>
                    <h2 className="text-2xl font-bold text-center break-words">
                        {siteConfig.author}
                    </h2>
                    <p className="text-muted-foreground text-center break-words">
                        ACM俱乐部
                    </p>
                </div>
                <p className="text-muted-foreground text-lg py-4">
                    ACM俱乐部致力于培养计算机编程竞赛人才，旨在通过算法和编程的训练提高学生的编程技能和解决问题的能力。我们通过组织各种编程比赛、算法讲座和专题培训，为广大编程爱好者提供一个交流学习的平台。我们的目标是让更多的学生在国际和国内的编程竞赛中取得优异成绩，培养出具有创新精神和团队合作能力的IT人才。
                </p>
            </div>
        </div>
    );
}
