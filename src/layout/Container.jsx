import Header from "./Header"
import Footer from "./Footer"
import styles from "./Conteiner.module.css"
import { Outlet } from "react-router-dom";
export default function conteiner(props){
    return (
        <>
            <Header />
                <div className={styles.Conteiner}>
                      <Outlet />
                </div>
            <Footer />
        </>
    )
    
}