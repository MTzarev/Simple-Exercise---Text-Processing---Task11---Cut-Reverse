function test11(input) {
    let length = input.length / 2;
    let first = (input.substring(0, length).split(``)).reverse();
    let second = input.substring(length).split(``).reverse();

    console.log(first.join(``));
    console.log(second.join(``));
}
test11('sihToDtnaCuoYteBIboJsihTtAdooGoSmI')