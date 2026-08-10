/*
 * Czech grammatical correction for dynamically generated Frappe titles.
 *
 * Frappe builds new-document titles from the generic "New {0}" message.
 * Czech grammatical gender cannot be expressed by that single gettext key.
 * This correction is intentionally scoped to Purchase Receipt only.
 */

(function () {
	function fix_new_purchase_receipt_title(frm) {
		if (!frm || frm.doctype !== "Purchase Receipt" || !frm.is_new()) {
			return;
		}

		const title = "Nová Příjemka";

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

	frappe.ui.form.on("Purchase Receipt", {
		refresh(frm) {
			if (!frm.is_new()) {
				return;
			}

			fix_new_purchase_receipt_title(frm);
			requestAnimationFrame(() => fix_new_purchase_receipt_title(frm));
			setTimeout(() => fix_new_purchase_receipt_title(frm), 100);
		},
	});
})();
