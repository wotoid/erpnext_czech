# Česká terminologie ERPNext

Tento slovník je závazný pro českou lokalizaci projektu. První verze je
zaměřená na prezentační workflow potravinářské výroby a může být později
terminologicky zpřesněna.

| Anglicky | Česky | Poznámka |
|---|---|---|
| Item | Položka | Nepoužívat obecně „zboží“ |
| Item Group | Skupina položek | |
| Warehouse | Sklad | |
| Batch | Šarže | Nepoužívat „dávka“ |
| Stock Entry | Skladový pohyb | Ne „skladový zápis“ |
| Stock Ledger | Skladová evidence | |
| Stock Balance | Stav skladu | |
| Purchase Receipt | Příjemka | V prezentačním workflow |
| Material Receipt | Příjem materiálu | |
| Material Issue | Výdej materiálu | |
| Material Transfer | Převod mezi sklady | |
| Serial and Batch Bundle | Evidence šarží a sériových čísel | |
| Expiry Date | Datum trvanlivosti | Obecný UI termín |
| Manufacturing Date | Datum výroby | |
| Quality Inspection | Kontrola kvality | |
| Work Order | Výrobní příkaz | |
| BOM | Receptura | Potravinářský kontext |
| Bill of Materials | Receptura | Potravinářský kontext |
| Job Card | Pracovní lístek | |
| Work In Progress | Rozpracovaná výroba | |
| Finished Goods | Hotové výrobky | |
| Delivery Note | Dodací list | |
| Pick List | Vychystávací seznam | |
| Supplier | Dodavatel | |
| Customer | Odběratel | |

## Poznámka k „expiraci“

ERPNext používá obecný systémový termín `Expiry Date`. V potravinářství se
právně i významově liší „datum minimální trvanlivosti“ a „datum použitelnosti“.
V první prezentační lokalizaci je proto obecné `Expiry Date` přeloženo jako
**Datum trvanlivosti**. Potravinářská aplikace nadále rozlišuje konkrétní typ
označení samostatným polem.
