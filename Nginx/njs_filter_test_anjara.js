
function ecriture_filtre(s) {
    var fs = require('fs');
    fs.appendFileSync("/var/log/traces_anjara/traces_extension_njs.txt", 'Helloworld' + '\n');

    s.allow();
}

export default {ecriture_filtre};