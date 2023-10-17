export interface Demand {
    nom: string;
    prenom: string;
    rubriqueId: number;
    service: string;
    description: string;
    location: string;
}

export interface Mission {
    nom: string;
    prenom: string;
    type: string;
    lieu: string;
    coordonnees: string;
    description: string;
}
