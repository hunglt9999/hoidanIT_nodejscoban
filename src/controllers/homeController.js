const connection = require('../config/database');


const getHomepage = (req, res) => {
    // res.send('Hello World! &nodemon')
    return res.render('home.ejs')
}

const getABC = (req, res) => {
    res.send('check ABC')
}

const getHoiDanIT = (req, res) => {
    res.render('sample.ejs')
}

const postCreateUser = async (req, res) => {
    let email = req.body.email;
    let name = req.body.myname;
    let city = req.body.city;
    //let {email, name, city} = req.body;   câu lệnh tương đương với 3 dòng kia

    console.log(">>>email =", email, 'name=', name, 'city=', city);

    let [results, fields] = await connection.query(
        `INSERT INTO Users(email, name, city) VALUES(?,?,?)`, [email, name, city],
    );
    console.log(">>>check results:", results);
    res.send('create user success!')

    // connection.query(
    //     'SELECT * FROM Users u',
    //     function (err, results, fields) {
    //         console.log(">>>results= ", results); // results contains rows returned by server
    //     }
    // );

    // const [results, fields] = await connection.query('SELECT * FROM Users u');
    // console.log(">>>check results:", results);
}



const getCreatePage = (req, res) => {
    res.render('create.ejs')
}

module.exports = {
    getHomepage,
    getABC,
    getHoiDanIT,
    postCreateUser,
    getCreatePage
}


