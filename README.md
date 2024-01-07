# kWh-Standby-Stromkosten-Rechner 

![3_Screenshot](https://github.com/fixcoder/kWh-Standby-Stromkostenrechner/assets/152872653/c24dcd6d-0c0c-43eb-b5ae-f4e43f4f077c)


[Hier klicken zum Ausprobieren](https://fixcoder.github.io/kWh-Standby-Stromkostenrechner/)

## kWh-Standby-Stromkosten-Rechner V2.2
Kosten und Energie aus der Leistung [Watt] berechnen. Gruß Maik

Incl. Strompreisbremse. Hierzu muß der Strompreis mit einem Tarif mit mehr als 40 Cent/kWh berechnet sein, 
dann werden die Vergünstigungen im Bemerkungsfeld angezeigt.

Merkregel: [1 Watt &#8792; 3 EUR pro Jahr](https://fixcoder.github.io/kWh-Standby-Stromkostenrechner/index.html?watt=1&stunden=24&cent=35.8) = 3,14 € / Jahr 


## Installation
Dieser Standby-Stromkosten-Kosten Rechner wird mit einer Javascriptdatei, einer CSS und mit einer HTML Datei geliefert.
Die Dateien sind in ein gemeinsames Verzeichnis abzulegen. Die HTML Datei im Browser laden/starten.

## Berechnungs- Variante 1)
Nun wird die Ist-Leistung (Watt) abgefragt.
Die Kosten [Cent/kWh] wird voreingestellt, sowie auch die Betriebszeit oder StandbyZeit = 24h an 365 Tagen im Jahr.
Hiernach wird der Leistungspreis berechnet.

Die Grundgebühr des Stromversorgers 
- ca. 13,9 EUR/Monat für einen mME Zähler = Moderne Messeinrichtung
- ca. 8,90 EUR/Monat für den alten schwarzen Drehscheiben-\Ferraris-Zähler

wird in der Rechnung nicht betrachtet. Siehe auch Anmerkung.
Jetzt ist der jährliche Strompreis abschätzbar.

## Berechnungs- Variante 2)

Wird eine Zeit > 24 Stunden angegeben, dann wird umgeschaltet auf Betriebszeit.
D.h. hier wird NICHT auf die Laufzeit auf ein Jahr hochgerechnet.

## Berechnungs- Variante 3)
Auch kann in der ersten Zeile eine kl. math. Rechnung durchgeführt werden. Exemplarisch z.B. einen
geschätzten Energiebezug bei einem 1-Personenhaushalt von 5 kWh/Tag. 365*5 (Klick auf das Gleichheitszeichen!) = 1825 kWh/ Jahr.
Diese jährliche Größe [kWh] wird auf den Watt-Bezug umgerechnet (voreingestellte Werte werden berücksichtigt).

Beispiel: [homepage](https://www.maikschulte.de/loesungen-klimawandel.php#MaiksStandbyStromkostenRechner)

## Hyperlink zur Berechnung (hier auf github)

[https://fixcoder.github.io/kWh-Standby-Stromkostenrechner/index.html?**watt=27**&**stunden=24**&**cent=35.8**](https://fixcoder.github.io/kWh-Standby-Stromkostenrechner/index.html?watt=27&stunden=24&cent=35.8)

## nützliche Javascript Funktionen im eigenen HTML code
StandByKostenRechnerW_C_h(iWatt, iCent, ih);

 - Das Formular wird im Vorhinein ausgefüllt und kann somit auf weitere Beispielsrechnungen hinweisen.
 Z.B. ein TV mit einer StandbyLeistung von 27 Watt erzeugt einen um 7 EUR höheren monatl. Abschlag. (ca 85 EUR Stromkosten bei 35,8 Cent/kWh)
(Überschreibt alle Werte im Formular für die Rechnung)
 - Springt danach zur Formularansicht.

StandByKostenRechner_Watt(i_watt);

 - Z.B. ein TV mit einer StandbyLeistung von 27 Watt erzeugt ca. 85 Stromkosten im Jahr. Bei bereits voreingestellten Werten im Formular.
 - Springt danach zur Formularansicht.

# Anmerkungen

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

Unterschied: [31,22 € / Jahr ](https://fixcoder.github.io/kWh-Standby-Stromkostenrechner/index.html?watt=27&stunden=24&cent=13.2)

#### Alte Glühbirne gegenüber einer LED (gleiche Lichtleistung):

[60 Watt Glühbirne 8 Stunden eingeschaltet in jeder Nacht im Jahr](https://fixcoder.github.io/kWh-Standby-Stromkostenrechner/index.html?watt=60&stunden=8&cent=35.8) = 62,72 € / Jahr 

[4 Watt LED 8 Stunden eingeschaltet in jeder Nacht im Jahr](https://fixcoder.github.io/kWh-Standby-Stromkostenrechner/index.html?watt=4&stunden=8&cent=35.8) = 4,18 €  / Jahr 

Ersparnis: [58.54 €  / Jahr ](https://fixcoder.github.io/kWh-Standby-Stromkostenrechner/index.html?watt=56&stunden=8&cent=35.8) (z.B.: Ultraeffiziente E27 Lampe)







