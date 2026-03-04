import styles from "./entry.module.scss";

export const content= [
    "Half-Life 3 Zapowiedziany?",

    "Gaming",

    "Valve przerwało wieloletnie milczenie, zegary w biurze znów ruszyły, a fizyka świata właśnie zaczęła się zachowywać podejrzanie znajomo. Gordon Freeman ponoć odkurzył łom, internet eksplodował.",

    "Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem " +
    "ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem " +
    "ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem " +
    "ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum" +
    "Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem " +
    "ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem " +
    "ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem " +
    "ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum"
]

export default function Entry() {
    return (
        <article className={styles.Entry}>
            <h1>{content[0]}</h1>
            <h2>{content[1]}</h2>
            <h3>{content[2]}</h3>
            <p>{content[3]}</p>
        </article>
    )
}