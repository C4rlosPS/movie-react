import styles from "./Header.module.css"

function Header(){
    return(
        <header className={styles.Header}>
            <span className={styles.nome}>Show Films</span>
            <nav>
                <a href={"/"}>Home   </a>
                <a href={"/Assistir"}>  Assistir</a>

            </nav>
        </header>
    )
}

export default Header