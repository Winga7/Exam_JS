/**
 * Badge de categorie produit
 *
 * @param {string} categorie
 * @returns {string} HTML string
 */
export const CategorieBadge = (categorie) => {
	const categories = {
		admin: "text-bg-danger",
		produit: "text-bg-primary",
	};

	const categorieBadge = categories[categorie] || "text-bg-secondary";

	return `
    <span class="badge ${categorieBadge}">${categorie}</span>
    `;
};
