
function zwrocA(tekst, litera) {
    let j = 0;
    let zmiana = tekst.toLowerCase();
    const myArray = zmiana.split('');
    let p = myArray.length;
    for (let i = 0; i < p; i++) {
        if (myArray[i] == litera) {
            j++;
        }


    } return (j);

}


console.log(zwrocA('Akademia 108', 'a'));




function zliczanie_wystapien() {
    var a = document.forms['szukanie'].tablica.value.split(',');
    var szukana = document.forms['szukanie'].szukana.value;
    var wynik = 0;
    document.getElementById('opis').innerHTML = "Zainicjuj, wynik = 0<br/>";

    // dla kolejnych elementow tablicy
    for (var i = 0; i < a.length; i++) {
        // jezeli aktualny element jest rowny szukanemu, zwieksz liczbe wystapien o 1
        document.getElementById('opis').innerHTML += "Czy " + a[i] + " = " + szukana + "?<br/>";
        if (a[i] == szukana) {
            document.getElementById('opis').innerHTML += "Tak, więc zwiększamy wynik o 1, wynik = wynik + 1 = " + wynik + " + 1 = " + (wynik + 1) + ". Przechodzimy do kolejnego elementu.<br/>";
            wynik++
        }
        else {
            document.getElementById('opis').innerHTML += "Nie, więc przechodzimy do kolejnego elementu.<br/>";
        }
    }

    document.getElementById('opis').innerHTML += "To był ostatni element. Zatem wartosc " + szukana + " wystepuje w tablicy wynik = " + wynik + " razy.";

    return false;
}
