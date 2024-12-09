/**
 * @param {string} date
 * @return {string}
 */
var convertDateToBinary = function(date) {
    const [year,month,day] = date.split("-");
    let binaryYear = (+year).toString(2);
    let binaryMonth = (+month).toString(2);
    let binaryDay = (+day).toString(2);
     
    return binary =binaryYear+"-"+binaryMonth+"-"+binaryDay

};
