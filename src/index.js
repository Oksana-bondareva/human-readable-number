module.exports = function toReadable (number) {
    const
    t = ['', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'],
    u = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'],
    p = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

let str = number.toString(), res = '';

if(str.length == 1) return u[number];
else if(str.length == 2){
    if(str[0] == 1) res = p[parseInt(str[1])];
    else res = (t[parseInt(str[0])-1] + ((str[1]!='0')?(' ' + u[parseInt(str[1])]):''));
}
else if(str.length == 3){
    if(str[1] == 1) res = u[parseInt(str[0])] + ' ' + 'hundred' + (' ' + p[parseInt(str[2])]);
    else res = (u[parseInt(str[0])] + ' ' + 'hundred' + ((str[1]!='0')?(' ' + t[parseInt(str[1])-1]):'') + ((str[2]!='0')?(' ' + u[parseInt(str[2])]):''));
}

return res;
}

