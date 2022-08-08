// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"] ;
function  destructivelyAppendCat(Ralph) {
    cats.push(Ralph);
}
function  destructivelyPrependCat(Bob) {
    cats.unshift(Bob) ;
}
function  destructivelyRemoveLastCat(Garfield) {
    cats.pop(Garfield) ;
}
function  destructivelyRemoveFirstCat(Milo) {
    cats.shift(Milo) ;
}
function  appendCat(Broom) {
  const allCats = [...cats, Broom] ;
  return allCats;
}
function prependCat(Arnold) {
    const newCats = [Arnold, ...cats] ;
    return newCats;
}
function removeLastCat() {
    return cats.slice(0, -1);
}
function removeFirstCat() {
    return cats.slice(1);
}









