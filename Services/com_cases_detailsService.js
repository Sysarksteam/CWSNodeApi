var con = require('../connector');

var com_cases_detailsService = {

    getAllcom_cases_details : () => {

        var sql = `select * from com_cases_details`;

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
                    message : 'Data retrieved successfully',
                    data : data
                });

            });
        });
    },

    findcom_cases_details : inputdata => {

        var sql = `select * from com_cases_details where com_meta_id = "${inputdata.com_meta_id}"`;

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
                    message : 'Data retrieved successfully',
                    data : data
                });

            });
        });
    },
    
    addcom_cases_details : inputdata => {

        var sql = `insert into com_cases_details set ? `;

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

    updatecom_cases_details : inputdata => {

        var sql = `update com_cases_details set ? where com_meta_id = "${inputdata.com_meta_id}"`;

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
                    message : 'Record updated successfully',
                    data : data
                });

            });
        });

    },

    deletecom_cases_details : inputdata => {

        var sql = `delete from com_cases_details where com_meta_id = "${inputdata.com_meta_id}"`;

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
                    message : 'Record deleted successfully',
                    data : data
                });

            });
        });
        
    }

}

module.exports = com_cases_detailsService