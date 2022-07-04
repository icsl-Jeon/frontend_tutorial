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
            <div className={styles.footer}>
                <Footer></Footer>
            </div>
        </Fragment>
    )
}

export default Layout;
