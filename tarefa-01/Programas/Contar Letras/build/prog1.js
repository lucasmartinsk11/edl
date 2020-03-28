var string = "";
var cont = 0;
string = prompt("Digite uma string");
for (var _i = 0, string_1 = string; _i < string_1.length; _i++) {
    var iterator = string_1[_i];
    if (iterator !== " ") {
        cont++;
    }
}
alert("String: " + string + "  Num. de letras:" + cont);
