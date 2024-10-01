// 30 - sept - 2024

// api:  https://www.mockaroo.com/

let data = [
    {"first_name":"Carmel","last_name":"Deex","email":"cdeex0@mtv.com"},
    {"first_name":"Artus","last_name":"Harses","email":"aharses1@globo.com"},
    {"first_name":"Isac","last_name":"Ruddoch","email":"iruddoch2@fastcompany.com"},
    {"first_name":"Montague","last_name":"Omond","email":"momond3@theatlantic.com"},
    {"first_name":"Sherri","last_name":"Aymeric","email":"saymeric4@ed.gov"},
    {"first_name":"Reinwald","last_name":"Sanpher","email":"rsanpher5@wisc.edu"},
    {"first_name":"Wilmette","last_name":"Beininck","email":"wbeininck6@aboutads.info"},
    {"first_name":"Laverne","last_name":"Yarranton","email":"lyarranton7@salon.com"},
    {"first_name":"Hewie","last_name":"Lattka","email":"hlattka8@shareasale.com"},
    {"first_name":"Dolly","last_name":"Bulgen","email":"dbulgen9@reverbnation.com"},
    {"first_name":"Susana","last_name":"Swatman","email":"sswatmana@issuu.com"},
    {"first_name":"Frankie","last_name":"Iacomelli","email":"fiacomellib@merriam-webster.com"},
    {"first_name":"Elsey","last_name":"Baggally","email":"ebaggallyc@mail.ru"},
    {"first_name":"Boyd","last_name":"Goodread","email":"bgoodreadd@berkeley.edu"},
    {"first_name":"Gorden","last_name":"Snowsill","email":"gsnowsille@unicef.org"},
    {"first_name":"Terrence","last_name":"Spellward","email":"tspellwardf@cornell.edu"},
    {"first_name":"Laurence","last_name":"Kernes","email":"lkernesg@eventbrite.com"},
    {"first_name":"Tana","last_name":"Sutty","email":"tsuttyh@go.com"},
    {"first_name":"Grove","last_name":"Kelland","email":"gkellandi@marketwatch.com"},
    {"first_name":"Stacee","last_name":"Haberjam","email":"shaberjamj@apple.com"},
    {"first_name":"Kit","last_name":"Jacquemy","email":"kjacquemyk@pagesperso-orange.fr"},
    {"first_name":"Jarrid","last_name":"Bickerdyke","email":"jbickerdykel@hao123.com"},
    {"first_name":"Albertine","last_name":"Mars","email":"amarsm@sphinn.com"},
    {"first_name":"Vince","last_name":"Bentzen","email":"vbentzenn@wikimedia.org"},
    {"first_name":"Skippie","last_name":"Bottomer","email":"sbottomero@epa.gov"},
    {"first_name":"Carolan","last_name":"Lorden","email":"clordenp@dot.gov"},
    {"first_name":"Adel","last_name":"McTrusty","email":"amctrustyq@bloglines.com"},
    {"first_name":"Burty","last_name":"Maleham","email":"bmalehamr@rambler.ru"},
    {"first_name":"Silva","last_name":"Sayer","email":"ssayers@indiatimes.com"},
    {"first_name":"Bobbye","last_name":"Slay","email":"bslayt@photobucket.com"},
    {"first_name":"Tootsie","last_name":"Polo","email":"tpolou@artisteer.com"},
    {"first_name":"Heath","last_name":"Haycroft","email":"hhaycroftv@paypal.com"},
    {"first_name":"Annnora","last_name":"Lorking","email":"alorkingw@illinois.edu"},
    {"first_name":"Joyce","last_name":"Plampeyn","email":"jplampeynx@prweb.com"},
    {"first_name":"Sephira","last_name":"Workman","email":"sworkmany@soup.io"},
    {"first_name":"Lelah","last_name":"Scanes","email":"lscanesz@ft.com"},
    {"first_name":"Padget","last_name":"Perryman","email":"pperryman10@jigsy.com"},
    {"first_name":"Karlis","last_name":"Whitely","email":"kwhitely11@so-net.ne.jp"},
    {"first_name":"Felicle","last_name":"Rothschild","email":"frothschild12@theatlantic.com"},
    {"first_name":"Bond","last_name":"Philpault","email":"bphilpault13@tmall.com"},
    {"first_name":"Kelley","last_name":"Ekkel","email":"kekkel14@businessweek.com"},
    {"first_name":"Upton","last_name":"Futcher","email":"ufutcher15@nps.gov"},
    {"first_name":"Balduin","last_name":"Sturzaker","email":"bsturzaker16@businessinsider.com"},
    {"first_name":"Gilbertine","last_name":"Constantinou","email":"gconstantinou17@sphinn.com"},
    {"first_name":"Berta","last_name":"Dallimare","email":"bdallimare18@amazon.com"},
    {"first_name":"Jacintha","last_name":"Foucher","email":"jfoucher19@ustream.tv"},
    {"first_name":"Cullin","last_name":"Rebbeck","email":"crebbeck1a@ftc.gov"},
    {"first_name":"Katinka","last_name":"Kann","email":"kkann1b@storify.com"},
    {"first_name":"Bernadina","last_name":"Pemberton","email":"bpemberton1c@shutterfly.com"},
    {"first_name":"Korrie","last_name":"Habeshaw","email":"khabeshaw1d@cmu.edu"}
]

// using normal for loop
// for(let i = 0; i < data.length; i++){
//     console.log(data[i].first_name);   
// }

// data.forEach((obj)=>{
//     console.log(obj.first_name);
// })

// using forEach(): is HOF
// arr = [10,20,30,40,50,70]
// arr.forEach((element, index, whole_array)=>{
//     console.log(element);
//     console.log(index);
//     console.log(whole_array);
// })






// some more hof (main usage)
let arr = [10, 320, 35, 500, 40, 50, 70, 1, 99]
console.log('original arr: ',arr);


console.log(arr.sort()); // sorts based on first index

console.log(arr.sort(
    (current_val,next_val)=>{
        return current_val - next_val;  // agar +ve hai to swap kr do
    }
)); // sorts in asc order

console.log('original arr: ',arr);  // sort modifies the original array




// we can't return anything using forEach(), let's see
let a = [10, 320, 35, 500, 40, 50, 70, 1, 99]
let arr1 = a.forEach(element => {
    return element;
});
console.log(`see we can't return using forEach(): `,arr1);