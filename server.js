require("./settings");
const http = require("http");
const app = require("./index");

const port = process.env.PORT || 8080; // Pastikan port diambil dari environment variables atau default ke 8080
const creator = "Matzz"; // Ganti dengan nama pencipta jika belum didefinisikan di settings

http.createServer(app).listen(port, () => {
    console.log(`
        ███╗   ███╗ █████╗ ████████╗██████████╗
        ████╗ ████║██╔══██╗╚══██╔══╝██╔══════╝
        ██╔████╔██ ███████║   ██║   ███████╗  
        ██║╚██╔╝██║██╔══██║   ██║   ██╔═══██╗ 
        ██║ ╚═╝ ██║██║  ██║   ██║   ███████║ 
        ╚═╝     ╚═╝╚═╝  ╚═╝   ╚═╝   ╚══════╝

Server running on http://localhost:${port}
Hello ${creator}
    `);
});
