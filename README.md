# kWh-Standby-Stromkosten-Rechner 

![grafik](https://github.com/fixcoder/kWh-Standby-Stromkostenrechner/assets/152872653/b8e6a9f7-504b-4c05-b565-291a231fca41)


[hier clicken zum Ausprobieren](https://fixcoder.github.io/kWh-Standby-Stromkostenrechner/)

## kWh-Standby-Stromkosten-Rechner

Kosten und Energie aus der Leistung in Watt berechnen. Gruß Maik

(Die Strompreisbremse wird bisher nicht berücksichtigt)

Merkregel: 1 Watt &#8792; 3 EUR/Jahr


## Installation
Dieser Standby-Stromkosten-Kosten Rechner wird mit einer Javascriptdatei, CSS und mit einer HTML Datei geliefert.
Die Dateien sind in ein gemeinsames Verzeichnis abzulegen. Die HTML Datei im Browser laden/starten.


## Berechnungs- Variante 1)
Nun wird die IST Leistung (Watt) abgefragt.
(Kosten Cent/kWh wird voreingestellt, sowie auch die Betriebszeit oder StandbyZeit = 24h an 365 Tagen im Jahr).
Hiernach wird der Leistungspreis berechnet.

Die Grundgebühr des Stromversorgers 
- ca. 13,9 EUR/Monat für einen mME Zähler = Moderne Messeinrichtung
- ca. 8,90 EUR/Monat für den alten schwarzen Drehscheiben-\Ferraris-Zähler

wird in der Rechnung nicht betrachtet. Siehe auch Anmerkung.

Jetzt ist der jährliche Strompreis abschätzbar.

## Berechnungs- Variante 1.2)

Wird eine Zeit > 24 Stunden angegeben, dann wird umgeschaltet auf Betriebszeit 
(d.h. hier wird NICHT auf die Laufzeit auf ein Jahr hochgerechnet) sondern nur die angegebene Betriebszeit.


## Berechnungs- Variante 2)
Auch kann in der ersten Zeile eine kl. math. Rechnung durchgeführt werden. Exemplarisch z.B. einen
geschätzten Energiebezug bei einem 1-Personenhaushalt von 5 kWh/Tag. 365*5 (= click darauf) = 1825 kWh/ Jahr.
Diese jährliche kWh Größe wird auf den Watt-Bezug umgerechnet (je nach voreingestellten Werten).

## autom. weitere AKW Berechnung
Es wird je nach dem ob der Energiebezug groß genug ist ... auch der Energieerzeuger AKW (Atomkraftwerk)
angezeigt in ROT. Hierbei wird angenommen jeder dt. Haushalt hätte diesen "Energiehunger" der angegebenen Watt.

Beispiel:
[homepage](https://www.maikschulte.de/loesungen-klimawandel.php#MaiksStandbyStromkostenRechner)

## nützliche Javascript Funktionen im eigenen HTML code
StandByKostenRechnerW_C_h(iWatt, iCent, ih);

 - Das Formular wird gefüttert d.h. im vorhinein ausgefüllt und kann somit auf weitere Beispielsrechnungen hinweisen.
 Z.B. ein TV mit einer StandbyLeistung von 27 Watt erzeugt einen um 7 EUR höheren monatl. Abschlag. (ca 85 EUR Stromkosten bei 35,8 Cent/kWh)
(Überschreibt alle Werte im Formular für die Rechnung)
 - Springt danach zur Formularansicht.


StandByKostenRechner_Watt(i_watt);

 - Z.B. ein TV mit einer StandbyLeistung von 27 Watt erzeugt ca. 85 Stromkosten im Jahr. Bei bereits voreingestellten Werten im Formular.
 - Springt danach zur Formularansicht.

## Hyperlink zur Berechnung (hier auf github)

[https://fixcoder.github.io/kWh-Standby-Stromkostenrechner/index.html?**watt=27**&**stunden=24**&**cent=35.8**](https://fixcoder.github.io/kWh-Standby-Stromkostenrechner/index.html?watt=27&stunden=24&cent=35.8)

### Beispiele:
#### minimaler Standby Verbrauch (Tarif:Green-Planet-Energy und E.ON in Dez 2023):

[27 Watt Verbrauch an 24 Stunden an jedem Tag im Jahr (&#8792;24/7/365) und Strompreis 35,8 Cent/kWh](https://fixcoder.github.io/kWh-Standby-Stromkostenrechner/index.html?watt=27&stunden=24&cent=35.8) 

= 84,67 € / Jahr **Green-Planet-Energy**

[27 Watt Verbrauch an 24 Stunden an jedem Tag im Jahr (&#8792;24/7/365) und E.ON Strompreis **49,0 Cent/kWh**](https://fixcoder.github.io/kWh-Standby-Stromkostenrechner/index.html?watt=27&stunden=24&cent=49)

= 115,89 € / Jahr **E.ON**

Unterschied: [31,22 € / Jahr ](https://fixcoder.github.io/kWh-Standby-Stromkostenrechner/index.html?watt=27&stunden=24&cent=13.2)

#### Alte Glühbirne gegenüber einer LED (gleiche Lichtleistung):

[60 Watt Glühbirne 8 Stunden eingeschaltet in jeder Nacht im Jahr und  Strompreis 35,8 Cent/kWh](https://fixcoder.github.io/kWh-Standby-Stromkostenrechner/index.html?watt=60&stunden=8&cent=35.8)

= 62,72 € / Jahr 

[4 Watt LED 8 Stunden eingeschaltet in jeder Nacht im Jahr und Strompreis 35,8 Cent/kWh](https://fixcoder.github.io/kWh-Standby-Stromkostenrechner/index.html?watt=4&stunden=8&cent=35.8)

= 4,18 €  / Jahr 

Ersparrnis: [58.54 €  / Jahr ](https://fixcoder.github.io/kWh-Standby-Stromkostenrechner/index.html?watt=56&stunden=8&cent=35.8)

(z.B.: Ultraeffiziente E27 Lampe)

#### Merkregel (1 Watt &#8792; 3 €):

[1 Watt Verbrauch 24/7/365 im Jahr und Strompreis 35,8 Cent/kWh](https://fixcoder.github.io/kWh-Standby-Stromkostenrechner/index.html?watt=1&stunden=24&cent=35.8)

= 3,14 € / Jahr 

## Anmerkung vorab zur Strompreisbremse

z.B.: ... "Denn für bis zu 80 Prozent des Verbrauchs zahlt sie nur 40 ct/kWh, für 20 Prozent zahlt sie 50 ct/kWh." ...
Strompreisbreme bei E.ON mit 41,55 ct/kWh ( [kWh/Jahr] * 80% * 0,4 + [kWh/Jahr] * 20% * 0,4155 = Euro Jahresrechnung)





