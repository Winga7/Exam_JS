import Produits from "../../storage/produits.json";
import { CategorieBadge } from "./Partials/CategorieBadge";

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
	const produit = Produits.find((produit) => produit.id === produitId);

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
		<figure>
			<img src="${produit.photo}" class="card-img-top" alt="${produit.name}">
		</figure>
		<p>${produit.description}</p>
    <p id="prix">${produit.prix}</p>
		${CategorieBadge(produit.catégorie)}<br><br>
			<input id="quantite" type="number" name="quantity" value="1" min="1" max="10">
			<button id="envoyer" class="btn btn-primary">Ajouter au panier</button>
    `;
	let baliseQuantite = document.getElementById("quantite");
	let baliseEnvoyer = document.getElementById("envoyer");
	baliseEnvoyer.addEventListener("click", () => {
		let quantite = parseInt(baliseQuantite.value);
		let panier = JSON.parse(localStorage.getItem("panier")) || [];
		let produitPanier = panier.find((produit) => produit.id === produitId);
		if (produitPanier) {
			produitPanier.quantite += quantite;
		} else {
			panier.push({ ...produit, quantite });
		}
		localStorage.setItem("panier", JSON.stringify(panier));
	});
};

function recupPanier() {
	let panier = JSON.parse(localStorage.getItem("panier")) || [];
	let total = 0;
	panier.forEach((produit) => {
		total += produit.prix * produit.quantite;
	});
	return { panier, total };
}
