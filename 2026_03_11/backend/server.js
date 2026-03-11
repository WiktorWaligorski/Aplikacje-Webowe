import cors from "cors";

import express from "express";

const app = express();

app.use(cors());
app.use(express.json());

let posts = [
    {
        id: 1,
        userId: 1,
        title: "Post numer 1",
        body: "Pościk testowy 1"
    },
    {
        id: 2,
        userId: 1,
        title: "Post numer 2",
        body: "Pościk testowy 2"
    }
];

let comments = [
    {
        id: 1,
        postId: 1,
        name: "Andrzej",
        email: "andrzejowy@mail.com",
        body: "Dobrze gada"
    },
    {
        id: 2,
        postId: 2,
        name: "Andrzej",
        email: "andrzejowy@mail.com",
        body: "działa"
    }
];

app.get("/posts", (req, res) => {
    res.json(posts);
});

app.get("/posts/:id", (req, res) => {
    const post = posts.find(p => p.id == req.params.id);

    if (!post) return res.status(404).json({ message: "Post not found" });

    const postComments = comments.filter(c => c.postId == req.params.id);

    res.json({
        ...post,
        comments: postComments
    });
});

app.post("/posts/:id/comments", (req, res) => {
    const newComment = {
        id: comments.length + 1,
        postId: Number(req.params.id),
        name: req.body.name,
        email: req.body.email,
        body: req.body.body
    };

    comments.push(newComment);

    const postComments = comments.filter(c => c.postId == req.params.id);

    res.json(postComments);
});

app.listen(5000, () => {
    console.log("Server działa na porcie 5000");
});