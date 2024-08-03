const http = require("http");
const PORT = 3000;
// node.jsが標準で用意しているファイルを処理するためのライブラリ
const html = require("fs").readFileSync("./index.html");

// ドキュメント
// https://nodejs.org/api/http.html#class-httpagent

// webサーバーを作成
const server = http.createServer((req ,res) => {
    // ブラウザからアクセスが来た時の処理
    res.writeHead(200, {"Content-Type": "type/html"});
    res.write(html);
    res.end();
});

server.listen(PORT);
