var cars = "avanza, mobilio, ayla, brio, jazz"
console.log(cars)
// document.writeln(cars)


var gretting = "Hello Words"
console.log(cars)
// document.writeln(gretting)


var dataString = "ini string"
var dataNumber = 12345
var dataBooelan = true //false
var a = 20
var b = 30
result = a*b
console.log(dataString)
console.log(dataNumber)
console.log(dataBooelan)
console.log(result)

// operation aritmatika
//var dataString = "ini bukan string"
//console.log (dataString)

//const dataConts = "hello"
//const dataConts = "world"
//console.log(dataConst)

//operation aritmetika
const resultTambah = 3 + 5
console.log(resultTambah)

const resultKurang = 3 - 5
console.log(resultKurang)

const resultBagi = 3 / 5
console.log(resultBagi)

const resultSisaBagi = 10 % 5
console.log(resultSisaBagi)

//operator perbandingan
const resultTipeData = 5 == '5' //Berfungsi untuk mengecek tipe data
//const resultTipeData = 5 == '5' //Tidak ngecek tipe data
console.log (resultTipeData)

const resultLebihDari = 5 > 3
console.log(resultLebihDari)

const resultKurangDari = 5 < 3
console.log(resultKurangDari)

//operator logika
const nilaiUjian = 65
const nilaiAbsen = 76

const lulusUjian = nilaiUjian >= 75
const lulusAbsen = nilaiAbsen >= 75

const lulusSempurna = lulusUjian && lulusAbsen
const lulusSaja = lulusUjian || lulusAbsen

console.log('Lulus Sempurna', lulusSempurna)
console.log('Lulus Saja', lulusSaja)

//contitional
// if (nilaiUjian >= 75) {
//     console.log('LULUS')
// } else {
//     console.log('TIDAK LULUS')
// }

// if (nilaiAbsen >= 75) {
//     console.log('LULUS')
// } else {
//     console.log('TIDAK LULUS')
// }

if (nilaiUjian >= 75 && nilaiAbsen < 75) {
    console.log("LULUS SEMPURNA")
} else if (nilaiUjian < 75 && nilaiAbsen>=75){
    console.log("LULUS SAJA")
} else if (nilaiUjian >= 75 && nilaiAbsen < 75){
    console.log("LULUS SAJA")
} else {
    console.log("TIDAK LULUS")
}

//TERNERY OPERATOR
const kelulusanSiswa = nilaiUjian >= 75 && nilaiAbsen >= 75 ? 'LULUS SEMPURNA'  : (nilaiUjian <75 && nilaiAbsen >= 75) || nilaiUjian >= 75 && nilaiAbsen < 75 ? 'LULUS' : 'TIDAK LULUS'
console.log('HASIL KELULUSAN', kelulusanSiswa)


//ARRAY
const mobil = [
    'ayla',
    'agya',
    'calya',
    'sigra',
    'jazz',
    'mobilio',
    'BRV'
]
console.log(mobil)
console.table(mobil)

    //get data index n 
    console.log('Data Index ke 4 =', mobil[4] )

    //Find Length/Jumlah data
    console.log(mobil.length)

    //ARRAY METHOD
    mobil.push('kijang')
    console.log('mobil')

    //looping
    for(i = 0; i< mobil.length; i+= 1){
        console.log(mobil[i])
    }

    //for in
    const user = {
        fullName : 'jhon',
        email: 'jhon@mail.co',
        age : '25'
    }
let print = ''
for(let data in user){
    print += user[data] + ' '
}
console.log(print)

// for of
// let print2 =''
// for(let data2 of user){
//     print2  += data2
// }
// console.log(print2)

const food =[ 
    {
        id : 1,
        rasa : 'manis',
        warna: 'merah',
        bentuk: 'bulat'
    },
    {
        id : 2,
        rasa : 'pahit',
        warna: 'kuning',
        bentuk: 'kotak'
    },
    {
        id : 3,
        rasa : 'asam',
        warna: 'hijau',
        bentuk: 'bulat'
    }
]
food.forEach(foods => {
    for(let value in foods){
        // console.log('${foods[value]}')
        // document.getElementById('text').innerHTML = foods[value]
    }
})


//function

//declaration
function userLogin(fullName, email){
    console.log(`full Name: ${fullName}, Email: ${email}`)
    // console.log('Full Name: ', fullName  + ',Email:', email )
}
userLogin('dhickytriaji', 'd.triaji@gmail.com')

//expresion01
const userLogin2 = function(fullname, email){
    const resultUser = `Full Name: ${fullname}, Email: ${email}`
    return resultUser
}
console.log(userLogin2('dhickytriaji', 'd.triaji@gmail.com'))

//expresion2 - arrow function
const userLogin3 = (fullname, email) => {
    const resultUser = `Full Name: ${fullname}, Email: ${email}`
    return resultUser
}
console.log(userLogin3('dhickytriaji', 'd.triaji@gmail.com'))
