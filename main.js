//===========================================================================//
//                                                                           //
// Daxian Server                                                             //
// Copyright(c) 2018 Qi Wu, Yiran Li, Wenxi Lu                               //
// University of California, Davis                                           //
// MIT Licensed                                                              //
//                                                                           //
//===========================================================================//

const Fs = require('fs');
const Express = require('express')
const Path = require('path')
const Http = require('http')
if (!Fs.existsSync(Path.resolve(__dirname, './dist'))) {
  console.error('Error: "dist" cannot be found')
  return
}
let app = Express()
let http = Http.Server(app)
app.use(Express.static(Path.resolve(__dirname, './dist')))

http.listen(8080, function () {
  console.log('listening on http://localhost:8080')
})
