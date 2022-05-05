const express = require("express");


const app = express();
const port = 3000;
app.use(express.static("./routes/public"));
app.use("/main", require("./routes/main"));
app.use("/first", require("./routes/first"));
app.use("/registration", require("./routes/registration"));
app.use("/SignIn", require("./routes/SignIn"));

app.listen(port, () =>
    console.log(`App listening at http://localhost:${port}`)
);