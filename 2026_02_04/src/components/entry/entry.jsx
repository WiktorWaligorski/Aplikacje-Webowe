import styles from "./entry.module.scss";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

export default function Entry() {
    const { id} = useParams();
    const [post, setPosts] = useState([]);
    const [user, setUser] = useState([]);
    const [comment, setComments] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.json())
            .then(data => {
                setPosts(data);
                return fetch(`https://jsonplaceholder.typicode.com/users/${data.userId}`);
            })
            .then(res => res.json())
            .then(userData => setUser(userData));

        fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        .then(res => res.json())
        .then(data => {
            setComments(data);
        })
    }, []);

    return (
        <article className={styles.Entry}>
            <h1>{post.title}</h1>
            <h2>Autor: {user.name}</h2>
            <p>{post.body}</p>
            <br/>
            <h3>Komentarze:</h3>
            {comment.map(comment => (
                <div key={comment.id}>
                    <h4>{comment.name}</h4>
                    <h5>{comment.email}</h5>
                    <p>{comment.body}</p>
                </div>
            ))}
        </article>
    )
}