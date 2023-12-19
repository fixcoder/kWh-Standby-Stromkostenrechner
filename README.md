# kWh-Standby-Stromkosten-Rechner 

![grafik](https://github.com/fixcoder/kWh-Standby-Stromkostenrechner/assets/152872653/b8e6a9f7-504b-4c05-b565-291a231fca41)


[hier clicken zum Ausprobieren](https://fixcoder.github.io/kWh-Standby-Stromkostenrechner/)

## kWh-Standby-Stromkosten-Rechner

Kosten und Energie aus der Leistung in Watt berechnen. Gruß Maik

## Installation
Dieser Standby-Stromkosten-Kosten Rechner wird mit einer Javascriptdatei, CSS und mit einer HTML Datei geliefert.
Die Dateien sind in ein gemeinsames Verzeichnis abzulegen. Die HTML Datei im Browser laden/starten.

## Berechnungs- Variante 1)
Nun wird die IST Leistung (Watt) abgefragt.
(Kosten Cent/kWh wird voreingestellt, sowie auch die Betriebszeit oder StandbyZeit = 24h an 365 Tagen im Jahr).
Hiernach wird der Leistungspreis berechnet.
(Die Grundgebühr des Stromversorgers (ca.13,9 EUR/Monat) wird in der Rechnung nicht betrachtet. Siehe auch Anmerkung.)

Jetzt ist der jährliche Strompreis abschätzbar.

## Berechnungs- Variante 2)
Auch kann in der ersten Zeile eine kl. math. Rechnung durchgeführt werden. Exemplarisch z.B. einen
geschätzten Energiebezug bei einem 1-Personenhaushalt von 5 kWh/Tag. 365*5 (= click darauf) = 1825 kWh/ Jahr.
Diese jährliche kWh Größe wird auf den Watt-Bezug umgerechnet (je nach voreingestellten Werten).

## autom. weitere AKW Berechnung
Es wird je nach dem ob der Energiebezug groß genug ist ... auch der Energieerzeuger AKW (Atomkraftwerk)
angezeigt in ROT. Hierbei wird angenommen jeder dt. Haushalt hätte diesen "Energiehunger" der angegebenen Watt.

Beispiel:
[homepage](https://www.maikschulte.de/loesungen-klimawandel.php#MaiksStandbyStromkostenRechner)

Merkregel: 1 Watt = 3 EUR/Jahr

## nützliche Javascript Funktionen im eigenen HTML code
StandByKostenRechnerW_C_h(iWatt, iCent, ih);

 - Das Formular wird gefüttert d.h. im vorhinein ausgefüllt und kann somit auf weitere Beispielsrechnungen hinweisen.
 Z.B. ein TV mit einer StandbyLeistung von 27 Watt erzeugt einen um 7 EUR höheren monatl. Abschlag. (ca 85 EUR Stromkosten bei 35,8 Cent/kWh)
(Überschreibt alle Werte im Formular für die Rechnung)
 - Springt danach zur Formularansicht.


StandByKostenRechner_Watt(i_watt);

 - Z.B. ein TV mit einer StandbyLeistung von 27 Watt erzeugt ca. 85 Stromkosten im Jahr. Bei bereits voreingestellten Werten im Formular.
 - Springt danach zur Formularansicht.

## (hier auf github) hyperlink zur Berechnung 

[https://fixcoder.github.io/kWh-Standby-Stromkostenrechner/index.html?**watt=27**&**stunden=24**&**cent=35.8**](https://fixcoder.github.io/kWh-Standby-Stromkostenrechner/index.html?watt=27&stunden=24&cent=35.8)

Beispiele:
minimaler Standby Verbrauch (bei unterschiedlichen Tarifen Green-Planet-Energy und E.ON Dez 2023):

84,67 € = [27 Watt an 24 Stunden an 365 Tagen im Jahr. Strompreis 38,8 Cent/kWh](https://fixcoder.github.io/kWh-Standby-Stromkostenrechner/index.html?watt=27&stunden=24&cent=35.8)

115,89 € = [27 Watt an 24 Stunden an 365 Tagen im Jahr. Strompreis **49,0 Cent/kWh**](https://fixcoder.github.io/kWh-Standby-Stromkostenrechner/index.html?watt=27&stunden=24&cent=49)


Alte Glühbirne gegenüber einer LED (gleiche Lichtleistung):

62,72 € = [60 Watt Glühbirne eingeschaltet 8 Stunden an 365 Tagen im Jahr. Strompreis 38,8 Cent/kWh](https://fixcoder.github.io/kWh-Standby-Stromkostenrechner/index.html?watt=60&stunden=8&cent=35.8)

4,18 € = [4 Watt LED eingeschaltet 8 Stunden an 8 Tagen im Jahr. Strompreis 38,8 Cent/kWh](https://fixcoder.github.io/kWh-Standby-Stromkostenrechner/index.html?watt=4&stunden=8&cent=35.8)

58,54 € = [(60-4) Ersparrnis 56 Watt an 8 Stunden an 365 Tagen im Jahr. Strompreis 38,8 Cent/kWh](https://fixcoder.github.io/kWh-Standby-Stromkostenrechner/index.html?watt=56&stunden=8&cent=35.8)


Merkregel (1 Watt enspricht einem +Jahrespreis von ca. 3 €):

3,14 € = [1 Watt an 24 Stunden an 365 Tagen im Jahr. Strompreis 38,8 Cent/kWh](https://fixcoder.github.io/kWh-Standby-Stromkostenrechner/index.html?watt=1&stunden=24&cent=35.8)



