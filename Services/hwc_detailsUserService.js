var con = require('../connector');

var hwc_detailsUserService = {

    getAllhwc_detailsUser : () => {

        var sql = `select * from hwc_details`;

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
                    message : `Data retrieved successfully`,
                    data : data
                });

            });
        });

    },

    findhwc_detailsUser : inputdata => {

        var sql = `select * from hwc_details where hwc_metainstance_id = "${inputdata.hwc_metainstance_id}"`;

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
                    message : `Data retrieved successfully`,
                    data : data
                });

            });
        });

    },

    addhwc_detailsUser :inputdata => {

        var sql = `insert into hwc_details set ? `;
        
        return new Promise((resolve,reject) => {

            con.query(sql,inputdata,(err,data) =>{

                if(err) 
                reject({
                    status : 500,
                    success : false,
                    message : err.message,
                    error : err.message
                });

                resolve({
                    status : 200,
                    success : true,
                    message : `Data inserted successfully`,
                    data : data
                });

            });
        });

    },

    edithwc_detailsUser : inputdata => {

        var sql = `update hwc_details set ? where hwc_metainstance_id = "${inputdata.hwc_metainstance_id}"`;

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
                    message : `Records updated successfully`,
                    data : data
                });
    
            });

        });
    },

    deletehwc_detailsUser : inputdata => {

        var sql =  `delete from hwc_details where hwc_metainstance_id = "${inputdata.hwc_metainstance_id}"`;

        return new Promise((resolve,reject) => {

            con.query(sql,inputdata,(err,data) => {

                if(err) 
                reject({
                    status : 500,
                    success : false,
                    message : err.message,
                    error : err.message
                });

                resolve({
                    status : 200,
                    success : true,
                    message : `Records deleted successfully`,
                    data : data
                });
                
            });
        });
    }

}

module.exports = hwc_detailsUserService