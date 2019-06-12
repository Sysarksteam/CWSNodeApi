var con = require('../connector');

var rangeNameService = {

    getAllRangeName : () => {

        var sql = `select * from range_master`;

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

    findRangeName : inputdata => {

        var sql = `select * from range_master where rm_id = ${inputdata.rm_id}`;

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

    addRangeName : inputdata => {

        var sql = `insert into range_master set ?`;

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

    editRangeName : inputdata => {

        var sql = `update range_master set ? where rm_id = ${inputdata.rm_id} `;

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

    deleteRangeName : inputdata => {

        var sql = `delete from range_master where rm_id = ${inputdata.rm_id} `;

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

module.exports = rangeNameService