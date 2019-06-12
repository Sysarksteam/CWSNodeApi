var con = require('../connector');

var animaltblService = {

    getAllAnimals : () => {

        var sql = `select * from animal_master`;

        return new Promise((resolve,reject) => {

            con.query(sql,(err,data) => {

                if(err) 
                reject({
                    status : 500,
                    success : false,
                    message : err.sqlMessage,
                    error : err.message
                });

                resolve({
                    status : 200,
                    success : true,
                    message : 'data retrieved successfully',
                    data : data
                });

            });

        });

    },

    findAnimal : inputdata => {

        var sql = `select * from animal_master where am_id = ${inputdata.am_id}`;

        return new Promise((resolve,reject) => {

            con.query(sql,inputdata,(err,data) => {

                if(err) 
                reject({
                    status : 500,
                    success : false,
                    message : err.sqlMessage,
                    error : err.message
                });

                resolve({
                    status : 200,
                    success : true,
                    message : 'data retrieved successfully',
                    data : data
                });

            });

        });

    },

    addAnimal : inputdata => {

        var sql = `insert into animal_master set ? `;

        return new Promise((resolve,reject) => {

            con.query(sql,inputdata,(err,data) => {

                if(err) 
                reject({
                    status : 500,
                    success : false,
                    message : err.sqlMessage,
                    error : err.message
                });

                resolve({
                    status : 200,
                    success : true,
                    message : 'data inserted successfully',
                    insertId : data.insertId
                });

            });

        });

    },

    updateAnimal : inputdata => {

        var sql = `update animal_master set ? where am_id = ${inputdata.am_id}`;

        return new Promise((resolve,reject) => {

            con.query(sql,inputdata,(err,data) => {

                if(err) 
                reject({
                    status : 500,
                    success : false,
                    message : err.sqlMessage,
                    error : err.message
                });

                resolve({
                    status : 200,
                    success : true,
                    message : 'updated records successfully',
                    affectedRows : data.affectedRows
                });

            });

        });

    },

    deleteAnimal : inputdata => {

        var sql = `delete from animal_master where am_id = ${inputdata.am_id}`;

        return new Promise((resolve,reject) => {

            con.query(sql,inputdata,(err,data) => {

                if(err) 
                reject({
                    status : 500,
                    success : false,
                    message : err.sqlMessage,
                    error : err.message
                });

                resolve({
                    status : 200,
                    success : true,
                    message : 'Records deleted successfully',
                    affectedRows : data.affectedRows
                });

            });

        });

    }
}

module.exports = animaltblService