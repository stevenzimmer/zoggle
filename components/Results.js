import { useEffect } from "react";
import Link from "next/link";

import ReactPlayer from "react-player";

import { useResultContext } from "@/context/ResultContextProvider";
import { useRouter } from "next/router";
import Loading from "./Loading";
export default function Results() {
    const { results, isLoading, getResults, searchTerm } = useResultContext();
    const router = useRouter();

    if (isLoading) return <Loading />;

    switch (router.pathname) {
        case "/":
            return (
                <div className="flex flex-wrap justify-between space-y-6">
                    {results?.results?.map(({ link, title }, i) => {
                        return (
                            <div key={i} className="lg:w-4/5">
                                <Link href={link}>
                                    <a target="_blank" rel="noreferrer">
                                        <p className="text-sm ">
                                            {link.length > 30
                                                ? link.substring(0, 30)
                                                : link}
                                        </p>
                                        <p className="text-lg hover:underline dark:text-blue-300 text-blue-700">
                                            {title}
                                        </p>
                                    </a>
                                </Link>
                            </div>
                        );
                    })}
                </div>
            );
            break;
        case "/news":
            return "news";
            break;
        case "/images":
            return "images";
            break;
        case "/videos":
            return "videos";
            break;

        default:
            break;
    }
}
