import Produits from "../../storage/produits.json";
import { RoleBadge } from "./Partials/RoleBadge";

/**
 * Page des détails d'un produit
 *
 * @param {HTMLElement} element
 * @returns {void}
 */
export const Produit = (element) => {
	// on récupère l'identifiant du Produit depuis l'URL
	const url = new URL(window.location.href);
	const produitId = parseInt(url.searchParams.get("id"));
	// on récupère le produit correspondant à l'identifiant
	const produit = produits.find((produit) => produit.id === produitId);

	// si le produit n'existe pas, on affiche un message d'erreur
	if (!produit) {
		element.innerHTML = `
      <h1>Produit non trouvé</h1>
      <p>Le Produit avec l'identifiant ${produitId} n'existe pas.</p>
      `;
		return;
	}

	element.innerHTML = `
    <h1>${produit.name}</h1>
    <p>${produit.email}</p>
    ${RoleBadge(produit.role)}
    `;
};
