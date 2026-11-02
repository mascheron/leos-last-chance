const N=(id,t,title,norm,kurz,punkte,merke,cards,quiz)=>({id,f:"V",t,title,norm,kurz,punkte,merke,cards,quiz});
const Q=(q,o,a,e)=>({q,o,a,e});
module.exports=[
N("v10","StVO","Verkehrszeichen, Lichtzeichen, Polizeizeichen","§§ 36, 37, 39–43 StVO",
"Verkehrszeichen und Lichtzeichen binden Verkehrsteilnehmer; Weisungen von Polizeibeamten gehen vor.",
["§ 36 StVO: Zeichen und Weisungen der Polizeibeamten gehen allen anderen Regeln und Zeichen vor","§ 37 StVO: Wechsellichtzeichen – Grün Fahrt frei, Gelb Halt vor Kreuzung (soweit nicht gefährlich), Rot Halt","Lichtzeichen gehen Vorrang-Verkehrszeichen vor","Gefahrzeichen, Vorschriftzeichen, Richtzeichen (§§ 39–43)","Verkehrszeichen sind Verwaltungsakte (Allgemeinverfügungen) – gelten auch gegen Betroffene, wenn sie sichtbar sind (Sichtbarkeitsgrundsatz)","Rotlichtverstoß: qualifiziert, wenn Rot länger als 1 Sekunde andauert (BKat)","Gelb: Anhalten, wenn möglich; Fahrstreifenbeschränkung durch Zeichen 245 usw."],
"Polizei vor Ampel vor Schild vor Regel",
[["Rangfolge der Weisungen?","Polizeibeamter, Lichtzeichen, Verkehrszeichen, Regel."],["Wann ist ein Rotlichtverstoß qualifiziert?","Wenn die Ampel schon länger als 1 Sekunde Rot zeigt."]],
[Q("Was gilt zuerst?",["Verkehrszeichen","Polizeibeamter","Gelbes Licht","Vorfahrtsregel"],1,"§ 36 StVO."),Q("Rotlicht gilt als qualifiziert nach …",["0,5 Sekunden","1 Sekunde","3 Sekunden","5 Sekunden"],1,"BKat: ab 1 Sekunde.")]),

N("v11","StVO","Halten & Parken","§ 12 StVO",
"Halten ist eine gewollte Fahrtunterbrechung; Parken liegt vor, wenn das Fahrzeug verlassen oder länger als 3 Minuten gehalten wird.",
["Halten: gewollte Fahrtunterbrechung","Parken: Fahrzeug verlassen oder länger als 3 Minuten halten","Haltverbote u. a.: an engen und unübersichtlichen Stellen, im Bereich scharfer Kurven, vor und hinter Kreuzungen und Einmündungen bis 5 m, 5 m vor Fußgängerüberwegen","Parkverbote u. a.: vor Grundstücksein- und -ausfahrten, auf Bahnübergangsbereichen","Parken auf Gehwegen nur mit Zeichen; Feuerwehrzufahrten freihalten","Verkehrsrechtliche Anordnung/Abschleppen: Verwaltungsvollstreckung bzw. unmittelbare Ausführung (Polizeirecht)","Ordnungswidrigkeit nach § 49 StVO i. V. m. § 24 StVG, Verwarnungsgeld"],
"Halten = gewollte Unterbrechung · Parken > 3 Minuten",
[["Definition Parken?","Verlassen des Fahrzeugs oder Halten länger als 3 Minuten."],["Halteverbot an Kreuzungen?","Je 5 m vor und hinter den Schnittpunkten der Fahrbahnkanten."]],
[Q("Parken liegt vor bei Halten länger als …",["1 Minute","3 Minuten","5 Minuten","10 Minuten"],1,"§ 12 Abs. 2 StVO."),Q("Halten ist unzulässig …",["an Kreuzungen bis 5 m","nie","immer","nur nachts"],0,"§ 12 Abs. 3 StVO.")]),

N("v12","StVO","Geschwindigkeit, Abstand & Messverfahren","§§ 3, 4 StVO · Messverfahren",
"Die Geschwindigkeit ist den Verhältnissen anzupassen. Abstand und Messverfahren sind typische Prüfungsthemen.",
["§ 3 Abs. 1: Anpassung an Straßen-, Verkehrs-, Sicht-, Wetterverhältnisse","§ 3 Abs. 3: Pkw innerorts 50, außerorts 100 km/h","Autobahn: Richtgeschwindigkeit 130 km/h (Autobahn-Richtgeschwindigkeits-Verordnung)","§ 4 Abs. 1: Abstand so groß, dass hinter dem Vorausfahrenden gehalten werden kann; Faustformel halber Tachowert in Metern","Messverfahren: Radar, Laser (Lidar), Nachfahren, Lichtschranke, Abstandsmessung","Messtoleranz: 3 km/h bis 100 km/h, 3 % darüber (Sicherheitsabzug)","Verwarnung/Anzeige: je nach Überschreitung (BKat)"],
"Abstand: halber Tacho",
[["Faustformel Abstand?","Halber Tachowert in Metern."],["Innerorts-Höchstgeschwindigkeit?","50 km/h."]],
[Q("Richtgeschwindigkeit Autobahn?",["100","120","130","150"],2,"130 km/h."),Q("Messtoleranz bis 100 km/h?",["1","3","5","10"],1,"3 km/h Abzug.")]),

N("v13","Straftaten","Verbotene Kraftfahrzeugrennen & weitere Verkehrsstraftaten","§§ 315d, 316a, 315f StGB",
"§ 315d StGB erfasst Raser und Rennen. Weitere Verkehrsstraftaten betreffen räuberische Angriffe und Einziehung von Fahrzeugen.",
["§ 315d Abs. 1: verbotenes Kraftfahrzeugrennen (ausrichten, durchführen, teilnehmen, Einzelrennen) – Freiheitsstrafe bis 2 Jahre oder Geldstrafe","§ 315d Abs. 2: mit Gefährdung von Leib oder Leben oder fremden Sachen von bedeutendem Wert: bis 5 Jahre","§ 315d Abs. 5: Tod oder schwere Gesundheitsschädigung: Freiheitsstrafe von 1 bis 10 Jahren (Verbrechen)","Einzelraser: Absicht, höchstmögliche Geschwindigkeit zu erreichen, grob verkehrswidrig und rücksichtslos","§ 315f StGB: Einziehung von Fahrzeugen","§ 316a StGB: räuberischer Angriff auf Kraftfahrer","Entziehung der Fahrerlaubnis: § 69 StGB"],
"315d = Rennen",
[["Strafrahmen § 315d Abs. 1?","Freiheitsstrafe bis zu 2 Jahren oder Geldstrafe."],["Was ist ein Einzelrennen?","Fahren mit nicht angepasster Geschwindigkeit, um höchstmögliche Geschwindigkeit zu erreichen."]],
[Q("§ 315d StGB regelt …",["Trunkenheit","Verbotene Kraftfahrzeugrennen","Fahrerflucht","Handynutzung"],1,"Verbotene Kraftfahrzeugrennen."),Q("Wann liegt ein Verbrechen vor (§ 315d Abs. 5)?",["Bei Geldstrafe","Bei Tod oder schwerer Gesundheitsschädigung","Nur bei Alkohol","Nie"],1,"1–10 Jahre Freiheitsstrafe.")]),

N("v14","Fahrerlaubnis","Entziehung, Fahrverbot, vorläufige Maßnahmen","§§ 69, 69a, 44 StGB · § 111a StPO · § 25 StVG · §§ 11, 13, 14 FeV",
"Bei Verkehrsstraftaten kann die Fahrerlaubnis entzogen werden; Fahrverbot ist eine Nebenstrafe bzw. Nebenfolge.",
["§ 69 StGB: Entziehung bei Ungeeignetheit; Regelfall bei § 142, § 315c, § 316 u. a. (Abs. 2)","§ 69a StGB: Sperrfrist für Neuerteilung (6 Monate bis 5 Jahre, auch lebenslang)","§ 44 StGB: Fahrverbot als Nebenstrafe (1 bis 6 Monate)","§ 25 StVG: Fahrverbot als Nebenfolge einer OWi (1 bis 3 Monate)","§ 111a StPO: vorläufige Entziehung durch Richter","§ 94 Abs. 3 StPO: Führerschein sicherstellen/beschlagnahmen","FeV §§ 11, 13, 14: Eignungszweifel, MPU bei Alkohol ab 1,6 ‰ bzw. Drogen"],
"Entziehung 69 · Fahrverbot 44/25",
[["Dauer Fahrverbot § 44 StGB?","1 bis 6 Monate."],["Dauer Fahrverbot § 25 StVG?","1 bis 3 Monate."],["Wer ordnet § 111a StPO an?","Der Richter."]],
[Q("Regelfall der Entziehung bei …",["jeder OWi","§ 315c und § 316 StGB","Bagatell-Verstoß","Parken"],1,"§ 69 Abs. 2 StGB."),Q("Fahrverbot als Nebenstrafe nach § 44 StGB dauert …",["1–3 Monate","1–6 Monate","6–12 Monate","1 Jahr"],1,"§ 44 StGB.")]),

N("v15","Verkehrsüberwachung","Verkehrsunfall: Ursachen, Aufnahme, Beweissicherung","§ 34 StVO · § 142 StGB · Unfallstatistik",
"Die Polizei sichert die Unfallstelle, leistet Hilfe, nimmt den Sachverhalt auf und prüft Straftaten.",
["Hauptunfallursachen laut Unfallstatistik: nicht angepasste Geschwindigkeit, Vorfahrt/Vorrang, Abstand, Abbiegen, Alkohol, Ablenkung","Unfallaufnahme: Absicherung, Verletzte, Spuren (Bremsspur, Endlage, Schäden), Zeugen, Fotos, Skizze","Beteiligte: Personalien, Fahrerlaubnis, Zulassung, Versicherung","Hinweise zur Regulierung (zivilrechtlich)","Prüfung § 142 StGB bei Unfallflucht, § 222/§ 229 StGB bei Personenschaden","Bagatellunfall: Sachschaden gering – Verwarnung oder Anzeige","Alkohol-/Drogenkontrolle: Vortest, ggf. Blutprobe (§ 81a StPO)"],
"Sichern – Helfen – Aufnehmen",
[["Was gehört zur Unfallaufnahme?","Absicherung, Verletzte, Spuren, Zeugen, Fotos, Skizze, Personalien."],["Welche StGB-Normen prüfst du bei Personenschaden?","§ 222, § 229 StGB, ggf. § 142 StGB."]],
[Q("Was folgt zuerst nach Eintreffen?",["Skizze","Absicherung und Hilfe","Vernehmung","Anzeige"],1,"Sicherheit und Rettung zuerst."),Q("Fahrlässige Körperverletzung ist …",["§ 222 StGB","§ 229 StGB","§ 142 StGB","§ 316 StGB"],1,"§ 229 StGB.")]),

N("v16","StVO","Sonderrechte, Wegerecht, Rettungsgasse","§§ 35, 38, 11 Abs. 2 StVO",
"Polizei hat Sonderrechte nach § 35, Wegerecht nach § 38 bei blauem Blinklicht und Einsatzhorn.",
["§ 35 Abs. 1: Polizei von den Vorschriften der StVO befreit, soweit dies zur Erfüllung hoheitlicher Aufgaben dringend geboten ist","§ 35 Abs. 8: Sonderrechte nur unter gebührender Berücksichtigung der öffentlichen Sicherheit und Ordnung","§ 38 Abs. 1: blaues Blinklicht + Einsatzhorn = höchste Eile geboten: alle übrigen Verkehrsteilnehmer müssen sofort freie Bahn schaffen","Blaues Blinklicht allein: Hinweis auf Gefahrenstelle bzw. Einsatzfahrt","Rettungsgasse: § 11 Abs. 2 StVO bei stockendem Verkehr","Gelbes Blinklicht: Warnung vor Gefahr (§ 38 Abs. 2)","Haftung: Sonderrecht entbindet nicht von Sorgfaltspflichten"],
"Blau + Horn = freie Bahn",
[["Wann besteht Wegerecht?","Bei blauem Blinklicht zusammen mit Einsatzhorn (§ 38 Abs. 1)."],["Wo ist die Rettungsgasse geregelt?","§ 11 Abs. 2 StVO."]],
[Q("Was bedeutet blaues Blinklicht mit Einsatzhorn?",["Hinweis","Höchste Eile – sofort freie Bahn","Nur Warnung","Gar nichts"],1,"§ 38 Abs. 1 StVO."),Q("Sonderrechte nach § 35 gelten …",["unbeschränkt","unter gebührender Berücksichtigung der öffentlichen Sicherheit","nur nachts","nur Feuerwehr"],1,"§ 35 Abs. 8 StVO.")]),

N("v17","OWi","Typische Verkehrsordnungswidrigkeiten","§ 49 StVO · § 24 StVG · BKatV",
"Typische Verstöße werden nach dem Bußgeldkatalog geahndet. Wichtige Beispiele für die Prüfung.",
["Handynutzung am Steuer (§ 23 Abs. 1a StVO): 100 €, 1 Punkt","Gurt nicht angelegt (§ 21a StVO): Verwarnungsgeld","Rotlichtverstoß qualifiziert (> 1 s): Bußgeld, 2 Punkte, 1 Monat Fahrverbot","Geschwindigkeits- und Abstandsverstöße nach BKat gestaffelt","Alkohol/Drogen: § 24a StVG (0,5 ‰ / 0,25 mg/l), § 24c StVG","Verfolgungsverjährung: 3 Monate (§ 26 Abs. 3 StVG)","Verwarnung bis 55 € (§ 56 OWiG), Bußgeld ab 60 €"],
"Handy 100 € · 1 Punkt",
[["Handyverstoß Folgen?","100 €, 1 Punkt."],["Verwarnungsgeld bis?","55 €."]],
[Q("Welche Sanktion bei Handynutzung als Kfz-Führer?",["10 €","100 € und 1 Punkt","500 €","Fahrverbot 3 Monate"],1,"BKat."),Q("Verfolgungsverjährung bei Verkehrs-OWi?",["3 Monate","6 Monate","1 Jahr","2 Jahre"],0,"§ 26 Abs. 3 StVG.")])
];
