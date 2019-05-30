module.exports = function main(number) {
    //console.log("Debug Info");
    //return 'Hello World!';
    var allnumber = []
    var resultnumber_row1 = []
    var resultnumber_row2 = []
    var resultnumber_row3 = []
    for (i = 0;i < number.length;i++){
        a = number[i]
        if (a == '0'){
            result = '._.|.||_|'
        }
        if (a == '1'){
            result = '.....|..|'
        }
        if (a == '2'){
            result = '._.._||_.'
        }
        if (a == '3'){
            result = '._.._|._|'
        }
        if (a == '4'){
            result = '...|_|..|'
        }
        if (a == '5'){
            result = '._.|_.._|'
        }
        if (a == '6'){
            result = '._.|_.|_|'
        }
        if (a == '7'){
            result = '._...|..|'
        }
        if (a == '8'){
            result = '._.|_||_|'
        }
        if (a == '9'){
            result = '._.|_|..|'
        }
        allnumber.push(result)
    }
    for (i = 0;i < number.length;i++){
        resultnumber_row1.push(allnumber[i].substr(0, 3))
        resultnumber_row2.push(allnumber[i].substr(3, 3))
        resultnumber_row3.push(allnumber[i].substr(6, 3))
    }
    finalnumber = resultnumber_row1.join(' ') + '\n' + resultnumber_row2.join(' ') + '\n' + resultnumber_row3.join(' ') + '\n'
   
    return finalnumber
    
};
console.log(module.exports('910'))