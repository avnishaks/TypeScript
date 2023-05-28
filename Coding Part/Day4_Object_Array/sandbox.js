// Array
var string_val = ["aks", "jsk", "ksr"];
string_val.push("iou");
// string_val.push(10); -> when string_val declared the it contains the string value only so push 
// of the number is not allowed
var number_val = [10, 20, 20, 37, 09];
number_val.push(90);
//number_val.push("haha") -> number_val contains the number value , then it can't conatins the string
var num_st_mixed = ["aks", 10, 8, "auua"];
num_st_mixed.push("haaaha");
num_st_mixed.push(900);
// Object
var ninja = {
    names: "Value",
    job: "IT",
    year: 2018
};
//ninja.year="dys"-> only the declared value type will be used to update the year field
ninja.year = 2019;
ninja.names = "avnishask";
ninja.job = "IU";
// we can't add no more key also
//ninja.skill=["aa",10]
ninja = {
    names: "jaja",
    job: "aja",
    year: 980
};
// Any of the Feild missing after the object declation in process to update the object
// ninja={
//     names:"jaja",
//     job:"aja"
// }
