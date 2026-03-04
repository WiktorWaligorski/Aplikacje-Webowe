import {Link} from "react-router-dom";
import styles from "./index.module.scss";
import {useState, useEffect} from "react";

export function Main() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPosts(data))
            .catch(err => console.log(err));
    }, []);

    return (
        <main className={styles.Index}>
            <h1>Strona główna</h1>
            <br/>
            <h2>Wpisy:</h2>
            <div className={styles.Container}>
                {posts.map(post => (
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