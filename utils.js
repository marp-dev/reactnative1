import _ from 'lodash';

const chars = {
    0:0, 1:1, 2:2, 3:3, 4:4, 5:5, 6:6, 7:7, 8:8, 9:9,
    10:'A',
    11:'B',
    12:'C',
    13:'D',
    14:'E',
    15:'F',
    16:'G',
    17:'H',
    18:'I',
    19:'J',
    20:'K',
    21:'L',
    22:'M',
    23:'N',
    24:'O',
    25:'P',
    26:'Q',
    27:'R',
    28:'S',
    29:'T',
    30:'U',
    31:'V',
    32:'W',
    33:'X',
    34:'Y',
    35:'Z'
};

export const generateID = function(prefix = '', length = 10){
    let ID = '';
    for(let i=0;i<length;i++){
        ID += chars[_.random(0, 35)];
    }
    return prefix+ID;
}

export const timestamp = function(){
    return Math.floor(Date.now() /1000);
}

export const test_url = function(url){
    return /^(https|http):\/\/(localhost|[A-Za-z\-\_0-9]+(\.[A-Za-z\-\_0-9]+)+)(:[0-9][0-9][0-9]?[0-9]?[0-9]?)?(\/[A-Za-z0-9\-\_]+)*\/?$/gm.test(url)
}