import { db } from "./config/Database.js";
import session from "express-session";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import compteRoutes from "./routes/compte.js";
import authRoutes from "./routes/auth.js";
import carRoutes from "./routes/cars.js";
import depenseRoutes from "./routes/depense.js";
import driversRoutes from "./routes/drivers.js";
import eventsRoutes from "./routes/events.js";
import preventifRoutes from "./routes/preventif.js";
import usersRoutes from "./routes/users.js";
import curatifRoutes from "./routes/curatif.js";
import multer from "multer";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 4000;
const SESSION_SECRET = process.env.SESSION_SECRET;
const sixtyDaysInSeconds = 5184000; // 60 * 24 * 60 * 60

const imageURL = process.env.ORIGIN_FRONTEND_SERVER;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cookieParser()); // any string ex: 'keyboard cat'

app.use(
  cors({
    credentials: true,
    origin: true,
  })
);

app.use(
  session({
    name: "session_id",
    saveUninitialized: true,
    resave: false,
    secret: SESSION_SECRET, // Secret key,
    cookie: {
      path: "/",
      httpOnly: true,
      maxAge: 1 * 60 * 1000,
      sameSite: "none",
      secure: true,
    },
  })
);

// app middleware
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.use(cors({
  origin: [process.env.ORIGIN_FRONTEND_SERVER],
  methods: ['Access-Control-Allow-Methods','GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
  allowedHeaders: "Origin, X-Requested-With, x-access-token, role, Content, Accept, Content-Type, Authorization",
  allowedHeaders: "Access-Control-Allow-Methods",
  allowedHeaders: ["Access-Control-Allow-Headers","*"],
  allowedHeaders: ['Access-Control-Allow-Credentials', true],
  credentials: true, // enable set cookie
  optionsSuccessStatus: 200,
  credentials: true,
}));


const storageCar = multer.diskStorage({
	destination: function (req, file, cb) {
	  cb(null, '../rmci-gestion/public/uploads/vehicules')
	},
	filename: function (req, file, cb) {
	  cb(null, Date.now() + file.originalname)
	}
});

const storageDriver = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, `{imageURL}/public/uploads/drivers/avatars`)
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + file.originalname)
    }
});

const storageContrat = multer.diskStorage({
      destination: function (req, file, cb) {
        cb(null, `{imageURL}/public/uploads/drivers/contrats`)
      },
      filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname)
      }
});
  
const uploadCar = multer({ storage: storageCar });
const uploadDriver = multer({ storage: storageDriver });
const uploadContrat = multer({ storage: storageContrat });

app.post("/api/upload-car", uploadCar.single("file"), (req, res) => {
  const file = req.file;
  res.status(200).json(file.filename);
});

app.post("/api/upload-driver", uploadDriver.single("file"), (req, res) => {
  const file = req.file;
  res.status(200).json(file.filename);
});

app.post("/api/upload-contrat", uploadContrat.single("file"), (req, res) => {
  const file = req.file;
  res.status(200).json(file.filename);
});

app.use("/api/compte", compteRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/cars", carRoutes);
app.use("/api/depenses", depenseRoutes);
app.use("/api/drivers", driversRoutes);
app.use("/api/events", eventsRoutes);
app.use("/api/preventif", preventifRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/curatif", curatifRoutes);

try {
  await db.authenticate();
  console.log("Base de donnée connectée");
} catch (error) {
  console.error();
}

app.listen(PORT, () => console.log(`Serveur fonctionne sur le port ${PORT}`));


function initial() {
  Role.create({
    id: 1,
    name: "Administrateur"
  });
 
  Role.create({
    id: 2,
    name: "Comptabilité"
  });
 
  Role.create({
    id: 3,
    name: "Logistique"
  });
}
