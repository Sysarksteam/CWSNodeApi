var con = require('../connector');

var colortblService = {

    getAllColors : () => {

        var sql = `select * from color_master`;

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

    findColorCode : inputdata => {

        var sql = `select * from color_master where cm_color_id = ${inputdata.cm_color_id}`;
        console.log(sql)
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

    addColor : inputdata => {

        var sql = `insert into color_master set ? `;

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

    updateColor : inputdata => {

        var sql = `update color_master set ? where cm_color_id = ${inputdata.cm_color_id}`;

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
                    data : data
                });

            });

        });

    },

    deleteColor : inputdata => {

        var sql = `delete from color_master where cm_color_id = ${inputdata.cm_color_id}`;

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

module.exports = colortblService