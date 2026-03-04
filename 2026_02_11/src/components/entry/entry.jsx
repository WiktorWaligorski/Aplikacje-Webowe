import styles from "./entry.module.scss";
import {useParams} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";

export default function Entry() {
    const { id} = useParams();

    const { isPending: postPending, error: postError, data: postData } = useQuery({
        queryKey: ['post'],
        queryFn: () =>
            fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res) =>
                res.json(),
            ),
    })

    const { isPending: userPending, error: userError, data: userData } = useQuery({
        queryKey: ['users'],
        queryFn: () =>
            fetch(`https://jsonplaceholder.typicode.com/users/${postData.userId}`).then((res) =>
                res.json(),
            ),
    })

    const { isPending: commentsPending, error: commentsError, data: commentsData } = useQuery({
        queryKey: ['comments'],
        queryFn: () =>
            fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`).then((res) =>
                res.json(),
            ),
    })

    if (postPending || userPending || commentsPending) return 'Loading...'

    if (postError) return 'An error has occurred: ' + postError.message
    if (userError) return 'An error has occurred: ' + userError.message
    if (commentsError) return 'An error has occurred: ' + commentsError.message

    return (
        <article className={styles.Entry}>
            <h1>{postData.title}</h1>
            <h2>Autor: {userData.name}</h2>
            <p>{postData.body}</p>
            <br/>
            <h3>Komentarze:</h3>
            {commentsData.map(comment => (
                <div key={comment.id}>
                    <h4>{comment.name}</h4>
                    <h5>{comment.email}</h5>
                    <p>{comment.body}</p>
                </div>
            ))}
        </article>
    )
}