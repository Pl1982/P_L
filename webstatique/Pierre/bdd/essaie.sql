CREATE TABLE ligne_de_commande (
  id_ligne_commande INT PRIMARY KEY,
  id_commandes INT,
  id_produit INT,
  quantite_commandee INT,
  FOREIGN KEY (id_commande) REFERENCES commandes(id_commande),
  FOREIGN KEY (id_produit) REFERENCES produit(id_produit)
);
