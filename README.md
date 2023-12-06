# kwh-rechner

## Stromkosten-Rechner

Kosten und Energie aus der Leistung in Watt berechnen.
Gruß Maik

## Installation
Dieser Standby Kosten Rechner wird mit einer Javascriptdatei und einer HTML Datei geliefert.
Beide Dateien sind in ein Verzeichnis abzulegen. Die HTML Datei im Browser laden/starten.

## Berechnungs- Variante 1)
Nun wird die IST Leistung (Watt) abgefragt.
(Kosten Cent/kWh wird voreingestellt, sowie auch die Betriebszeit oder StandbyZeit = 24h an 365 Tagen).
Hiernach wird der Leistungspreis berechnet.
(Der Arbeitspreis d.h. die Grundgebühr des Stromversorgers (ca.13,9 EUR/Monat) wird in der Rechnung nicht betrachtet. Siehe auch Anmerkung.)

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
 - Z.B. ein TV mit einer StandbyLeistung von 27 Watt erzeugt x Stromkosten im Jahr. (Überschreibt alle Werte im Formular für die Rechnung)
 - Springt danach zur Formularansicht.


StandByKostenRechner_Watt(i_watt);

 - zB. ein TV mit einer StandbyLeistung von 27 Watt erzeugt x Stromkosten im Jahr. Bei bereits voreingestellten Werten im Formular.
 - Springt danach zur Formularansicht.