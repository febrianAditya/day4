

let inputUser1 = 9 
let inputUser2 = "9"

let cekValue = 9 == "9"

let cekValue2 = inputUser1 === Number(inputUser2)


// negation
let cekValue3 = 9 != "9"


console.log(cekValue3);





console.log(+inputUser2,  "==> INI LINE 18");



let cekValue4 = "KID009" === "9"




let belanjaUser = 90000
let ageUser = 18

/**
 * Belanja kurang dari 100000 dan umurnya kurang dari 17 dapat diskon 10%
 */

if (belanjaUser > 100000) {
    if (ageUser > 17) {
        console.log("Selamat anda dapat hadiah") 
    }else {
        console.log("===> ini line 39");
    }
}else {
    console.log("Belanja anda kurang dari 100000");

    if (ageUser < 17) {
        let potonganHarga = belanjaUser * 0.10
        let payment = belanjaUser - potonganHarga
        console.log("anda harus membayar sebesar: " + payment); 
    }else {
        console.log("anda harus membayar sebesar: " + belanjaUser);
        
    }
}

if (belanjaUser > 100000 && 16 > 17) {
    console.log("Selamat anda dapat hadiah") 
}else {
    console.log("Terimaksih telah berbelanja");
}



// if (ageUser > 17) {
//     console.log("Umur anda lebih dari 17");
// }



let hitungPerulangan = 1
// while (hitungPerulangan <= 5) {
//     console.log("Masih lap ke " + hitungPerulangan);
//     hitungPerulangan = hitungPerulangan + 1
// }


// do {
//     console.log("aku dijalanin dulu");
//     hitungPerulangan++
// } while (hitungPerulangan < 1);

/**
 * hitungPerulangan = 1
 * 
 * 1 < 5 // truthy
 *      PRINT "Masih lap ke 1"
 *      hitunganPerulangan = hitunganPerulanga + 1
 *                         = 1 + 1
 * 
 * 
 * hitunganPerulangan = 2
 * 2 < 5 // truthy
 *      PRINT "Masih lap ke 2"
 *      hitunganPerulangan = hitunganPerulanga + 1
 *                         = 2 + 1
 * 
 */

// while (hitungPerulangan <= 5) {
//     console.log("Masih lap ke " + hitungPerulangan);
//     hitungPerulangan = hitungPerulangan + 1
// }

for (let index = 1; index <= 5 ; index++) {
    console.log("Ini lap ke " + index); 
}

/**
 * index = 1
 * index <=5 
 * 1 <= 5 // true
 *      PRINT "Ini lap ke 1"
 * index ++
 * index = 2
 * 
 * index = 2
 * index <= 5
 * 2 <= 5 // true
 *      PRINT "Ini lap ke 2"
 * index++
 * index = 3
 * 
 * index = 3
 * index <= 5
 * 3 <= 5 // true
 *      PRINT "Ini lap ke 3"
 * index++
 * index = 4
 * 
 * index = 4
 * index <= 5
 * 4 <= 5 // true
 *      PRINT "Ini lap ke 4"
 * index++
 * index = 5
 * 
 * index = 5
 * index <= 5
 * 5 <= 5 // true
 *      PRINT "Ini lap ke 5"
 * index++
 * index = 6
 * 
 * index = 6
 * index <= 5
 * 6 <= 5 // false
 * 
 */



let students = ["pak fatah", "pak ari", "pak amjad"]
let cekJuga = students[3] // pak ari
console.log(cekJuga);


// students.forEach(el => {

// })

for (let index = 0; index < students.length; index++) {
    // const element = array[index];
    // console.log(students[3], "==> INI YANG FOR"); // pak amjad
}