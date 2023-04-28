import express from "express";
import modules from "./modules";

const app = express();

modules(app);