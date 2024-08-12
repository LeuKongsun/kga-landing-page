import Head from "next/head";
import Footer from "./ui/Footer";
import Navbar from "./ui/Navbar";
import { ThemeProvider } from "next-themes";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>KGA</title>
        <meta
          name="description"
          content="Blinder making it simple for you to build and grow your SaaS applications, or any business idea"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel='icon' href='/favicon.ico' /> */}
      </Head>
      <ThemeProvider attribute="class" defaultTheme="light">
        <div className="dark:bg-gradient-dark">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </ThemeProvider>
    </>
  );
};

export default Layout;
