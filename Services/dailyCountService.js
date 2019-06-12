var con = require('../connector');

var dailyCountService = {

    getAllDailyCount : () => {

        var sql = `select * from daily_count`;

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

    findDailyCount : inputdata => {

        var sql = `select * from daily_count where dc_metainstance_id = "${inputdata.dc_metainstance_id}"`;

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

    addDailyCount : inputdata => {

        var sql = `insert into daily_count set ? `;

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
                    data : data
//                    insertId : data.insertId
                });

            });

        });

    },

    updateDailyCount : inputdata => {

        var sql = `update daily_count set ? where dc_metainstance_id = "${inputdata.dc_metainstance_id}"`;

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

    deleteDailyCount : inputdata => {

        var sql = `delete from daily_count where dc_metainstance_id = "${inputdata.dc_metainstance_id}"`;

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

module.exports = dailyCountService