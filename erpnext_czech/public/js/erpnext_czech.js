/*
 * Czech grammatical corrections for dynamically generated Frappe titles.
 *
 * Frappe builds new-document titles from the generic "New {0}" message.
 * Czech grammatical gender/case cannot be expressed by that single gettext key,
 * so selected DocTypes use explicit Czech titles.
 */

(function () {
	const new_document_titles = {
		"Purchase Receipt": "Nová příjemka",
		"Purchase Order": "Nová nákupní objednávka",
		"Sales Order": "Nová prodejní objednávka",
		"Supplier": "Nový dodavatel",
		"Item": "Nová položka",
	};

	function fix_new_document_title(frm) {
		if (!frm || !frm.is_new()) {
			return;
		}

		const title = new_document_titles[frm.doctype];
		if (!title) {
			return;
		}

		if (frm.page && frm.page.set_title) {
			frm.page.set_title(title);
		}

		if (frappe.breadcrumbs && frappe.breadcrumbs.$breadcrumbs) {
			const $last = frappe.breadcrumbs.$breadcrumbs.find("li").last();
			const $label = $last.find("a, span").first();

			if ($label.length) {
				$label.text(title);
			} else {
				$last.text(title);
			}
		}
	}

	Object.keys(new_document_titles).forEach((doctype) => {
		frappe.ui.form.on(doctype, {
			refresh(frm) {
				if (!frm.is_new()) {
					return;
				}

				fix_new_document_title(frm);

				// Frappe can overwrite the title during late route/form refresh.
				requestAnimationFrame(() => fix_new_document_title(frm));
				setTimeout(() => fix_new_document_title(frm), 100);
			},
		});
	});


	// Quick Entry uses its own generic "New {0}" title and therefore needs the
	// same Czech grammatical correction separately from full Form views.
	const quick_entry_titles = {
		"Supplier": "Nový dodavatel",
		"Item": "Nová položka",
		"Purchase Receipt": "Nová příjemka",
		"Purchase Order": "Nová nákupní objednávka",
		"Sales Order": "Nová prodejní objednávka",
	};

	if (
		frappe.ui?.form?.QuickEntryForm?.prototype?.get_title &&
		!frappe.ui.form.QuickEntryForm.prototype.__erpnext_czech_title_patch
	) {
		const original_get_title = frappe.ui.form.QuickEntryForm.prototype.get_title;

		frappe.ui.form.QuickEntryForm.prototype.get_title = function () {
			return quick_entry_titles[this.doctype] || original_get_title.apply(this, arguments);
		};

		frappe.ui.form.QuickEntryForm.prototype.__erpnext_czech_title_patch = true;
	}
})();
