import express from 'express'

const app = express()

/**
 * @module api
 */

/**
 * Index Route 
 * @name index
 * @path {GET} / 
 */

app.get('/'), (res, req) => res.send(('Welcome'))

/**
 * Products route
 * 
 * @name Prodcuts
 * @path {POST} /user
 */

app.post('/user'), (res, req) => res.send(('Welcome'))

/**
 * Signi route
 * 
 * @name Signi
 * @path {POST} /user
 */

 app.post('/user'), (res, req) => res.send(('Welcome'))