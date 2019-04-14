/**
 * Created by bangbang on 15/02/01.
 * Update by yingxi on 19/4/14.
 */
module.exports = function (version){
    switch(version.trim()){
        case '1.7.1-pre':case '1.7.2':case '1.7.3-pre':case '1.7.4':case '1.7.5':
            return 4;
        case '1.7.6':case '1.7.7':case '1.7.8':case '1.7.9':case '1.7.10':
            return 5;
        case '1.8':case '1.8.1':case '1.8.2':case '1.8.3':case '1.8.4':case '1.8.5':case '1.8.6':case '1.8.7':case '1.8.8':case '1.8.9':default:
            return 47;
        case '1.9':
            return 107;
        case '1.9.1':
            return 108;
        case '1.9.2':
            return 109;
        case '1.9.3':case '1.9.4':
            return 110;
        case '1.10':case '1.10.1':case '1.10.2':
            return 210;
        case '1.11':
            return 315;
        case '1.11.1':case '1.11.2':
            return 316;
        case '1.12':
            return 335;
        case '1.12.1':
            return 338;
        case '1.12.2':
            return 340;
        case '1.3':
            return 393;
        case '1.13.1':
            return 401;
        case '1.13.2':
            return 404;
    }
};
