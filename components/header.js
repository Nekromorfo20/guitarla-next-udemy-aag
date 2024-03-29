import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import styles from "../styles/header.module.css"

const Header = () => {
    
    const router = useRouter()

    return (
        <header className={styles.header}>
            <div className={`contenedor ${styles.barra}`}>
                <Link legacyBehavior href={"/"}>
                    <a>
                        <Image src="/img/logo.svg" width={300} height={40} alt="Imagen logotipo" />
                    </a>
                </Link>

                <nav className={styles.navegacion}>
                    <Link
                        href={"/"}
                        className={ router.pathname === "/" ? styles.active : '' }
                    >Inicio</Link>
                    <Link
                        href={"/nosotros"}
                        className={ router.pathname === "/nosotros" ? styles.active : '' }
                    >Nosotros</Link>
                    <Link
                        href={"/tienda"}
                        className={ router.pathname === "/tienda" ? styles.active : '' }
                    >Tienda</Link>
                    <Link
                        href={"/blog"}
                        className={ router.pathname === "/blog" ? styles.active : '' }
                    >Blog</Link>

                    <Link legacyBehavior href={"/carrito"}>
                        <a className={styles.carrito}>
                            <Image src="/img/carrito.png" width={30} height={25} alt="Imagen carrito"/>
                        </a>
                    </Link>
                </nav>
            </div>
        </header>
    )
  }
  
  export default Header
  