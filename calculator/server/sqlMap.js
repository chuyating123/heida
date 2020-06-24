const sqlMap = {
       Stu: {
         add1: 'insert into common_record(record_time,record_comment) values (?,?)',
         show1: 'select * from common_record',
         del1: 'delete from common_record',
         add2: 'insert into advanced_record(record_time,record_comment) values (?,?)',
         show2: 'select * from advanced_record',
         del2: 'delete from advanced_record',
         add3: 'insert into finance_record(record_time,record_comment) values (?,?)',
         show3: 'select * from finance_record',
         del3: 'delete from finance_record',
        //  update: 'update axios_demo set stu_name = ?,stu_sex = ?,stu_college = ?,stu_class = ? where stu_Id = ?'
       }
     }
     
    module.exports = sqlMap
   