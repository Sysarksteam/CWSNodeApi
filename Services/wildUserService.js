var con = require('../connector');

var wildUserService = {

    getAllWildUser : () => {

        var sql = `select * from wildseve_users`;

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
                    message : "data retrieved successfully",
                    data : data
                });

            });
        });

    },

    findWildUser : inputdata => {

        var sql = `select * from wildseve_users where wls_wsid = ${inputdata.wls_wsid}`;

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
                    message : "data retrieved successfully",
                    data : data
                });

            });
        });

    },

    addWildUser : inputdata => {

        var sql = `insert into wildseve_users set ?`;

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
                    message : "data inserted successfully",
                    insertId : data.insertId
                });

            });
        });


    },

    editWildUser : inputdata => {

        var sql = `update wildseve_users set ? where wls_wsid = ${inputdata.wls_wsid} `;

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
                    message : "updated record successfully",
                    affectedRows : data.affectedRows
                });

            });
        });

    },

    deleteWildUser : inputdata => {

        var sql = `delete from wildseve_users where wls_wsid = ${inputdata.wls_wsid} `;

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
                    message : "record deleted successfully",
                    affectedRows : data.affectedRows
                });

            });
        });


    }
}

module.exports = wildUserService