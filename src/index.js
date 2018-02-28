module.exports = function check(str, bracketsConfig) {
     pair = [];
    for ( i = 0; i < bracketsConfig.length; i++) {
        pair.push(bracketsConfig[i][0] + bracketsConfig[i][1]);
    };

    for ( z = 0; z < pair.length + 1; z++) {

        for ( i = 0; i < pair.length; i++) {
            for ( b = 0; b < str.length; b++) {
                if (str.indexOf(pair[i]) != -1) {
                    same = str.indexOf(pair[i]);
                    str = str.substring(0, same) + str.substring(same + 2);
                    b--;
                };
            };
        };

    };

    if (str.length == 0) {
        return (true);
    }
    else {
        return (false);
    };
};