import styles from "./Header.module.css"
import { BsFillPersonFill } from "react-icons/bs";
import { FaTachometerAlt } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { FaRobot } from "react-icons/fa6";
import { FaRegListAlt } from "react-icons/fa";




export default function header(){
    return (
        <>
            <nav>
                    {/* <div id="horizontal" className={styles.horizontal}>
                        <div id="Logo">Logo da empresa</div>
                    </div> */}
                    <div id="vertical" className={styles.Vertical}>
                        <div className={styles.usuario}>
                            <div className={styles.logo_usuario}>
                                <p className={styles.logo}>{<BsFillPersonFill />}</p>
                            </div>
                            <div>
                                <p>Matricula : 00000</p>
                                <p>Nome: Clecio</p>
                            </div>
                   
                        </div>
                       {/* ----------------------------------------------------- */}
                        <div className={styles.menu_pai}>
                            <ul className={styles.lista_itens}>
                                <li className={styles.item}><IoHome />HOME</li>
                                <li className={styles.item}><FaTachometerAlt />DASHBOARD</li>
                                <li className={styles.item}><FaRobot /> RPA</li>
                                <li className={styles.item}><FaRegListAlt /> AGENDAMENTO</li>
                                <li className={styles.item}>HOME</li>
                            </ul>
                        </div>
                        {/* ----------------------------------------------------- */}
                        <div className={styles.card_btn_sair}>
                            <button className={styles.btn_sair}>Sair</button>
                        </div>
                        
                        

                    </div>
            </nav>
        

        </>
    )
}