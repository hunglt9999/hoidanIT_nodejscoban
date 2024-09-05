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

const postCreateUser = (req, res) => {
    let email = req.body.email;
    let name = req.body.myname;
    let city = req.body.city;
    //let {email, name, city} = req.body;   câu lệnh tương đương với 3 dòng kia

    console.log(">>>email =", email, 'name=', name, 'city=', city);

    connection.query(
        `INSERT INTO 
        Users(email, name, city)
        VALUES(?,?,?)`,
        [email, name, city],
        function (err, results) {
            res.send('create user success!')
        }
    );
}

module.exports = {
    getHomepage,
    getABC,
    getHoiDanIT,
    postCreateUser
}


