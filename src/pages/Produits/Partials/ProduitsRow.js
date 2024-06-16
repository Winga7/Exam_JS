import { RoleBadge } from "./RoleBadge";

/**
 * @typedef {Object} Produit
 * @property {number} id - L'identifiant du produit.
 * @property {string} name - Le nom du produit.
 * @property {string} email - L'adresse email du produit.
 * @property {string} role - La catégorie du produit.
 */

/**
 * Affiche une ligne d'un tableau d'produits
 *
 * @param {Produit} produit
 * @returns {string} HTML string
 */
export const ProduitRow = (produit) => {
	return `
    <tr>
      <td>${produit.name}</td>
      <td>${produit.email}</td>
      <td>${RoleBadge(produit.role)}</td>
      <td><a class="btn btn-primary btn-sm" href="/produit?id=${produit.id}"><i class="ri-search-eye-line"></i></a></td>
    </tr>
    `;
};
