var con = require('../connector');

var parkNameService = {

    getAllParkName : () => {

        var sql = `select * from park_master`;

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

    findParkName : inputdata => {

        var sql = `select * from park_master where pm_id = ${inputdata.pm_id}`;

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

    addParkName : inputdata => {

        var sql = `insert into park_master set ?`;

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

    editParkName : inputdata => {

        var sql = `update park_master set ? where pm_id = ${inputdata.pm_id} `;

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

    deleteParkName : inputdata => {

        var sql = `delete from park_master where pm_id = ${inputdata.pm_id} `;

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

module.exports = parkNameService