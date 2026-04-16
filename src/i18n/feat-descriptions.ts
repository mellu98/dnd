/**
 * Italian descriptions for PHB feats.
 * Maps English feat name -> Italian description text.
 *
 * Used as fallback for the mechanicIT/descriptionIT fields.
 * If a feat is not in this map, the raw 5etools English text is used.
 */

export const featDescriptionsIT: Record<string, string> = {
  'Actor': 'Sei abile nel mimetismo e nella recitazione. Ottieni i seguenti benefici:\n• Aumenta il punteggio di Carisma di 1, fino a un massimo di 20.\n• Hai vantaggio alle prove di Carisma (Inganno) e Destrezza (Furtivitá) quando cerchi di passare per un\'altra persona.\n• Puoi imitare il modo di parlare di un\'altra persona o i suoni prodotti da altre creature. Devi aver sentito il suono per almeno 1 minuto. Una creatura che ascolta le tue imitazioni puó capire che sono false con un tiro salvezza su Saggezza (Intuizione) superato se individua la falsitá.',

  'Alert': 'Sempre all\'erta, ottieni i seguenti benefici:\n• Non puoi essere sorpreso mentre sei cosciente.\n• Ottieni un bonus di +5 all\'iniziativa.\n• Le altre creature non ottengono vantaggio ai tiri per colpire contro di te quando non le puoi vedere.',

  'Athlete': 'Ti sei sottoposto a un intenso allenamento fisico. Ottieni i seguenti benefici:\n• Aumenta il punteggio di Forza o Destrezza di 1, fino a un massimo di 20.\n• Quando sei prono, puoi alzarti in piedi usando solo 1,5 metri del tuo movimento.\n• Scalare non ti costa movimento extra.\n• Puoi effettuare un salto in lungo o in alto con una corsa di soli 0,9 metri.',

  'Charger': 'Quando usi la tua azione per Scattare, puoi usare un\'azione bonus per effettuare un attacco con un\'arma da mischia o per spingere una creatura. Se ti muovi di almeno 3 metri in linea retta verso il bersaglio prima dell\'attacco, ottieni un bonus di +5 ai danni o un bonus di +5 alla prova di Forza (Atletica) per spingere.',

  'Crossbow Expert': 'Grazie alla pratica estensiva con la balestra, ottieni i seguenti benefici:\n• Quando effettui l\'attacco extra con l\'azione Attaccare e attacchi solo con un\'arma, puoi attaccare con un attacco bonus usando una balestra a mano che stai impugnando.\n• Lanciare un incantesimo con un tempo di lancio di 1 azione non ti impedisce di effettuare un attacco con una balestra a mano.\n• Sei in grado di caricare le balestre, ignorando la proprietá Caricamento.',

  'Defensive Duelist': 'Quando impugni un\'arma con la proprietá Finezza con cui sei competente e un\'altra creatura ti colpisce con un attacco in mischia, puoi usare la tua reazione per aggiungere il tuo bonus di competenza alla CA per quell\'attacco, potenzialmente facendo mancare il colpo.',

  'Dual Wielder': 'Hai imparato a combattere con due armi, ottenendo i seguenti benefici:\n• Ottieni un bonus di +1 alla CA mentre impugni un\'arma separata in ciascuna mano.\n• Puoi usare il combattimento con due armi anche quando le armi che impugni non hanno la proprietá Leggera.\n• Puoi estrarre o riporre due armi come azione singola invece di una.',

  'Dungeon Delver': 'Attento alle trappole nascoste e alle porte segrete, ottieni i seguenti benefici:\n• Hai vantaggio alle prove di Saggezza (Percezione) e Intelligenza (Indagare) per individuare le trappole.\n• Hai vantaggio ai tiri salvezza contro le trappole.\n• Hai resistenza ai danni causati dalle trappole.\n• Puoi cercare trappole mentre viaggi a un ritmo veloce senza la penalitá di -5 alla prova.',

  'Durable': 'Sei robusto e resistente. Ottieni i seguenti benefici:\n• Aumenta il punteggio di Costituzione di 1, fino a un massimo di 20.\n• Quando tiri un dado vita per recuperare punti ferita, il minimo che puoi recuperare é uguale al doppio il tuo modificatore di Costituzione (minimo 2).',

  'Elemental Adept': 'Quando ottieni questo talento, scegli un tipo di danno tra: acido, freddo, fuoco, fulmine o tuono. Ogni volta che lanci un incantesimo che causa il tipo di danno scelto, puoi trattare ogni 1 sul dado del danno come 2.',

  'Grappler': 'Hai sviluppato le competenze necessarie per combattere in corpo a corpo. Ottieni i seguenti benefici:\n• Hai vantaggio agli attacchi contro le creature che stai afferrando.\n• Puoi usare la tua azione per tentare di immobilizzare una creatura che stai giá afferrando. Effettua un\'altra prova di afferramento; se hai successo, sia tu che la creatura siete nella condizione di trattenuto finch\u00e9 l\'afferramento non termina.',

  'Great Weapon Master': 'Hai imparato a usare il peso delle tue armi a tuo vantaggio. Ottieni i seguenti benefici:\n• Quando ottieni un punteggio di 20 naturale o quando riduci una creatura a 0 punti ferita con un attacco in mischia, puoi effettuare un attacco bonus con un\'arma che stai impugnando.\n• Prima di effettuare un attacco con un\'arma da mischia con cui sei competente, puoi scegliere di subire una penalitá di -5 al tiro per colpire. Se l\'attacco colpisce, aggiungi +10 ai danni.',

  'Healer': 'Sei un abile medico. Ottieni i seguenti benefici:\n• Quando usi un kit da guaritore per stabilizzare una creatura morente, la creatura riprende anche 1 punto ferita.\n• Come azione, puoi spendere un uso di un kit da guaritore per curare una creatura che tocchi. La creatura riprende 1d6 + 4 punti ferita, pi\u00f9 un numero di punti ferita aggiuntivi pari al suo numero massimo di dadi vita. La creatura non pu\u00f2 beneficiare di questo talento di nuovo finch\u00e9 non termina un riposo lungo.',

  'Heavily Armored': 'Ti sei allenato per padroneggiare l\'uso delle armature pesanti, ottenendo competenza con le armature pesanti.',

  'Heavy Armor Master': 'Puoi usare la tua armatura per deviare i colpi. Ottieni i seguenti benefici:\n• Aumenta il punteggio di Forza di 1, fino a un massimo di 20.\n• Mentre indossi un\'armatura pesante, i danni contundenti, perforanti e taglienti che subisci da armi non magiche sono ridotti di 3.',

  'Inspiring Leader': 'Puoi spendere 10 minuti per ispirare i tuoi compagni. Scegli fino a sei creature amiche (te compreso) entro 9 metri da te che possano vederti o sentirti. La creatura ottiene punti ferita temporanei pari al tuo livello + il tuo modificatore di Carisma. Una creatura non pu\u00f2 ottenere punti ferita temporanei da questo talento pi\u00f9 di una volta per riposo breve o lungo.',

  'Keen Mind': 'Hai una mente che tiene traccia di tempo, direzione e dettagli con precisione incredibile. Ottieni i seguenti benefici:\n• Aumenta il punteggio di Intelligenza di 1, fino a un massimo di 20.\n• Conosci sempre il nord.\n• Conosci il numero esatto di ore rimanenti prima del prossimo alba o tramonto.\n• Puoi ricordare con precisione tutto ci\u00f2 che hai visto o sentito nell\'ultimo mese.',

  'Lightly Armored': 'Ti sei allenato per padroneggiare l\'uso delle armature leggere, ottenendo competenza con le armature leggere.',

  'Linguist': 'Hai studiato lingue e codici. Ottieni i seguenti benefici:\n• Aumenta il punteggio di Intelligenza di 1, fino a un massimo di 20.\n• Impara tre lingue a tua scelta.\n• Puoi creare codici criptici. Altri non possono decifrare questi codici a meno che non conoscano il codice, non abbiano un punteggio di Intelligenza di almeno 20, o non abbiano accesso a strumenti o incantesimi di decifrazione.',

  'Lucky': 'Hai una fortuna inspiegabile che sembra intervenire nei momenti giusti. Quando tiri un dado d20 per un tiro per colpire, prova di abilitá o tiro salvezza, puoi spendere un punto fortuna per tirare un dado d20 aggiuntivo. Puoi scegliere quale dei dadi usare. Devi spendere il punto fortuna prima di conoscere l\'esito del tiro.\nOttieni 3 punti fortuna che si ricaricano dopo ogni riposo lungo.',

  'Mage Slayer': 'Hai praticato tecniche utili nel combattimento in mischia contro i lanciatori di incantesimi. Ottieni i seguenti benefici:\n• Quando una creatura entro 1,5 metri da te lancia un incantesimo, puoi usare la tua reazione per effettuare un attacco in mischia contro quella creatura.\n• Quando danneggi una creatura concentrata su un incantesimo, la creatura ha svantaggio al tiro salvezza per mantenere la concentrazione.\n• Hai vantaggio ai tiri salvezza contro gli incantesimi lanciati da creature entro 1,5 metri da te.',

  'Magic Initiate': 'Scegli una classe: bardo, chierico, druido, stregone, warlock o mago. Impara due trucchis a scelta dalla lista degli incantesimi di quella classe. Impari inoltre un incantesimo di 1° livello a scelta dalla stessa lista. Puoi lanciare questo incantesimo una volta per riposo lungo senza spendere slot incantesimo. La tua caratteristica per lanciare gli incantesimi di questo talento \u00e8 quella associata alla classe scelta.',

  'Martial Adept': 'Hai un addestramento marziale che ti permette di eseguire manovre speciali. Ottieni le seguenti competenze:\n• Impari due manovre a tua scelta tra quelle disponibili per la classe Guerriero.\n• Hai un dado di superiorit\u00e0 d6. Puoi spenderne uno per usare una manovra. Recuperi tutti i dadi di superiorit\u00e0 esauriti quando termini un riposo breve o lungo.',

  'Medium Armor Master': 'Ti sei allenato a muoverti in armatura media. Ottieni i seguenti benefici:\n• Indossare un\'armatura media non ti d\u00e0 svantaggio alle prove di Furtivit\u00e0.\n• Quando indossi un\'armatura media, puoi aggiungere fino a +3 il tuo modificatore di Destrezza alla CA, invece di +2.',

  'Mobile': 'Sei eccezionalmente veloce e agile. Ottieni i seguenti benefici:\n• La tua velocit\u00e0 aumenta di 3 metri.\n• Il terreno difficile non ti costa movimento extra quando usi l\'azione Scatta.\n• Quando effettui un attacco in mischia contro una creatura, non provochi attacchi di opportunit\u00e0 da quella creatura per il resto del turno, che l\'attacco colpisca o meno.',

  'Moderately Armored': 'Ti sei allenato per padroneggiare l\'uso delle armature medie e degli scudi, ottenendo competenza con armature medie e scudi.',

  'Mounted Combatant': 'Sei un pericolo da affrontare mentre sei in sella. Ottieni i seguenti benefici mentre sei in sella e non sei incapacitato:\n• Hai vantaggio ai tiri per colpire contro creature non in sella di taglia inferiore alla tua cavalcatura.\n• Puoi costringere un attacco destinato alla tua cavalcatura a colpire invece te.\n• Se la tua cavalcatura effettua un tiro salvezza su Destrezza, puoi usare la tua reazione per fare il tiro salvezza al posto suo.',

  'Observant': 'Pronto a notare i dettagli dell\'ambiente, ottieni i seguenti benefici:\n• Aumenta il punteggio di Intelligenza o Saggezza di 1, fino a un massimo di 20.\n• Puoi leggere le labbra.\n• Se puoi vedere le labbra di una creatura entro 9 metri da te che sta parlando, puoi capire ci\u00f2 che sta dicendo.\n• Il tuo punteggio di percezione passiva (Saggezza) aumenta di +5.',

  'Polearm Master': 'Puoi tenere i tuoi nemici a distanza con armi ad asta. Ottieni i seguenti benefici:\n• Quando impugni solo un\'arma ad asta (lancia, alabarda, falce, bastone ferrato), puoi usare un\'azione bonus per effettuare un attacco in mischia contro una creatura entro 1,5 metri da te usando il lato opposto dell\'arma. Questo attacco usa lo stesso dado del danno dell\'arma e il modificatore di abilit\u00e0 come un normale attacco. Il dado del danno \u00e8 un d4 e il tipo di danno \u00e8 contundente.\n• Mentre impugni un\'arma ad asta, le creature provocano attacchi di opportunit\u00e0 da te quando entrano nella tua portata.',

  'Resilient': 'Scegli un punteggio di abilit\u00e0. Ottieni i seguenti benefici:\n• Aumenta il punteggio di abilit\u00e0 scelto di 1, fino a un massimo di 20.\n• Ottieni competenza con i tiri salvezza dell\'abilit\u00e0 scelta.',

  'Ritual Caster': 'Hai imparato un certo numero di incantesimi che puoi lanciare come rituali. Questi incantesimi sono scritti in un libro rituale, che devi avere in mano mentre ne lanci uno. Scegli una lista di incantesimi. Il libro contiene due incantesimi di 1° livello a tua scelta da quella lista. Puoi aggiungere altri incantesimi rituali al tuo libro.',

  'Savage Attacker': 'Una volta per turno, quando tiri i danni per un attacco con arma da mischia, puoi ritirare i dadi del danno dell\'arma e usare il risultato pi\u00f9 alto.',

  'Sentinel': 'Hai padroneggiato tecniche per approfittare di ogni minima distrazione del nemico. Ottieni i seguenti benefici:\n• Quando colpisci una creatura con un attacco di opportunit\u00e0, la velocit\u00e0 della creatura diventa 0 per il resto del turno.\n• Le creature provocano attacchi di opportunit\u00e0 da te anche quando effettuano l\'azione Disimpegno prima di lasciare la tua portata.\n• Quando una creatura entro 1,5 metri da te effettua un attacco contro un bersaglio diverso da te, puoi usare la tua reazione per effettuare un attacco in mischia contro quella creatura.',

  'Sharpshooter': 'Hai imparato a usare la precisione a distanza. Ottieni i seguenti benefici:\n• Attaccare a distanza lunga con un\'arma a distanza non ti d\u00e0 svantaggio ai tiri per colpire.\n• Il tuo attacco a distanza pu\u00f2 ignorare la copertura di mezza e tre quarti.\n• Prima di effettuare un attacco con un\'arma a distanza con cui sei competente, puoi scegliere di subire una penalit\u00e0 di -5 al tiro per colpire. Se l\'attacco colpisce, aggiungi +10 ai danni.',

  'Shield Master': 'Usi il tuo scudo per difendere te stesso e i tuoi alleati. Ottieni i seguenti benefici mentre impugni uno scudo:\n• Quando usi l\'azione Attaccare, puoi usare un\'azione bonus per tentare di spingere una creatura entro 1,5 metri da te con il tuo scudo.\n• Se non sei incapacitato, puoi aggiungere il bonus del tuo scudo ai tiri salvezza su Destrezza contro incantesimi o altri effetti dannosi che colpiscono solo te.\n• Quando subisci un effetto che ti consente di effettuare un tiro salvezza su Destrezza per subire solo met\u00e0 danni, puoi usare la tua reazione per non subire danni se riesci nel tiro.',

  'Skilled': 'Ottieni competenza in una combinazione di tre abilit\u00e0 o strumenti a tua scelta.',

  'Skulker': 'Sei esperto a muoverti silenziosamente e a nasconderti. Ottieni i seguenti benefici:\n• Puoi tentare di nasconderti anche quando sei solo leggermente ostruito da fogliame, pioggia leggera, nebbia sottile o altri fenomeni naturali non magici.\n• Hai vantaggio alle prove di Destrezza (Furtivit\u00e0) per nasconderti.\n• Quando sei nascosto e effettui un attacco a distanza con un\'arma, l\'attacco non rivela la tua posizione se manca.',

  'Slasher': 'Hai imparato a colpire i punti vitali con armi da taglio. Quando ottieni questo talento, scegli un tipo di danno: perforante o tagliente. Quando colpisci una creatura con un\'arma che causa quel tipo di danno, riduci la sua velocit\u00e0 di 3 metri fino all\'inizio del tuo prossimo turno.',

  'Spell Sniper': 'Hai imparato incantesimi che richiedono tiri per colpire. Ottieni i seguenti benefici:\n• Quando lanci un incantesimo che richiede un tiro per colpire, la portata dell\'incantesimo raddoppia.\n• La tua copertura di mezza e tre quarti non conta contro gli incantesimi che lanci.\n• Impari un trucco che richiede un tiro per colpire dalla lista di incantesimi di una classe a tua scelta.',

  'Squat Nimbleness': 'Sei eccezionalmente agile per la tua taglia. Ottieni i seguenti benefici:\n• Aumenta il punteggio di Forza o Destrezza di 1, fino a un massimo di 20.\n• La tua velocit\u00e0 aumenta di 1,5 metri.\n• Ottieni competenza nell\'abilit\u00e0 Atletica o Furtivit\u00e0.\n• Hai vantaggio quando effettui una prova di Forza (Atletica) o Destrezza (Acrobazia) per contrastare un tentativo di afferramento.',

  'Tavern Brawler': 'Sei allenato al combattimento improvvisato. Ottieni i seguenti benefici:\n• I tuoi attacchi senz\'armi usano un d4 per il danno.\n• Quando colpisci una creatura con un attacco senz\'armi o con un\'arma improvvisata durante il tuo turno, puoi tentare di afferrarla come azione bonus.\n• Sei competente con le armi improvvisate.',

  'Telekinetic': 'Impari a muovere le cose con la mente. Ottieni i seguenti benefici:\n• Aumenta il punteggio di Intelligenza, Saggezza o Carisma di 1, fino a un massimo di 20.\n• Impari il trucco Mano del Mago e puoi lanciarlo senza componenti somatiche o verbali.\n• Puoi lanciare il trucco Mano del Mago con una portata di 18 metri.\n• Come azione bonus, puoi spingere una creatura che puoi vedere entro 18 metri di 1,5 metri in una direzione a tua scelta. La creatura deve superare un tiro salvezza su Forza o essere spinta.',

  'Telepathic': 'Risvegli il potere telepatico della tua mente. Ottieni i seguenti benefici:\n• Aumenta il punteggio di Intelligenza, Saggezza o Carisma di 1, fino a un massimo di 20.\n• Impari il trucco Messaggio e puoi lanciarlo senza componenti somatiche o verbali.\n• Puoi parlare telepaticamente con qualsiasi creatura che puoi vedere entro 18 metri da te.\n• Come azione, puoi creare un legame telepatico con una creatura che puoi vedere entro 18 metri da te per 1 minuto.',

  'Tough': 'I tuoi punti ferita massimi aumentano di un importo pari al doppio del tuo livello. Inoltre, ogni volta che guadagni un livello, i tuoi punti ferita massimi aumentano di ulteriori 2 punti ferita.',

  'War Caster': 'Hai praticato la magia in mezzo alla battaglia, ottenendo i seguenti benefici:\n• Hai vantaggio ai tiri salvezza su Costituzione che effettui per mantenere la concentrazione su un incantesimo quando subisci danni.\n• Puoi eseguire le componenti somatiche dei tuoi incantesimi anche quando hai armi o uno scudo impugnati in entrambe le mani.\n• Quando una creatura ostile provoca un attacco di opportunit\u00e0 da te uscendo dalla tua portata, puoi usare la tua reazione per lanciare un incantesimo contro di essa invece di effettuare un attacco di opportunit\u00e0. L\'incantesimo deve avere un tempo di lancio di 1 azione e deve bersagliare solo quella creatura.',

  'Weapon Master': 'Hai praticato con una variet\u00e0 di armi. Ottieni i seguenti benefici:\n• Aumenta il punteggio di Forza o Destrezza di 1, fino a un massimo di 20.\n• Ottieni competenza con quattro armi semplici o marziali a tua scelta.',
}
