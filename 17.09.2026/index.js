import { readFile, writeFile } from "fs/promises";
import http from "http";

const hostname = '127.0.0.1'
const port = 3000
const server = http.createServer(async (req, res) => {
    const url = req.url;
    const parsedUrl = new URL(req.url, "http://localhost:" + port);

    switch (parsedUrl.pathname) {
        case "/":
            res.statusCode = 200;
            res.setHeader("Content-Type", "text/html");
            res.write(await readFile("html/index.html"));
            res.end();
            break;
        case "/kontakt":

            const name = parsedUrl.searchParams.get("fname");
            const mail = parsedUrl.searchParams.get("mail");
            const msg = parsedUrl.searchParams.get("msg");

            const timestamp = Date.now();
            if (name && mail && msg) {
                await writeFile(`messages/message_${timestamp}.json`, JSON.stringify({name, mail, msg}));
                console.log("Message sent");
            }

            res.statusCode = 200;
            res.setHeader("Content-Type", "text/html");
            res.write(await readFile("html/contact.html"));
            res.end();
            break;
    }
})
server.listen(port, () => {
    console.log(`server running at http://${hostname}:${port}`);
})