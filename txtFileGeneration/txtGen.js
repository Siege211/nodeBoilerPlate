const fs = require('fs');

if (fs.access('./generatedTxt',(e)=>{return !!e})){
    fs.mkdir('./generatedTxt', (err) => {
        if (err) throw err
    });
}

for (let i = 0; i<5; i++) {
    const obj = {
        prop1: 'nope',
        prop2:'yep',
        prop3: {
            nestedProp3A: "no way, jose",
            nestedProp3B: "yes. absolutely. yes."
        },
        prop4: `I live in file ${i}`
    }
    const string = JSON.stringify(obj)
    fs.writeFile(`./generatedTxt/test${i}.txt`, string,(err)=>{
        if (err) {
            console.log(err);
            return
        } else {
            console.log(`File ${i} saved successfully`)
        }
    })
}