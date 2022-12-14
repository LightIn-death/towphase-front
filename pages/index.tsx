import type {NextPage} from 'next'
import {useUser} from '@auth0/nextjs-auth0';
import Profile from "./app/profile";
import Head from "next/head";


const Home: NextPage = () => {

    const {user, error, isLoading} = useUser();

    if (isLoading) return <div>Loading... !</div>;
    if (error) return <div>{error.message}</div>;

    if (user) {
        // todo : redirect
    }


    return (
        <div className="flex min-h-screen flex-col items-center justify-center py-2">
            <Head>
                <title>Towphase</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>


            <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">


                <h1 className="text-6xl font-bold">
                    Dashboard
                </h1>


                <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
                    <a
                        href="/api/auth/login"
                        className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
                    >
                        <h3 className="text-2xl font-bold">Connexion &rarr;</h3>
                        <p className="mt-4 text-xl">
                            Se connecter sur le site
                        </p>
                    </a>

                </div>
            </main>

            <footer className="flex h-24 w-full items-center justify-center border-t">
                <a
                    className="flex items-center justify-center gap-2"
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    created by brev.al
                </a>
            </footer>
        </div>
    )


}

export default Home;