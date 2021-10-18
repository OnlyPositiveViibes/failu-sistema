const data = require('./lib/data.js');


data.create('darzoves', 'pomidoras', { text: 'Lietuvos raudonasis' }, (err, msg) => {
    console.log(err, msg);
    console.log('Sekantys zingsniai po bandymo sukurti faila....');
});

// data.create('books', 'du-gaideliai', { text: 'Baltus zirnius kule' }, (err, msg) => {
//     console.log(err, msg);
//     console.log('Sekantys zingsniai po bandymo sukurti faila....');
// });
// data.create('books', 'dievu miskas', { text: 'Amen' }, (err, msg) => {
//     console.log(err, msg);
//     console.log('Sekantys zingsniai po bandymo sukurti faila....');
// });
// data.create('books', 'anyksciu silelis', { text: 'zibintai zibinteliai' }, (err, msg) => {
//     console.log(err, msg);
//     console.log('Sekantys zingsniai po bandymo sukurti faila....');
// });

const initialDataPomidoras = {
    pavadinimas: 'Lietuvos raudonasis',
    spalva: 'red',
    dydis: {
        x: 5,
        y: 8,
        z: 5
    }
};
data.create('darzoves', 'pomidoras', initialDataPomidoras, (err, msg) => {
    console.log('CREATE 1:', err, msg);

    // pirminis perskaitymas
    data.read('darzoves', 'pomidoras', (err, content) => {
        console.log('READ 1:', content);

        data.update('darzoves', 'pomidoras', {
            ...initialDataPomidoras,
            dydis: {
                ...initialDataPomidoras.dydis,
                x: 8,
                z: 8
            }
        }, (err, msg) => {
            console.log('UPDATE 1:', err, msg);

            // dar karta perskaitom
            data.read('darzoves', 'pomidoras', (err, content) => {
                console.log('READ 2:', content);

                data.delete('darzoves', 'pomidoras', (err, msg) => {
                    console.log('DELETE 1:', err, msg);

                    data.read('darzoves', 'pomidoras', (err, content) => {
                        console.log('READ 3:', content);
                    })
                })
            })
        })
    })
});



// const initialDataPetras = { name: 'Petras', age: 99 };
// data.create('users', 'petras', initialDataPetras, (err, msg) => {
//     console.log('CREATE 1:', err, msg);

//     // pirminis perskaitymas
//     data.read('users', 'petras', (err, content) => {
//         const fileData = JSON.parse(content);
//         console.log('READ 1:', fileData);

//         // prie Petro objekto prideti megsta spalva: red
//         data.update('users', 'petras', { ...initialDataPetras, favoriteColor: 'red' }, (err, msg) => {
//             console.log('UPDATE 1:', err, msg);

//             // dar karta perskaitom
//             data.read('users', 'petras', (err, content) => {
//                 const fileData = JSON.parse(content);
//                 console.log('READ 2:', fileData);

//                 data.delete('users', 'petras', (err, msg) => {
//                     console.log('DELETE 1:', err, msg);
//                 })
//             })
//         })
//     })
// });

// data.folderContent('books', (err, content)=> {
//     console.log(err);
//     console.log(content);
//     if(!err) {
//         //eiti per failu sarasa ir kiekviena ju perskaityti
//         for(const book of content) {
//             data.read('book',book, (err, bookContent) => {
//                 console.log(err, bookContent);
//             })
//         }
//     }
// })


// const pirmasKioskas = {
//     name: 'Pirmas kioskas',
//     size: 20,
//     price: 5000
// }
// data.appendToArray('shop', 'kioskas', pirmasKioskas, (err, content) => {
        
    //     console.log(err, content);
//     // tikimasi, jog sekmes atveju, grazinamas turinys
//     // bus atnaujinta failo turinio versija
//     // turesim matyti:
//     // [{"name":"Pirmas kioskas","size":20,"price":5000}]


//     const antrasKioskas = {
//         name: 'Antras kioskas',
//         size: 15,
//         price: 4000
//     }
//     data.appendToArray('shop', 'kioskas', antrasKioskas, (err, content) => {
//         // tikimasi, jog sekmes atveju, grazinamas turinys
//         // bus atnaujinta failo turinio versija
//         // turesim matyti:
//         // [{"name":"Pirmas kioskas","size":20,"price":5000},{"name":"Antras kioskas","size":15,"price":4000}]
//         console.log(err, content);
//     })
// })
                
