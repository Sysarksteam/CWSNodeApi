var con = require('../connector');

var hwc_case_cropService = {

    getAllhwc_case_crop : () => {
        
        var sql = 'select * from hwc_case_crop';

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

    findhwc_case_crop : inputdata => {

        var sql = `select * from hwc_case_crop where hwc_meta_id = "${inputdata.hwc_meta_id}"`;

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

    addhwc_case_crop : inputdata => {

        var sql = `insert into hwc_case_crop set ?`;

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

    updatehwc_case_crop : inputdata => {

        var sql = `update hwc_case_crop set ? where hwc_meta_id = "${inputdata.hwc_meta_id}"`;

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

    deletehwc_case_crop : inputdata => {

        var sql = `delete from hwc_case_crop where hwc_meta_id = "${inputdata.hwc_meta_id}"`;
                            
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

module.exports = hwc_case_cropService