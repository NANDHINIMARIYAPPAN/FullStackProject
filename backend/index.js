const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const api = require('./router/api')
const app = express()
const path = require('path')


// export 

global.__basedir = __dirname;
app.use(cors());
// app.use(cors(), function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
//     next();
// });
app.use(cors())
app.use(bodyParser.json())
app.use(express.json({ limit: '50mb' }));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }));
// For public folder access
app.use("/public", express.static(path.join(__dirname, 'public')));

app.use("/public/images", express.static(path.join(__dirname, 'images')));

app.use('/api', api)

const port = process.env.PORT||9876

app.set('views', path.join(global.__basedir, 'views'));
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    console.log("hello")
})
app.listen(port, () => {
    console.log(`server running on :${port}`);
})  
