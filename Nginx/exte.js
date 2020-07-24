

function hello(r) {
    var req = "GET";
    if (req == r.method){

        var fs = require('fs');
        fs.appendFileSync("/var/log/traces_anjara/traces_extension_exte.txt", 'Helloworld' + '\n');
        
        r.return(200, "Hello world! "+ req);

       
    }
    else {
        r.return(200, "not a get");
    }
    
    
}

function summary(r) {
    var a, s, h;

    s = "JS summary\n\n";

    s += "Method: " + r.method + "\n";
    s += "HTTP version: " + r.httpVersion + "\n";
    s += "Host: " + r.headersIn.host + "\n";
    s += "Remote Address: " + r.remoteAddress + "\n";
    s += "URI: " + r.uri + "\n";

    s += "Headers:\n";
    for (h in r.headersIn) {
        s += "  header '" + h + "' is '" + r.headersIn[h] + "'\n";
    }

    s += "Args:\n";
    for (a in r.args) {
        s += "  arg '" + a + "' is '" + r.args[a] + "'\n";
    }

    return s;
}

export default {hello, summary};