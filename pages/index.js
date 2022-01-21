import { useState } from "react";
import Head from "next/head";

// import Image from "next/image";

import Layout from "@/components/Layout";
import Search from "@/components/Search";
import Results from "@/components/Results";
export default function Home() {
    const [darkTheme, setDarktheme] = useState(false);
    console.log(darkTheme);
    return (
        <div className="container">
            <Head>
                <title>Zoggl Search</title>
                <meta
                    name="description"
                    content="the sleekest search of them all."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout>
                <Search />
                <Results />
            </Layout>
        </div>
    );
}
