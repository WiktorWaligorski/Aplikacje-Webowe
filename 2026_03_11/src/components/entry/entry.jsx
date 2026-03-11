import styles from "./entry.module.scss";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Entry() {
    const { id } = useParams();

    const [postData, setPostData] = useState(null);
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState({
        name: "",
        email: "",
        body: ""
    });

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const postResponse = await fetch(`http://localhost:5000/posts/${id}`);
                const postData = await postResponse.json();

                setPostData(postData);
                setComments(postData.comments || []);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchPost();
    }, [id]);

    const addComment = async (e) => {
        e.preventDefault();

        if (!newComment.name || !newComment.email || !newComment.body) return;

        const response = await fetch(`http://localhost:5000/posts/${id}/comments`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: newComment.name,
                email: newComment.email,
                body: newComment.body
            })
        });

        const updatedComments = await response.json();

        setComments(updatedComments);

        setNewComment({
            name: "",
            email: "",
            body: ""
        });
    };

    if (loading) return "Loading...";
    if (error) return "An error has occurred: " + error.message;

    return (
        <article className={styles.Entry}>
            <h1>{postData.title}</h1>
            <h2>Autor: {postData.userId}</h2>
            <p>{postData.body}</p>

            <br />

            <h3>Komentarze:</h3>
            {comments.map(comment => (
                <div key={comment.id}>
                    <h4>{comment.name}</h4>
                    <h5>{comment.email}</h5>
                    <p>{comment.body}</p>
                </div>
            ))}

            <form onSubmit={addComment}>
                <label>
                    Imię
                    <input
                        type="text"
                        value={newComment.name}
                        onChange={(e) =>
                            setNewComment({ ...newComment, name: e.target.value })
                        }
                    />
                </label>

                <label>
                    Mail
                    <input
                        type="email"
                        value={newComment.email}
                        onChange={(e) =>
                            setNewComment({ ...newComment, email: e.target.value })
                        }
                    />
                </label>

                <label>
                    Komentarz
                    <textarea
                        value={newComment.body}
                        onChange={(e) =>
                            setNewComment({ ...newComment, body: e.target.value })
                        }
                    />
                </label>

                <button type="submit">Dodaj komentarz</button>
            </form>
        </article>
    );
}