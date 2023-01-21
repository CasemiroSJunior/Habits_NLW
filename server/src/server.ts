import fastify from "fastify";
import cors from '@fastify/cors'
import { appRoutes } from "./routes";

const app = fastify()

app.register(cors)
/**
 * Método HTTP: Get, Post, Put, Patch, Delete
 */
app.register(appRoutes)


app.listen({
    port: 3107,
    host: '0.0.0.0'
}).then(()=> {
    console.log("HTTP Server Running")
})