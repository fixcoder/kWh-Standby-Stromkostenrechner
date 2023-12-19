
//* kWh-Standby-Stromkostenrechner Maik Schulte in Dezember 2023 *//

function clickWatt_EuroProJahr()
{
document.getElementById('idkWhProJahr').value = "";
EuroProJahr();
}

function EuroProJahr()
{
var i;
var ikWh;
var iAKW;
var eurAb;
var iBhAKW;

document.getElementById("LidWatt").innerHTML = "Ger&auml;teverbrauch in <u>Watt</u>";
LableText1 = "Betrieb oder Standbybetrieb in <u>Stunden</u> <span style='background-color:yellow;'> an jedem Tag im Jahr</span>";
LableText2 = "Stromkosten &euro; <span style='background-color:yellow;'>im Jahr</span> (Grundpreis Stromzähler mME: 13,90 &euro;/Monat nicht berücksichtig.)";

iWatt= HoleNummerVonInputFeldVMit("idWatt");

iWatt = eval(iWatt);
document.getElementById('idWatt').value= iWatt;

iCent= HoleNummerVonInputFeldVMit("idCent");
iStunden= HoleNummerVonInputFeldVMit("idStunden");


if (iStunden<=24) {
if (iStunden!=0) {
i = (iWatt / 1000) * (iCent / 100) * (iStunden * 365);
/* 1400 MegaWatt = 11 10^9 kWh 40,68 Haushalte*/
ikWh = (iWatt/1000*iStunden*365);
document.getElementById("LidBetriebsstunden").innerHTML = LableText1;
document.getElementById("LidStromkosten").innerHTML = LableText2;
}
else
{
i = (iWatt) * (iCent / 100);
document.getElementById("LidWatt").innerHTML = "z.B. Jahresrechnung Energiebezug [kWh] in <u>Kilowattstunden</u>. <span style='background-color:yellow;'>z.B.: Energiebezug 2100 kWh</span>";
document.getElementById("LidBetriebsstunden").innerHTML = "0: Energie [kWh] mal Energiekosten [Cent pro kWh] * (1 Euro/100 Cent)<br>(>24 bedeutet: Betriebsstunden und <=24: Berechnung anhand t&auml;glichem Standbybetrieb.";
document.getElementById("LidStromkosten").innerHTML = "<span style='background-color:yellow;'>j&auml;hrl. Stromkosten (&euro;) = kWh (KiloWattStunden EnergieVerbrauch) * Energiekosten (Cent pro kWh) /100</span>";
}
}
		
if (iStunden>24) {
i = (iWatt / 1000) * (iCent / 100) * iStunden;
ikWh = (iWatt/1000)*iStunden;
document.getElementById("LidBetriebsstunden").innerHTML = "ges. Betriebsstunden";
document.getElementById("LidStromkosten").innerHTML = "Stromkosten &euro;";
}

i = i.toFixed(2);
eurAb = (i/12);
i = i.replace(".",",");

i=i.replace(".","-");
i=i.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
i=i.replace("-",",");

document.getElementById("idKosten").value = i;

iAKW = ikWh*40.68/1.4/8760;
ikWh = ikWh.toFixed(2);

eurAb = eurAb.toFixed(0);
iAKW = iAKW.toFixed(1);

str_ikWh= ikWh;
str_ikWh= str_ikWh.replace(".","-");
str_ikWh= str_ikWh.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
str_ikWh= str_ikWh.replace("-",",");

str_eurAb=eurAb;
str_eurAb=str_eurAb.replace(".","-");
str_eurAb=str_eurAb.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
str_eurAb=str_eurAb.replace("-",",");

strHelp = str_ikWh + " kWh. (+ " +str_eurAb+ " EUR monatl. Abschlag.)";

// strHelp = ikWh.replace(".",",") + " kWh. (+ " +eurAb+ " EUR monatl. Abschlag.)";
// document.getElementById("idkWhProJahr").value = ikWh.replace(".",",");


// volle 24 standbybetriebsstunden täglich im Jahr
if (((iAKW > 0.4) && (iStunden==24)) || ((iAKW > 0.4) && (iStunden==8760))) {document.getElementById("BRD").innerHTML = "= " + strHelp + " <br><span style='color:red;';>Bei 40,68 Mio. Haushalten in der BRD entspricht das " + iAKW.replace(".", ",") + " AKWs (mittl. AKW mit 1400 MegaWatt).</span>"}
else
{document.getElementById("BRD").innerHTML = strHelp; }
		 
} // end function

function HoleNummerVonInputFeldVMit(id)
{
i = document.getElementById(id).value;
i = i.replace(",",".");
i = parseFloat(i);
return i;
}


function calculate(id, idresult) {
	const formulaInput = document.getElementById(id).value.replace(",", ".");;

	try {
		const result = eval(formulaInput);
		document.getElementById(idresult).value = result;
	} catch (error) {
		document.getElementById(id).value = "(!) " + formulaInput;
	}
	kWhProJahr();
}

function kWhProJahr() {
	var ikWh;
	var iW;
	var ih;

	ikWh = document.getElementById('idkWhProJahr').value;

	if (ikWh != '') {
		ih = document.getElementById('idStunden').value;
		if (ih == '') { ih = 24; document.getElementById('idStunden').value = 24; }
		ih = ih.replace(",", ".");
		ih = parseFloat(ih);
		ikWh = ikWh.replace(",", ".");
		ikWh = parseFloat(ikWh);
		if (ih <= 24) { iW = (ikWh * 1000 / 365 / ih); }
		if (ih > 24) { iW = (ikWh * 1000 / ih); }
		iW = iW.toFixed(2);
		document.getElementById('idWatt').value = iW;
		EuroProJahr();
	}
}

function StandByKostenRechnerW_C_h(iWatt, iCent, ih) {
	if (iWatt != '') { document.getElementById('idWatt').value = iWatt; }
	if (iCent != '') { document.getElementById('idCent').value = iCent; }
	if (ih != '') { document.getElementById('idStunden').value = ih; }

	document.getElementById('idkWhProJahr').value = "";

	EuroProJahr();
	window.location.href = "#MaiksStandbyStromkostenRechner";
}

function StandByKostenRechner_Watt(iWatt) {
	document.getElementById('idWatt').value = iWatt;

	document.getElementById('idkWhProJahr').value = "";

	EuroProJahr();
	window.location.href = "#MaiksStandbyStromkostenRechner";
}


function opener(idx)
{
var doon;

if (document.getElementById(idx).style.display=='none') { doon=1; }
else { doon=0; }

if (doon==1) { document.getElementById(idx).style.display ="inline"; }
if (doon==0) { document.getElementById(idx).style.display ="none"; }
}


/*  Erweiterung / Parameterübergabe über den hyperlink zur Ergebnisanzeige */
function StandbyKostenRechner_param(str_parameter) {
	if (str_parameter == '') return;
	var str_werte = str_parameter.slice(1);
	var paare = str_werte.split("&");
	var paar, name, wert;

	for (var i = 0; i < paare.length; i++) {
		paar = paare[i].split("=");
		name = paar[0];
		wert = paar[1];
		name = unescape(name).replace("+", " ");
		wert = unescape(wert).replace("+", " ");
		this[name] = wert;
		
		if (name.toLowerCase() == "watt") { document.getElementById('idWatt').value = wert; }
		if (name.toLowerCase() == "formel") { document.getElementById('idformel').value = wert; }
		if (name.toLowerCase() == "cent") { document.getElementById('idCent').value = wert; }
		if (name.toLowerCase() == "stunden") { document.getElementById('idStunden').value = wert; }		
		if (name.toLowerCase() == "kwh") { document.getElementById('idkWhProJahr').value = wert; }	
		// Parameterübergabe z.B.:  index.html?watt=200&stunden=2000&cent=33&formel=5*2&kwh=20000&kosten=Hallo Welt !
		if (name.toLowerCase() == "kosten") { document.getElementById('idKosten').value = wert+" click mich zum Ergebnis"; }	
	}
	EuroProJahr(); // direktes Berechnen nach Entfernen der // = Kommentarkennzeichnung.
}
/*  Erweiterung */
