var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var replacedText = text.replace(/The New York Times/g, 'The Failing New York Times');
            replacedText = replacedText.replace(/The NY Times/g, 'The Failing NY Times');
            replacedText = replacedText.replace(/The NYTimes/g, 'The Failing NYTimes');
            replacedText = replacedText.replace(/the new york times/gi, 'the failing New York Times');
            replacedText = replacedText.replace(/the nytimes/gi, 'the failing NYTimes');
            replacedText = replacedText.replace(/the ny times/gi, 'the failing NY Times');
            replacedText = replacedText.replace(/the nytimes/gi, 'the failing NYTimes');
            replacedText = replacedText.replace(/NYT/gi, 'FNYT');

            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}

