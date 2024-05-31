const Koa = require("koa");
const dotenv = require("dotenv");
const bodyParser = require("koa-bodyparser");
const userRouter = require("./router/userRouter");
const Router = require('koa-router');
const cors = require('@koa/cors');
 



const router = new Router();
dotenv.config();
const app = new Koa();
const PORT = process.env.PORT;

app.use(bodyParser());
app.use(cors());

router.use("/user", userRouter);

app.use(router.routes());
app.use(router.allowedMethods());


app.listen(3000, () => {
    console.log(`Server is running`);
});


