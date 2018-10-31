module.exports = function () {

    let data = {
        appKey: 'MMMzNH',
        tpOrderId: '10000003',
        dealId: '1694954420',
        rsaSign: encodeURIComponent('p0\/c7e1Q8aIIUnitdY7ZYViFfAkL4w2wFQ9mb5h6jb1EhKkkwKgMGy3ZkjQzopAovi5eGObJB+Elq8SzZX\/fcuNe8FZUIUv+s5wWxejSP3XgiA+AEwkVS0TbfzB6zpdvTVaqps9yzf2SaCeX6otCqzjkSXqs78W04EgHBC2qO4w='),
        totalAmount: 100
    };

    let dataWrap = {
        "status": 0,
        "statusInfo": "",
        "data": data
    };
    return dataWrap;
};
