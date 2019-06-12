var con = require('../connector');

var talukNameService = {

    getAllTalukName : () => {

        var sql = `select * from taluk_master`;

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

    findTalukName : inputdata => {

        var sql = `select * from taluk_master where tm_id = ${inputdata.tm_id}`;

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

    addTalukName : inputdata => {

        var sql = `insert into taluk_master set ?`;

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

    editTalukName : inputdata => {

        var sql = `update taluk_master set ? where tm_id = ${inputdata.tm_id} `;

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

    deleteTalukName : inputdata => {

        var sql = `delete from taluk_master where tm_id = ${inputdata.tm_id} `;

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

module.exports = talukNameService