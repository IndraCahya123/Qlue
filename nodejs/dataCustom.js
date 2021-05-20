const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const questions = () => {
    return new Promise((resolve, reject) => {
        rl.question("Masukkan data berupa array : ", (data) => {
            resolve(data);
        });
    });
}

const main = async () => {
    const getData = await questions();

    const toJson = JSON.parse(getData);

    let dataKey = Object.keys(toJson[0]);

    let dataValues = [];

    for (let i = 0; i < toJson.length; i++) {
        dataValues.push(Object.values(toJson[i]));
    }

    console.log(dataValues[0]);

    const result = {
        "status": 200,
        "message": "Success to reduce transfer size",
        "data": {
            "h": dataKey,
            "d": dataValues
        }
    }

    console.log(result);

    rl.close();
}

main();