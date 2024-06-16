import { RoleBadge } from "./RoleBadge";

/**
 * @typedef {Object} Produit
 * @property {number} id - L'identifiant du Produit.
 * @property {string} name - Le nom du Produit.
 * @property {string} email - L'adresse email du produit.
 * @property {string} role - Le rôle du produit.
 */

/**
 * Affiche une carte du Produit
 *
 * @param {Produit} produit
 * @returns {string} HTML string
 */
export const ProduitCard = (produit) => {
	return `
    <div class="col p-2">
      <a class="card produit-link" href="/produit?id=${produit.id}">
        <div class="card-body">
          <h5 class="card-title">${produit.name}</h5>
          <p class="card-text">${produit.email}</p>
          ${RoleBadge(produit.role)}
        </div>
      </a>
    </div>
    `;
};
