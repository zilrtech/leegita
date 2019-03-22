const   allowed = ["ar","en"];



exports.isTranslate = function(lang){
    if(allowed.includes(lang)){
        
        return true;
    }else{

        return false;
    }
}

