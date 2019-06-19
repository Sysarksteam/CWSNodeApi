var con = require('../connector');

hwc_case_hiService = {

    getAllhwc_case_hi : () => {

        var sql = `select * from hwc_case_hi`;

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

    findhwc_case_hi : inputdata => {

        var sql = `select * from hwc_case_hi where hwc_meta_id = "${inputdata.hwc_meta_id}"`;

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
    
    addhwc_case_hi : inputdata => {

        var sql = `insert into hwc_case_hi set ? `;

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

    updatehwc_case_hi : inputdata => {

        var sql = `update hwc_case_hi set ? where hwc_meta_id = "${inputdata.hwc_meta_id}"`;

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
                    affectedRows : data.affectedRows
                });

            });
        });

    },

    deletehwc_case_hi : inputdata => {

        var sql = `delete from hwc_case_hi where hwc_meta_id = "${inputdata.hwc_meta_id}"`;

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

module.exports = hwc_case_hiService