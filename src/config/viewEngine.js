const path = require('path');
const express = require('express');

const configViewEngine = (app) => {
    // console.log(">>>check_dirname:", __dirname)
    app.set('views', path.join('./src', 'views'));
    app.set('view engine', 'ejs')

    //config static file images/css/js trong public
    app.use(express.static(path.join('./src', 'public')));
}

module.exports = configViewEngine;