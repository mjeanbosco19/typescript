"use strict";
class Persoon {
    constructor(name) {
        this.name = name;
    }
}
class Customeer extends Persoon {
}
function echo(value) {
    return value;
}
echo(new Customeer('a'));
//# sourceMappingURL=genericContraints.js.map