var con = require('../connector');

var dc_casesService = {

    getAlldc_cases : () => {
        
        var sql = 'select * from dc_cases';

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
                    message : 'Data fetched successfully',
                    data : data
                });

            });
        });
    },

    finddc_cases : inputdata => {

        var sql = `select * from dc_cases where dcs_meta_id = "${inputdata.dcs_meta_id}"`;

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
                    message : 'data fetched successfully',
                    data : data
                });

            });

        });
    },

    adddc_cases : inputdata => {

        var sql = `insert into dc_cases set ?`;

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
                    message : 'Data inserted successfully',
                    data : data

                });

            });

        });
    },

    updatedc_cases : inputdata => {

        var sql = `update dc_cases set ? where dcs_meta_id = "${inputdata.dcs_meta_id}"`;

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
                    message : 'Record updateed successfully',
                    affectedRows : data.affectedRows
                });

            });
        });
    },

    deletedc_cases : inputdata => {

        var sql = `delete from dc_cases where dcs_meta_id = "${inputdata.dcs_meta_id}"`;
                            
        return new Promise((resolve,reject) => {

            con.query(sql,inputdata,(err,data) => {

                if(err)
                reject({
                    status : 500,
                    success : true,
                    message : err.sqlMessage,
                    error : err.message
                });

                resolve({
                    status : 200,
                    success : true,
                    message : 'Record deleted successfully',
                    data : data
                })
            });
        });
    }

    

}

module.exports = dc_casesService