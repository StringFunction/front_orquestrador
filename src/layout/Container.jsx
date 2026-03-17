import Header from "./Header"
import Footer from "./Footer"
import styles from "./Conteiner.module.css"
export default function conteiner(props){
    return (
        <>
            <Header />
                <div className={styles.min_altura}> {props.children}</div>
            <Footer />
        </>
    )
    
}