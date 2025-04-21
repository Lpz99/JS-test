const test = {
    "name": "Michael",
    "surname": "Lopez"
};

const array1 = [1,2,3,4,5];


for(key in test) {
    console.log(test[key]);
    console.log(key);
}

for(value of array1) {
    console.log(value);
}
