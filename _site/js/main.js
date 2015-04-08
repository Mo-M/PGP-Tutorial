
// collapse all Infoboxes if javascript is enabled
$('.well').addClass('collapse')

// load images only if javascript is enabled
function loadImgs(modal) {
    var src = document.getElementById(modal).getElementsByClassName('hidden');
    var img = document.getElementById(modal).getElementsByTagName('img');
    for (var i = 0; i < src.length; i++)
        document.getElementById(modal).getElementsByTagName('img')[i].src = document.getElementById(modal).getElementsByClassName('hidden')[i].innerHTML;
}
