from __future__ import annotations

from frappe.translate import get_all_translations


KEYS = (
    "Stock Entry",
    "Purchase Receipt",
    "Batch",
    "Serial and Batch Bundle",
    "Work Order",
    "BOM",
    "Quality Inspection",
)


def get_status(locale: str = "cs") -> dict:
    translations = get_all_translations(locale)
    return {
        "locale": locale,
        "translations": {key: translations.get(key, key) for key in KEYS},
    }
