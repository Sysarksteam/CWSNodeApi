var con = require('../connector');

var hwc_case_hdService = {

    getAllhwc_case_hd : () => {

        var sql = `select * from hwc_case_hd`;

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

    findhwc_case_hd : inputdata => {

        var sql = `select * from hwc_case_hd where hwc_meta_id = "${inputdata.hwc_meta_id}"`;

        return new Promise((resolve,reject) => {

            con.query(sql,inputdata,(err,data) => {

                if(err)
                reject({
                   status : 500,
                   success : false,
                   message : err.sqlMessage,
                   data : data
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
    
    addhwc_case_hd : inputdata => {

        var sql = `insert into hwc_case_hd set ?`;

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

    updatehwc_case_hd : inputdata => {

        var sql = `update hwc_case_hd set ? where hwc_meta_id = "${inputdata.hwc_meta_id}"`;

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
                    message : 'Data updated successfully',
                    data : data 
                });

            });
        });
    },

    deletehwc_case_hd : inputdata => {

        var sql = `delete from hwc_case_hd where hwc_meta_id = "${inputdata.hwc_meta_id}"`;

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
                    data : data
                });

            });
        });
    }
}

module.exports = hwc_case_hdService