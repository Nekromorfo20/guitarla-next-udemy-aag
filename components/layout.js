import Head from "next/head"
import Header from "../components/header"
import Footer from "../components/footer"

const Layout = ({ children, tittle = "", description = "" }) => {
  return (
    <>
        <Head>
            <title>{`GuitarLA - ${tittle}`}</title>
            <meta name="description" content={description} />
        </Head>

        <Header />
        {children}
        <Footer />
    </>
  )
}

export default Layout