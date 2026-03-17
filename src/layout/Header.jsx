import styles from "./Header.module.css"




export default function header(){
    return (
        <>
            <nav>
                    <div id="horizontal" className={styles.horizontal}>
                        <div id="Logo">Logo da empresa</div>
                        <div>
                       
                            <div>
                                <p>BUTTOM DE SAIR</p>
                            </div>
                        </div>

                    </div>
                    <div id="vertical" className={styles.Vertical}>
                        <div>
                            <p>Logo de Usuario</p>
                            <p>Matricula : 00000</p>
                            <p>Nome: Clecio</p>
                        </div>
                        <div>
                            <ul>
                                <li>HOME</li>
                                <li>HOME</li>
                                <li>HOME</li>
                                <li>HOME</li>
                                <li>HOME</li>
                            </ul>
                        </div>
                        
                        

                    </div>
            </nav>
        

        </>
    )
}