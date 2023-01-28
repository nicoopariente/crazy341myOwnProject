"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const database_services_1 = require("./services/database.services");
const index_1 = require("./routes/index");
const dotenv_1 = __importDefault(require("dotenv"));
const session = require('express-session');
const passport = require('passport');
require('./middleware/auth');
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
(0, database_services_1.connectToDatabase)()
    .then(() => {
    app.use(session({ secret: 'cats', resave: false, saveUninitialized: true }));
    app.use(passport.initialize());
    app.use(passport.session());
    app.use("/", index_1.Router);
    app.listen(port, () => {
        console.log(`Server started at http://localhost:${port}`);
    });
})
    .catch((error) => {
    console.error("Database connection failed", error);
    process.exit();
});
//# sourceMappingURL=server.js.map