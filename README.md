# kWh-Standby-Stromkosten-Rechner 

![grafik](https://github.com/fixcoder/kWh-Standby-Stromkostenrechner/assets/152872653/af5f786f-be4b-4c2c-a3e3-98112907639f)


[Hier klicken zum Ausprobieren](https://fixcoder.github.io/kWh-Standby-Stromkostenrechner/)

## kWh-Standby-Stromkosten-Rechner V2.2
Kosten und Energie aus der Leistung [Watt] berechnen. Gruß Maik


Incl. Strompreisbremse. Hierzu muß der Strompreis mit einem Tarif mit mehr als 40 [Cent/kWh] berechnet sein, 
dann werden die Vergünstigungen im Bemerkungsfeld angezeigt.

Merkregel: [1 Watt &#8792; 3 EUR pro Jahr](https://fixcoder.github.io/kWh-Standby-Stromkostenrechner/index.html?watt=1&stunden=24&cent=35.8)

Im Dauerbetrieb 24 Stunden an 365 Tagen im Jahr (Standbyleistung  &#8792; LeerlaufverlustEnergiekosten)!



## Installation
Dieser Standby-Stromkosten-Kosten Rechner wird mit einer Javascriptdatei, einer CSS und mit einer HTML Datei geliefert.
Die Dateien sind in ein gemeinsames Verzeichnis abzulegen. Die HTML Datei im Browser laden/starten.

Oder direkt hier bei GitHub starten ohne Installtion: [https://fixcoder.github.io/kWh-Standby-Stromkostenrechner](https://fixcoder.github.io/kWh-Standby-Stromkostenrechner/index.html?watt=27&stunden=24&cent=35.8)


## Berechnungs- Variante 1)
Nun wird die Ist-Leistung [Watt] abgefragt.
Die Kosten [Cent/kWh] wird voreingestellt, sowie auch die Betriebszeit oder StandbyZeit = 24 Stunden an 365 Tagen im Jahr.
Hiernach wird der Leistungspreis berechnet.

Die Grundgebühr des Stromversorgers 
- ca. 13,9 [EUR/Monat] für einen mME Zähler = Moderne Messeinrichtung
- ca. 8,90 [EUR/Monat] für den alten schwarzen Drehscheiben-\Ferraris-Zähler

wird in der Rechnung nicht betrachtet. Siehe auch Anmerkung.
Jetzt ist der jährliche Strompreis abschätzbar.

Zur Vervollständigung ist der Arbeitspreis des Stromversorgers s.u. angefügt.

## Berechnungs- Variante 2)

Wird eine Zeit > 24 Stunden angegeben, dann wird umgeschaltet auf Betriebszeit.
D.h. hier wird NICHT auf die Laufzeit auf ein Jahr hochgerechnet.

## Berechnungs- Variante 3)
Auch kann in der ersten Zeile (1. Eingabefeld des Formulars) eine kl. math. Rechnung durchgeführt werden. Exemplarisch z.B. einen
geschätzten Energiebezug bei einem 1-Personenhaushalt von 5 kWh/Tag. 365 Tage/Jahr * 5 kWh/Tag (Klick auf das Gleichheitszeichen!) = 1825 kWh/Jahr.
Diese jährliche Größe [kWh] wird auf den Watt-Bezug umgerechnet (voreingestellte Werte werden berücksichtigt).

Beispiel: [homepage](https://www.maikschulte.de/loesungen-klimawandel.php#MaiksStandbyStromkostenRechner)

## nützliche Javascript Funktionen im eigenen HTML code
StandByKostenRechnerW_C_h(iWatt, iCent, ih);

`Beispiel: <a onclick="Javascript:StandByKostenRechnerW_C_h('27','35.8','24');">Standby TV</a>` 

 - Das Formular wird im Vorhinein ausgefüllt und kann somit auf weitere Beispielsrechnungen hinweisen.
 Z.B. ein TV mit einer StandbyLeistung von 27 Watt erzeugt einen um 7 EUR höheren monatl. Abschlag. (ca 85 EUR Stromkosten bei 35,8 Cent/kWh)
(Überschreibt alle Werte im Formular für die Rechnung)
 - Springt danach zur Formularansicht.

StandByKostenRechner_Watt(i_watt);

`Beispiel: <a onclick="Javascript:StandByKostenRechner_Watt('27');">27 Watt</a>`


 - Z.B. ein TV mit einer StandbyLeistung von 27 Watt erzeugt ca. 85 Stromkosten im Jahr. Bei bereits voreingestellten Werten im Formular.
 - Springt danach zur Formularansicht.

# Anmerkungen

(...) "Der Standby-Verbrauch (auch Stillstandsverbrauch oder Leerlaufverlust) eines Geräts ist der Bedarf 
an elektrischer Leistung oder Energie, der selbst dann anfällt, wenn das Gerät nicht benutzt wird, 
sondern sich lediglich in Bereitschaft (in einem Energiesparmodus) befindet." (...) 
[www.energie-lexikon.info](https://www.energie-lexikon.info/standby_verbrauch.html)


## autom. AKW Berechnung
Es wird je nachdem ob der Energiebezug groß genug ist ... auch der Energieerzeuger AKW (Atomkraftwerk)
angezeigt in ROT. Hierbei wird angenommen jeder dt. Haushalt hätte diesen "Energiehunger" der angegebenen Watt.

## autom. Strompreisbremse(n) 2023/2024 - Berechnung

[faq-strompreisbremse.pdf von bundesregierung.de](https://www.bundesregierung.de/breg-de/themen/stromkostenrechner)

**... "Denn für bis zu 80 Prozent des Verbrauchs zahlt sie nur 40 ct/kWh, für 20 Prozent zahlt sie 50 ct/kWh." ...**

Beispiel: Strompreisbreme bei E.ON mit **41,55 Cent/kWh**   (**&#8792; 40,31 Cent/kWh** mit Strompreisbremse)

Rechnung: E [kWh/Jahr] * **(80/100 * 0,40 [€/kWh] + 20/100 * 0,4155 [€/kWh])** = x [€/Jahr] (Jahresabrechnung)

Zahlen werden im Bemerkungsfeld (unterhalb Jahrespreis) angezeigt, **wenn der Stromtarif mit mehr als 40 Cent/kWh** berechnet wurde.

# Beispiele:

Standby Server: [150 Watt an 16 Stunden/Tag](https://fixcoder.github.io/kWh-Standby-Stromkostenrechner/index.html?watt=150&stunden=16&cent=35.8) 

#### minimaler Standby Verbrauch (Tarif:Green-Planet-Energy und E.ON in Dez 2023):

[27 Watt 24/7/365 und 35,8 Cent/kWh](https://fixcoder.github.io/kWh-Standby-Stromkostenrechner/index.html?watt=27&stunden=24&cent=35.8) = 84,67 € / Jahr **Green-Planet-Energy**

[27 Watt 24/7/365 und E.ON Strompreis **49,0 Cent/kWh**](https://fixcoder.github.io/kWh-Standby-Stromkostenrechner/index.html?watt=27&stunden=24&cent=49) = 115,89 € / Jahr **E.ON**

Unterschied: [31,22 € / Jahr ](https://fixcoder.github.io/kWh-Standby-Stromkostenrechner/index.html?watt=27&stunden=24&cent=13.2)  - 17,03 € (Strompreisbremse) = 14,19 € > 0 !


#### Alte Glühbirne gegenüber einer LED (gleiche Lichtleistung):

[60 Watt Glühbirne 8 Stunden eingeschaltet in jeder Nacht im Jahr](https://fixcoder.github.io/kWh-Standby-Stromkostenrechner/index.html?watt=60&stunden=8&cent=35.8) = 62,72 € / Jahr 

[4 Watt LED 8 Stunden eingeschaltet in jeder Nacht im Jahr](https://fixcoder.github.io/kWh-Standby-Stromkostenrechner/index.html?watt=4&stunden=8&cent=35.8) = 4,18 €  / Jahr 

Ersparnis: [58.54 €  / Jahr ](https://fixcoder.github.io/kWh-Standby-Stromkostenrechner/index.html?watt=56&stunden=8&cent=35.8) (z.B.: Ultraeffiziente E27 Lampe)

# Arbeitspreis


<table>
<tr><td width="30%">Preisbestandteile Tarif Strom</td>
    <td width="40px" class="c">Einheit</td>
    <td width="40px" class="c">bisher</td>
    <td width="40px" class="c">ab 1.3.2024</td>
    <td width="25%"><div id="idposkWhJahr">Differenz</div></td>
</tr>

<tr style="background-color:lightgrey;"><td colspan=5>Arbeitspreis</td></tr> 

<tr><td>Strombeschaffung und Vertrieb (variiert je nach Stromanbieter)</td>
<td >Cent/kWh</td>
<td >15,662</td><td>15,662</td>
<td></td>
</tr>

<tr><td>&nbsp;+&nbsp;<b>Netznutzungsentgelte</b></td>
<td><b>Cent/kWh</b></td>
<td><b>9,249</b></td>
<td><b>11,636</b></td>
<td><b>&#x0394; 2,387</b></td>
</tr>

<tr><td>&nbsp;+&nbsp;Stromsteuer (Ökosteuer)</td><td class="c">Cent/kWh</td><td class="b">2,050</td><td class="b">2,050</td><td></td></tr>
<tr><td>&nbsp;+&nbsp;Paragraph-19-Umlage</td><td class="c">Cent/kWh</td><td class="b">0,417</td><td class="b">0,417</td><td></td></tr>
<tr><td>&nbsp;+&nbsp;Offshore-Netzumlage</td><td class="c">Cent/kWh</td><td class="b">0,591</td><td class="b">0,591</td><td></td></tr>
<tr><td>&nbsp;+&nbsp;KWK-Abgabe</td><td class="c">Cent/kWh</td><td class="b">0,357</td><td class="b">0,357</td><td></td></tr>
<tr><td>&nbsp;+&nbsp;Konzessionsabgabe</td><td class="c">Cent/kWh</td><td class="b">1,758</td><td class="b">1,758</td><td></td></tr>

<tr><td>Zwischensumme</td><td class="c">Cent/kWh</td><td class="b">= 30,084</td><td class="b">= 32,471</td><td></td></tr>
    
<tr><td>&nbsp;+&nbsp;Umsatzsteuer (19%)</td><td class="c">Cent/kWh</td><td class="b">5,716</td><td>6,169</td>
<td><b>&#x0394; 0,453</b> zusätzliche Steuereinnahmen :-)</td></tr>
<tr><td>&sum;</td><td>Cent/kWh</td><td><b>&sum; 35,80</b></td><td ><b>&sum; 38,64</b></td><td>&sum;&#x0394; 2,84</td></tr> 
</table> 






