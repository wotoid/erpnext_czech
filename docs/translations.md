# Překlady ve Frappe / ERPNext v16

Projekt `erpnext_czech` používá v první fázi překladový **overlay**.

Soubor:

```text
erpnext_czech/locale/cs.po
```

obsahuje i `msgid`, které pocházejí z aplikací `frappe` a `erpnext`. Je to
záměrné. Frappe v16 slučuje překlady všech nainstalovaných aplikací a později
načtená aplikace může stejný klíč přepsat.

## Kompilace

```bash
bench compile-po-to-mo --app erpnext_czech --locale cs --force
bench --site oplatky.local clear-cache
bench restart
```

Výsledný katalog je:

```text
sites/assets/locale/cs/LC_MESSAGES/erpnext_czech.mo
```

`bench build` kompilaci PO katalogů provádí také.

## Důležité pro tento overlay

`cs.po` je zatím ručně kurátorovaný katalog napříč ERPNext/Frappe. Nespouštějte
nad ním bez kontroly automatické `update-po-files`, protože POT generovaný pouze
ze zdrojového kódu aplikace `erpnext_czech` logicky neobsahuje většinu řetězců
z ERPNext/Frappe.

Po prezentaci lze workflow změnit na generování katalogu ze zdrojových POT
Frappe/ERPNext a systematické slučování.
