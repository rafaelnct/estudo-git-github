const express = require("express");

const app = express();

app.get("/test", (res, rep) => {
	return res.json({ hello: "world" });
});

app.listen(3333 );
