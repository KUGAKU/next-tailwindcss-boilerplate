import Head from "next/head";

const Layout = ({
  children,
  title = "HP by Nextjs",
}: {
  children: any;
  title: string;
}) => {
  return (
    <div className="flex justify-center items-center flex-col min-h-screen text-gray-600 text-sm bg-gray-800 font-mono">
      <Head>
        <title>{title}</title>
      </Head>
      <main className="flex flex-1 justify-center items-center flex-col w-screen">
        {children}
      </main>
      <footer className="w-full h-12 flex justify-center items-center border-t">
        unkown
      </footer>
    </div>
  );
};

export default Layout;
