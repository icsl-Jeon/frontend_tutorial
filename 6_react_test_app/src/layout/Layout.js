import Footer from './Footer'
import Header from './Header'
import {Fragment} from "react";
import styles from './style.module.css'

const Layout = () => {
    return (
        <Fragment>
            <Header></Header>
            <main className={styles.main}>
                main contents here
            </main>
            <Footer></Footer>
        </Fragment>
    )
}

export default Layout;
