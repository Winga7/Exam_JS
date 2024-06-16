/**
 * Badge de rôle produit
 *
 * @param {string} role
 * @returns {string} HTML string
 */
export const RoleBadge = (role) => {
	const roles = {
		admin: "text-bg-danger",
		produit: "text-bg-primary",
	};

	const roleBadge = roles[role] || "text-bg-secondary";

	return `
    <span class="badge ${roleBadge}">${role}</span>
    `;
};
