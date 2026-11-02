const N=(id,t,title,norm,kurz,punkte,merke,cards,quiz)=>({id,f:"K",t,title,norm,kurz,punkte,merke,cards,quiz});
const Q=(q,o,a,e)=>({q,o,a,e});
module.exports=[
N("k9","Ermittlungsverfahren","Ermittlungsverfahren & Anzeigenaufnahme","§§ 152, 158, 160, 161, 163, 170 StPO · § 152 GVG",
"Das Ermittlungsverfahren beginnt mit dem Anfangsverdacht. Die Staatsanwaltschaft ist Herrin des Verfahrens, die Polizei ermittelt als Ermittlungsperson.",
["§ 152 Abs. 2 StPO: Anfangsverdacht = zureichende tatsächliche Anhaltspunkte","§ 158 StPO: Anzeige/Strafantrag bei StA, Polizei und Amtsgerichten; Anzeigenaufnahme protokollieren","§ 160 StPO: StA erforscht den Sachverhalt, auch entlastende Umstände (Objektivität)","§ 161 StPO: Auskunftsverlangen und Ermittlungen jeder Art durch StA","§ 163 Abs. 1 StPO: Polizei erforscht Straftaten und trifft alle unaufschiebbaren Anordnungen, um Verdunkelung zu verhüten (erster Zugriff)","§ 152 GVG: Ermittlungspersonen der StA (Weisungsbefugnis)","§ 170 StPO: Abschluss – Anklageerhebung (Abs. 1) oder Einstellung mangels Tatverdacht (Abs. 2)","Untersuchungsplan: W-Fragen → Hypothesen → Maßnahmen → Auswertung"],
"Anzeige → Anfangsverdacht → Ermittlungen → § 170",
[["Wer ist Herrin des Ermittlungsverfahrens?","Die Staatsanwaltschaft."],["Was regelt § 163 StPO?","Aufgaben der Polizei im ersten Zugriff: Straftaten erforschen und unaufschiebbare Anordnungen treffen."],["Einstellung mangels Tatverdacht?","§ 170 Abs. 2 StPO."]],
[Q("Wer leitet das Ermittlungsverfahren?",["Die Polizei","Die Staatsanwaltschaft","Das Gericht","Der Verteidiger"],1,"StA = Herrin des Ermittlungsverfahrens."),Q("§ 170 Abs. 2 StPO bedeutet …",["Anklage","Einstellung mangels hinreichenden Tatverdachts","Haftbefehl","Zeugenladung"],1,"Einstellung des Verfahrens."),Q("Anzeigen können erstattet werden bei …",["nur der StA","StA, Polizei und Amtsgerichten","nur dem Gericht","nur beim Verletzten"],1,"§ 158 StPO.")]),

N("k10","Spuren","Spurenkunde & Spurensicherung","Kriminaltechnik · Locard-Prinzip",
"Spuren werden nach Art, Träger und Aussagekraft unterschieden. Sicherung folgt dem Grundsatz: erst dokumentieren, dann sichern – unverfälscht und rückführbar.",
["Spurenarten: Formspuren (Abdrücke), Materialspuren (Blut, Haare, Fasern, Glas, Lack), Mikrospuren, Digitale Spuren","Schuhspuren: Gips-/Silikonabguss, Fotografie mit Maßstab; Reifenspuren; Werkzeugspuren","Biologische Spuren: trocken in Papier verpacken (kein Plastik wegen Schimmel/Zersetzung)","Schmauchspuren (Schusswaffe), Brand- und Brandbeschleunigerspuren","Dokumentation: Fotos (Übersicht, Mittelbereich, Nahaufnahme mit Maßstab), Skizze, Protokoll","Asservierung: Spurenträger beschriften, Kette der Verwahrung (Chain of Custody) wahren","Spurenverursacher vs. Spurenträger; Vergleichsmaterial (Elimination) nehmen"],
"Foto – Beschreibung – Sicherung",
[["Warum biologische Spuren nicht in Plastik?","Feuchtigkeit fördert Zersetzung und Schimmel – trocken in Papier verpacken."],["Chain of Custody?","Lückenlose Dokumentation der Verwahrung von Asservaten."],["Fotografieren von Spuren?","Übersicht, Mittelbereich, Nahaufnahme mit Maßstab."]],
[Q("Wie werden getrocknete biologische Spuren verpackt?",["Plastiktüte","Papier","Alufolie","Glas verschlossen"],1,"Papier verhindert Schimmelbildung."),Q("Zu einer guten Spurenfotografie gehört …",["nur ein Foto","Maßstab","Blitz verboten","Nur Übersicht"],1,"Maßstab ist Pflicht für Nahaufnahmen.")]),

N("k11","Personenbeweis","Beschuldigter, Zeuge, Sachverständiger","§§ 48–55, 69, 72–93, 163 Abs. 3 StPO",
"Die Verfahrensrolle bestimmt Rechte und Pflichten. Polizeizeugen müssen bei der Polizei grundsätzlich nicht erscheinen – bei StA und Gericht schon.",
["Beschuldigter: Verdächtiger nach Einleitung des Ermittlungsverfahrens – Schweigerecht","Zeugenpflichten: Erscheinen, Aussage, Wahrheit; Eid","§ 163 Abs. 3 StPO: Zeugen sind verpflichtet, auf Ladung der Staatsanwaltschaft zu erscheinen und auszusagen; bei der Polizei besteht keine Erscheinenspflicht","§ 52 StPO: Zeugnisverweigerung Angehöriger","§ 53 StPO: Berufsgeheimnisträger","§ 55 StPO: Auskunftsverweigerung bei Selbstbelastungsgefahr","Sachverständiger: Gutachten aufgrund besonderer Sachkunde; Zeuge = Wahrnehmungen"],
"Zeuge nimmt wahr · Sachverständiger beurteilt",
[["Muss ein Zeuge bei der Polizei erscheinen?","Nein – nur auf Ladung der Staatsanwaltschaft oder des Gerichts."],["Unterschied Zeuge / Sachverständiger?","Zeuge berichtet Wahrnehmungen; Sachverständiger beurteilt aufgrund besonderer Sachkunde."]],
[Q("Ein Zeuge wird von der Polizei geladen. Muss er erscheinen?",["Ja immer","Nein, nur bei Ladung durch StA/Gericht","Nur nachts","Nur bei Verbrechen"],1,"§ 163 Abs. 3 StPO."),Q("§ 53 StPO betrifft …",["Angehörige","Berufsgeheimnisträger","Kinder","Sachverständige"],1,"Zeugnisverweigerungsrecht Berufsgeheimnisträger.")]),

N("k12","Identifizierung","Wahllichtbildvorlage, Gegenüberstellung, Phantombild","§ 58 StPO · Nr. 18 RiStBV",
"Zur Identifizierung des Täters durch Zeugen gelten strenge Regeln, damit Verwechslungen und Suggestion vermieden werden.",
["Gegenüberstellung (§ 58 Abs. 2 StPO): Zeuge sieht mehrere Personen; Beschuldigter nicht als solcher erkennbar","Wahlgegenüberstellung: mehrere ähnliche Vergleichspersonen","Wahllichtbildvorlage: mehrere Fotos ähnlicher Personen","Sequenzielle Vorlage reduziert Fehlidentifikationen","Phantombild/Montagebild: Hilfsmittel, erste Fahndung","Dokumentation: Wer, wann, wie wurde vorgelegt, was sagte der Zeuge","Suggestivfragen vermeiden"],
"Mehrere Vergleichspersonen – nicht suggestiv",
[["Was ist eine Wahlgegenüberstellung?","Zeuge sieht Beschuldigten unter mehreren ähnlichen Vergleichspersonen."],["Warum sequenzielle Vorlage?","Sie senkt die Gefahr von Fehlidentifikationen."]],
[Q("Wo ist die Gegenüberstellung geregelt?",["§ 58 StPO","§ 136 StPO","§ 163b StPO","§ 94 StPO"],0,"§ 58 StPO."),Q("Was ist zu vermeiden?",["Dokumentation","Suggestivfragen","Mehrere Fotos","Sequenzielle Vorlage"],1,"Suggestion verfälscht die Aussage.")]),

N("k13","Aussage","Wahrnehmung & Zeugenaussage","Aussagepsychologie",
"Aussagen sind fehleranfällig. Wahrnehmung, Gedächtnis und Wiedergabe beeinflussen die Zuverlässigkeit.",
["Wahrnehmungsfehler: Stress, Waffenfokus, Beleuchtung, Entfernung","Gedächtnis: Vergessenskurve, Rekonstruktion, Beeinflussung durch Nachfragen","Wiedergabe: freie Schilderung zuerst, dann gezielte Fragen","Aussagetüchtigkeit prüfen (Alter, Alkohol, Krankheit)","Realkennzeichen: Detailreichtum, Komplikationen, spontane Korrekturen","Protokoll: wörtlich, ohne Ergänzungen (§ 168a StPO)","Kinder: altersgerechte Befragung, Anwesenheit Bezugsperson prüfen"],
"Erst frei erzählen lassen – dann nachfragen",
[["Was zuerst bei der Zeugenbefragung?","Freie Schilderung, dann gezielte Fragen."],["Was prüft die Aussagetüchtigkeit?","Alter, Alkohol, Krankheit, Verfassung."]],
[Q("Wie beginnt eine gute Zeugenvernehmung?",["Mit Suggestivfragen","Mit freier Schilderung","Mit dem Vorhalt","Mit Belehrung entfällt"],1,"Freier Bericht zuerst."),Q("Ein Realkennzeichen ist …",["Detailreichtum","Wortkargheit","Widerspruchsfreiheit allein","Hohe Emotion"],0,"Detailreichtum und Komplikationen sprechen für Erlebnisbezug.")]),

N("k14","Todesermittlung","Todesermittlung & Leichenschau","§ 159 StPO · §§ 87 ff. StPO",
"Bei unnatürlichem Tod, unbekannter Identität oder unklarer Todesart ist die StA zu verständigen. Todeszeichen und Totenflecke helfen bei Zeitbestimmung und Todesart.",
["§ 159 StPO: Findet sich ein Leichnam unbekannter Identität oder bestehen Anhaltspunkte für nichtnatürlichen Tod → StA sofort verständigen","Sichere Todeszeichen: Totenflecke, Totenstarre, Fäulnis, mit dem Leben unvereinbare Verletzungen","Unsichere Todeszeichen: Atemstillstand, Pulslosigkeit, Pupillenstarre, Auskühlung","Totenflecke: ab ca. 20–30 Minuten, verlagerbar in den ersten Stunden","Totenstarre: beginnt nach etwa 2–4 Stunden, voll ausgeprägt nach 6–12 Stunden, löst sich nach 2–3 Tagen","Leichenschau/Obduktion: §§ 87 ff. StPO (Anordnung durch StA/Richter)","Todesart: natürlich, nichtnatürlich (Unfall, Suizid, Tötung), ungeklärt"],
"Unnatürlicher Tod → StA",
[["Sichere Todeszeichen?","Totenflecke, Totenstarre, Fäulnis, mit dem Leben unvereinbare Verletzungen."],["Wann StA verständigen (§ 159)?","Bei unbekannter Identität oder Anhaltspunkten für nichtnatürlichen Tod."]],
[Q("Welches ist ein sicheres Todeszeichen?",["Pulslosigkeit","Totenflecke","Atemstillstand","Pupillenstarre"],1,"Totenflecke sind sicher."),Q("Wann ist die StA nach § 159 zu verständigen?",["Nie","Bei Anhaltspunkten für einen nichtnatürlichen Tod","Nur bei Mord","Nur auf Antrag"],1,"§ 159 StPO.")]),

N("k15","Beweis","Beweisführung: Indiz, Sachbeweis, Zweifelssatz","§ 261 StPO · Art. 6 Abs. 2 EMRK",
"Beweise werden frei gewürdigt (§ 261 StPO). Bleiben Zweifel, gilt in dubio pro reo.",
["Personalbeweis (Zeuge, Beschuldigter) vs. Sachbeweis (Spuren, Urkunden)","Unmittelbarer Beweis (direkt) vs. Indizienbeweis (mittelbar)","Freie richterliche Beweiswürdigung (§ 261 StPO)","In dubio pro reo: Zweifel gehen zugunsten des Angeklagten","Unschuldsvermutung (Art. 6 Abs. 2 EMRK)","Beweisverwertungsverbote: § 136a StPO, rechtswidrige Beweisgewinnung nach Abwägung","Beweislast: Gericht klärt von Amts wegen (Instruktionsmaxime)"],
"Freie Würdigung – im Zweifel für den Angeklagten",
[["Was ist ein Indizienbeweis?","Beweis durch mittelbare Tatsachen, die auf die Haupttatsache schließen lassen."],["§ 261 StPO?","Freie Beweiswürdigung des Gerichts."]],
[Q("Welcher Grundsatz gilt bei Zweifeln?",["Im Zweifel gegen den Angeklagten","In dubio pro reo","Zufallsprinzip","Opportunität"],1,"Zweifelssatz."),Q("Ein Fingerabdruck am Tatort ist …",["Personalbeweis","Sachbeweis","Eid","Geständnis"],1,"Sachbeweis.")]),

N("k16","Kriminologie","Kriminologische Theorien","Kriminologie",
"Kriminologische Theorien erklären Kriminalitätsentstehung und beeinflussen die Prävention.",
["Anomietheorie (Merton): Spannung zwischen Zielen und Mitteln","Lerntheorie / differentielle Assoziation (Sutherland): Kriminalität wird gelernt","Kontrolltheorie (Hirschi): soziale Bindungen verhindern Kriminalität","Labeling Approach: Etikettierung verstärkt abweichendes Verhalten","Rational-Choice-Theorie: Kosten-Nutzen-Abwägung","Routine-Activity-Approach: motivierter Täter + geeignetes Ziel + fehlender Schutz","Broken-Windows-Theorie: Verwahrlosung fördert Kriminalität"],
"Anomie · Lernen · Kontrolle · Etikett · Kosten · Gelegenheit",
[["Kernaussage Routine-Activity-Approach?","Täter + Gelegenheit + fehlender Schutz."],["Labeling Approach?","Abweichung entsteht auch durch gesellschaftliche Etikettierung."]],
[Q("Wer entwickelte die Anomietheorie?",["Sutherland","Merton","Hirschi","Becker"],1,"Robert K. Merton."),Q("Was besagt die Broken-Windows-Theorie?",["Fenster brechen häufig","Verwahrlosung fördert Kriminalität","Nur Täter zählen","Nur Opfer zählen"],1,"Verwahrlosung = Signal geringer Kontrolle.")])
];
