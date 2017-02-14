var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var replacedText = text.replace(/New York Times/g, 'Failing New York Times');
            replacedText = replacedText.replace(/NY Times/g, 'Failing NY Times');
            replacedText = replacedText.replace(/NYTimes/g, 'Failing NYTimes');
            replacedText = replacedText.replace(/new york times/g, 'failing new york times');
            replacedText = replacedText.replace(/ny times/g, 'failing ny times');
            replacedText = replacedText.replace(/nytimes/g, 'failing nytimes');
            replacedText = replacedText.replace(/NYT/g, 'FNYT');
            

            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}

