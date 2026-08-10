/*
 * Czech grammatical corrections for Frappe Desk list actions.
 *
 * Frappe v16 creates list buttons from the generic "Add {0}" label.
 * Czech needs accusative forms, so selected DocTypes use explicit labels.
 */

(function () {
	const add_labels = {
		"Purchase Receipt": "Přidat příjemku",
		"Item": "Přidat položku",
		"BOM": "Přidat recepturu",
		"Batch": "Přidat šarži",
		"Quality Inspection": "Přidat kontrolu kvality",
		"Sales Order": "Přidat prodejní objednávku",
		"Item Group": "Přidat skupinu položek",
	};

	function fix_primary_action(listview) {
		const label = add_labels[listview?.doctype];
		const button = listview?.page?.btn_primary;

		if (!label || !button || !button.length) {
			return;
		}

		button.attr("data-label", label);
		button.attr("title", label);

		const desktop_label = button.find("span.hidden-xs");
		if (desktop_label.length) {
			desktop_label.text(` ${label} `);
			return;
		}

		// Fallback: keep the existing click handler and only replace contents.
		const icon = button.find("svg, i").first().detach();
		button.empty();

		if (icon.length) {
			button.append(icon);
		}

		button.append(document.createTextNode(` ${label}`));
	}

	if (
		frappe.views?.ListView?.prototype?.set_primary_action &&
		!frappe.views.ListView.prototype.__erpnext_czech_add_label_patch
	) {
		const original = frappe.views.ListView.prototype.set_primary_action;

		frappe.views.ListView.prototype.set_primary_action = function () {
			const result = original.apply(this, arguments);
			fix_primary_action(this);
			return result;
		};

		frappe.views.ListView.prototype.__erpnext_czech_add_label_patch = true;
	}
})();
