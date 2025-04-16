function task1(){
    function ucFirst(str){
        if(str) {
            let newWord = str[0].toUpperCase() + str.slice(1);
            return newWord;
        }else{
            alert("No string provided!");
            return "Error!";
        }
    }

    firstUpperCase = ucFirst(prompt("Enter a word: ", "lowercase"));
    alert(firstUpperCase);
}

function task2(){
    function checkSpam(str){
        let lowercase = str.toLowerCase();
        return (lowercase.includes("viagra") || lowercase.includes("xxx"));
    }

    alert(checkSpam('buy ViAgRA now'));
    alert(checkSpam('free xxXXXxx'));
    alert(checkSpam("innocent rabbit"));
}

function task3(){
    function truncate(str, maxlength){
        if (str.length > maxlength){
            return str.slice(0, maxlength-1) + "…";
        }else{
            return str;
        };
    }

    alert(truncate('Goodness gracious me', 5));
    alert(truncate('free xxXXXxx', 8));
    alert(truncate("innocent rabbit", 75));
}

function task4(){
    function extractCurrencyValue(str){
        return +str.slice(1);
    }

    alert(extractCurrencyValue('$120'));
    alert(extractCurrencyValue('$1200000'));
}