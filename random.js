const initialDataPetras = { name: 'Petras', age: 99 };
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