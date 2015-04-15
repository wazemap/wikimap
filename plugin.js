{
"moduleId" : "wazemap/wikimap",
"title" : "wikimap",
"subtitle" : "www.wiki-map.com",
"backButton" : false,
"enableGPS" : true,
"zoomControl" : false,
"screenLockRot" : false,
"reload" : true,
"shouldOverrideUrlLoading1" : "http://www.wiki-map.com",
"shouldOverrideUrlLoading2" : "https://www.wiki-map.com",
"loadDataWithBaseUrl1" : "http://www.wiki-map.com/map/",
"loadDataWithBaseUrl3" : "text/html",
"loadDataWithBaseUrl4" : "utf-8",
"loadDataWithBaseUrl5" : null,
"browserLaunchLink" : "http://www.wiki-map.com/map/?locale=en&lat=#lat#&lng=#lng#",
"loadDataWithBaseUrl2" : "
<!DOCTYPE html>
<script src='https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js'></script>
<link rel='stylesheet' href='https://ajax.googleapis.com/ajax/libs/jquerymobile/1.4.5/jquery.mobile.min.css'>
<script src='https://ajax.googleapis.com/ajax/libs/jquerymobile/1.4.5/jquery.mobile.min.js'></script>
<script type='text/javascript'>
window.loadPage = function (url) {
$.get(url, function(page) {
newPage = page.replace('zoom: 15', 'zoom: #zoom#');
var newDoc = document.open();
newDoc.write(newPage);
newDoc.close();
});
};
lang = localStorage.getItem('lang');
if ( lang !== null ) {
loadPage('http://www.wiki-map.com/map/?locale=' + lang + '&lat= + #lat#&lng=#lng#');
}
</script>
<div data-role='page'>
<div data-role='fieldcontain' >
<fieldset data-role='controlgroup' id='radio-choice'>
<legend>Choose wiki language:</legend>
<input type='radio' name='radio-choice-1' id='radio-choice-1' value='ar' />
<label for='radio-choice-1'>AR</label>
<input type='radio' name='radio-choice-1' id='radio-choice-2' value='bg' />
<label for='radio-choice-2'>BG</label>
<input type='radio' name='radio-choice-1' id='radio-choice-3' value='ca' />
<label for='radio-choice-3'>CA</label>
<input type='radio' name='radio-choice-1' id='radio-choice-4' value='cs' />
<label for='radio-choice-4'>CS</label>
<input type='radio' name='radio-choice-1' id='radio-choice-5' value='da' />
<label for='radio-choice-5'>DA</label>
<input type='radio' name='radio-choice-1' id='radio-choice-6' value='de' />
<label for='radio-choice-6'>DE</label>
<input type='radio' name='radio-choice-1' id='radio-choice-7' value='en' />
<label for='radio-choice-7'>EN</label>
<input type='radio' name='radio-choice-1' id='radio-choice-8' value='eo' />
<label for='radio-choice-8'>EO</label>
<input type='radio' name='radio-choice-1' id='radio-choice-9' value='es' />
<label for='radio-choice-9'>ES</label>
<input type='radio' name='radio-choice-1' id='radio-choice-10' value='fa' />
<label for='radio-choice-10'>FA</label>
<input type='radio' name='radio-choice-1' id='radio-choice-11' value='fi' />
<label for='radio-choice-11'>FI</label>
<input type='radio' name='radio-choice-1' id='radio-choice-12' value='fr' />
<label for='radio-choice-12'>FR</label>
<input type='radio' name='radio-choice-1' id='radio-choice-13' value='gl' />
<label for='radio-choice-13'>GL</label>
<input type='radio' name='radio-choice-1' id='radio-choice-14' value='he' />
<label for='radio-choice-14'>HE</label>
<input type='radio' name='radio-choice-1' id='radio-choice-15' value='hu' />
<label for='radio-choice-15'>HU</label>
<input type='radio' name='radio-choice-1' id='radio-choice-16' value='id' />
<label for='radio-choice-16'>ID</label>
<input type='radio' name='radio-choice-1' id='radio-choice-17' value='it' />
<label for='radio-choice-17'>IT</label>
<input type='radio' name='radio-choice-1' id='radio-choice-18' value='ja' />
<label for='radio-choice-18'>JA</label>
<input type='radio' name='radio-choice-1' id='radio-choice-19' value='ko' />
<label for='radio-choice-19'>KO</label>
<input type='radio' name='radio-choice-1' id='radio-choice-20' value='lt' />
<label for='radio-choice-20'>LT</label>
<input type='radio' name='radio-choice-1' id='radio-choice-21' value='ms' />
<label for='radio-choice-21'>MS</label>
<input type='radio' name='radio-choice-1' id='radio-choice-22' value='nl' />
<label for='radio-choice-22'>NL</label>
<input type='radio' name='radio-choice-1' id='radio-choice-23' value='nn' />
<label for='radio-choice-23'>NN</label>
<input type='radio' name='radio-choice-1' id='radio-choice-24' value='no' />
<label for='radio-choice-24'>NO</label>
<input type='radio' name='radio-choice-1' id='radio-choice-25' value='pl' />
<label for='radio-choice-25'>PL</label>
<input type='radio' name='radio-choice-1' id='radio-choice-26' value='pt' />
<label for='radio-choice-26'>PT</label>
<input type='radio' name='radio-choice-1' id='radio-choice-27' value='nl' />
<label for='radio-choice-27'>NL</label>
<input type='radio' name='radio-choice-1' id='radio-choice-28' value='ro' />
<label for='radio-choice-28'>RO</label>
<input type='radio' name='radio-choice-1' id='radio-choice-29' value='ru' />
<label for='radio-choice-29'>RU</label>
<input type='radio' name='radio-choice-1' id='radio-choice-30' value='simple' />
<label for='radio-choice-30'>SIMPLE</label>
<input type='radio' name='radio-choice-1' id='radio-choice-31' value='sk' />
<label for='radio-choice-31'>SK</label>
<input type='radio' name='radio-choice-1' id='radio-choice-32' value='sl' />
<label for='radio-choice-32'>SL</label>
<input type='radio' name='radio-choice-1' id='radio-choice-33' value='sr' />
<label for='radio-choice-33'>SR</label>
<input type='radio' name='radio-choice-1' id='radio-choice-34' value='sv' />
<label for='radio-choice-34'>SV</label>
<input type='radio' name='radio-choice-1' id='radio-choice-35' value='tr' />
<label for='radio-choice-35'>TR</label>
<input type='radio' name='radio-choice-1' id='radio-choice-36' value='uk' />
<label for='radio-choice-36'>UK</label>
<input type='radio' name='radio-choice-1' id='radio-choice-37' value='vi' />
<label for='radio-choice-37'>VI</label>
<input type='radio' name='radio-choice-1' id='radio-choice-38' value='vo' />
<label for='radio-choice-38'>VO</label>
<input type='radio' name='radio-choice-1' id='radio-choice-39' value='war' />
<label for='radio-choice-39'>WAR</label>
<input type='radio' name='radio-choice-1' id='radio-choice-40' value='zh' />
<label for='radio-choice-40'>ZH</label>
</fieldset>
</div>
<script>
$(':jqmData(role=\\'page\\'):last').on('pageshow', function(event) {
$('#myPopup', $(this)).popup('open');
});
$( '#radio-choice' ).change(function() {
lang = $('#radio-choice :radio:checked').val();
localStorage.setItem('lang',lang);
loadPage('http://www.wiki-map.com/map/?locale=' + lang + '&lat= + #lat#&lng=#lng#');
});
</script>
</div>
"
}
