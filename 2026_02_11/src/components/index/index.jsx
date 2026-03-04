import {Link} from "react-router-dom";
import styles from "./index.module.scss";
import {useQuery} from "@tanstack/react-query";

export function Main() {

        const { isPending, error, data } = useQuery({
            queryKey: ['posts'],
            queryFn: () =>
                fetch('https://jsonplaceholder.typicode.com/posts').then((res) =>
                    res.json(),
                ),
        })


        if (isPending) return 'Loading...'

        if (error) return 'An error has occurred: ' + error.message

    return (
        <main className={styles.Index}>
            <h1>Strona główna</h1>
            <br/>
            <h2>Wpisy:</h2>
            <div className={styles.Container}>
                {data.map(post => (
                    <article key={post.id}>
                        <Link to={`/wpis/${post.id}`}>
                            <h4>{post.title}</h4>
                            <p>{post.body.substring(0, 50)}...</p>
                        </Link>
                    </article>
                ))}
            </div>
        </main>
    )
}