var con = require('../connector');

var villageNameService = {

    getAllVillageName : () => {

        var sql = `select * from village_master`;

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

    findVillageName : inputdata => {

        var sql = `select * from village_master where vm_id = ${inputdata.vm_id}`;

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

    addVillageName : inputdata => {

        var sql = `insert into village_master set ?`;

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

    editVillageName : inputdata => {

        var sql = `update village_master set ? where vm_id = ${inputdata.vm_id} `;

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

    deleteVillageName : inputdata => {

        var sql = `delete from village_master where vm_id = ${inputdata.vm_id} `;

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

module.exports = villageNameService