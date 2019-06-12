var con = require('../connector');

var dbService = {

    getAllDBName : () => {

        var sql = `select * from db`;

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

    findDBName : inputdata => {

        var sql = `select * from db where db_id = ${inputdata.db_id}`;

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

    addDBName : inputdata => {

        var sql = `insert into db set ? `;

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

    updateDBName : inputdata => {

        var sql = `update db set ? where db_id = ${inputdata.db_id}`;

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

    deleteDBName : inputdata => {

        var sql = `delete from db where db_id = ${inputdata.db_id}`;

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

module.exports = dbService