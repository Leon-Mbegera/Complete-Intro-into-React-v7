import express from "express";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import fs from "fs";
import App from "../src/App";


const PORT = process.env.PORT || 3000;

const html = fs.readFileSync("dist/frontend/index.html").toString();

