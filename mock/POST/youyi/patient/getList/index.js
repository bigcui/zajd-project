

module.exports = function () {

    let data = [{
        id: 1290,
        name: '李明',
        mobile: '18989787867',
        id_card: '410201111222121212',
        passid: 123,
        is_default: 0,
        ctime: 1514364633,
        utime: 1514364633
    }, {
        id: 1298,
        name: '张恒睿',
        mobile: '15235678907',
        id_card: '12397878778',
        passid: 123,
        is_default: 1,
        ctime: 1514364644,
        utime: 1514364644
    }];

    let dataWrap = {
        "status": 0,
        "statusInfo": "",
        "data": data,
        "serverlogid": 1514364648128
    };
    return dataWrap;
};
