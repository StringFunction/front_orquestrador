import styles from "./Header.module.css"
import { BsFillPersonFill } from "react-icons/bs";
import { FaTachometerAlt } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { FaRobot } from "react-icons/fa6";
import { FaRegListAlt } from "react-icons/fa";
import {Vertical,Usuario} from "./Header.style"
import { Link } from "react-router-dom";



export default function header(){
    return (
        <>
            <nav>
                    {/* <div id="horizontal" className={styles.horizontal}>
                        <div id="Logo">Logo da empresa</div>
                    </div> */}
                    <div id="vertical" className={Vertical}>
                        <div className={Usuario}>
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
                                <li className="w-full h-full"><Link to="/" className={styles.item}><IoHome /> Home</Link></li>
                                <li className="w-full h-full"><Link to="/Dashboard" className={styles.item}> <FaTachometerAlt /> DASHBOARD</Link></li>
                                <li className="w-full h-full"><Link to="/Rpa" className={styles.item}><FaRobot /> RPA</Link></li>
                                <li className="w-full h-full"><Link to="/Agendamento" className={styles.item}><FaRegListAlt />AGENDAMENTO</Link></li>
                            </ul>
                        </div>
                        {/* ----------------------------------------------------- */}
                        <div className={styles.card_btn_sair}>
                                <button className={`w-full h-full`}><Link to="/Login" className={styles.item}>Sair</Link></button>
                        </div>
                        
                        

                    </div>
            </nav>
        

        </>
    )
}