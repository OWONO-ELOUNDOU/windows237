export interface Activity {   
    id: number;
    name: string;
    info: string;
    image: string;
    price: number;
    url?: string;
    quantity: number;
    activity: any;
}

export interface ServerResponse {
    count: number;
    products: Activity[];
}

export const serviceAdmin = [
    {
        Id: 1,
        name: "services auprès des administrations publiques et privées au Cameroun",
        info: "Effectuez vos courses, formalités, démarches auprès des administrations publiques et privées  sans vous déplacer",
        image: "../../../assets/images/icon/users.svg",
        activity: [
            {
                id: 1,
                image: "assets/images/activity_images/recherche ou verification.jpeg",
                name: "Recherche, vérification ou suivi d’information ou de dossier administratif, professionnel ou privé",
                price: 15000,
                info: "",
                quantity: 1
            },
            {
                id: 2,
                image: "assets/images/activity_images/legalisation.jpeg",
                name: "Legalisation - Authentification - Duplicata des divers documents administratifs",
                price: 15000,
                info: "",
                quantity: 1
            },
            {
                id: 3,
                image: "assets/images/activity_images/document.jpeg",
                name: "Retrait / dépôt de document auprès de toute administration publique ou privée",
                price: 15000,
                info: "",
                quantity: 1
            }
        ]
    }
]

export const serviceProf = [
    {
        Id: 2,
        name: "Services professionnels",
        info: "Faites effectuer au Cameroun, vos opérations, courses, missions professionnels ou privés sans vous déplacer",
        image: "../../../assets/images/icon/shopify.svg",
        activity: [
            {
                id: 1,
                image: "assets/images/activity_images/représentation.jpeg",
                name: "Représentation à des réunions, séminaires, prise de RDV, foires - expositions",
                price: null,
                info: "",
                quantity: 1
            },
            {
                id: 2,
                image: "assets/images/activity_images/domiciliation.jpeg",
                name: "Domiciliation commerciale, administrative et juridique",
                price: 5000,
                info: "mensuel",
                quantity: 1
            },
            {
                id: 3,
                image: "assets/images/activity_images/negociation.jpeg",
                name: "Négociations et Intermédiations",
                price: null,
                info: "",
                quantity: 1
            },
            {
                id: 4,
                image: "assets/images/activity_images/negociation.jpeg",
                name: "Achats produits locaux et autres M.P",
                price: null,
                info: "",
                quantity: 1
            }
        ]
    }
]

export const serviceCours = [
    {
        Id: 3,
        name: "Courses et missions diverses (personelles & familiales)",
        info: "",
        image: "../../../assets/images/icon/shopify.svg",
        activity: [
            {
                id: 1,
                image: "assets/images/activity_images/visite.jpg",
                name: "Visites  et suivi des activités, projets, familles etc",
                price: null,
                info: "",
                quantity: 1
            },
            {
                id: 2,
                image: "assets/images/activity_images/intermediation.jpg",
                name: "Intermediations et négociations, achats et réceptions divers",
                price: null,
                info: "",
                quantity: 1
            }
        ]
    }
]

export const houseService = [
    {
        id: 1,
        image: 'assets/images/house_img/opportunité.jpg',
        name: 'Recherches opportunités d\'affaires',
        price: null,
        info: '',
        quantity: 1,
    },
    {
        id: 2,
        image: 'assets/images/house_img/construction.jpg',
        name: 'Construction, réhabilitation et innovation immobilière',
        price: null,
        info: '',
        quantity: 1,
    },
    {
        id: 3,
        image: 'assets/images/house_img/terrains_actifs.jpeg',
        name: 'Recherche de terrains et autres actifs immobiliers',
        price: null,
        info: '',
        quantity: 1,
    }
]

export const activities = [
    {
        Id: 1,
        name: "services auprès des administrations publiques / privées / domestiques",
        info: "Effectuez vos courses, formalités, démarches auprès des administrations publiques et privées  sans vous déplacer",
        image: "../../../assets/images/activity_images/administration.jpeg",
        url: "list",
        activity: [
            {
                id: 1,
                image: "assets/images/activity_images/recherche ou verification.jpeg",
                name: "Recherche, vérification ou suivi d’information ou de dossier administratif, professionnel ou privé",
                price: 20,
                info: "",
                quantity: 1
            },
            {
                id: 2,
                image: "assets/images/activity_images/legalisation.jpeg",
                name: "Legalisation - Authentification - Duplicata des divers documents administratifs",
                price: 7.65,
                info: "",
                quantity: 1
            },
            {
                id: 3,
                image: "assets/images/activity_images/document.jpeg",
                name: "Retrait / dépôt de document auprès de toute administration publique ou privée",
                price: 7.65,
                info: "",
                quantity: 1
            }
        ]
    },
    {
        Id: 2,
        name: "Services professionnels",
        info: "Faites effectuer vos courses professionnels et/ou privés sans vous déplacer au Cameroun et en France",
        image: "../../../assets/images/activity_images/professionnel.jpeg",
        url: "url",
        activity: [
            {
                id: 1,
                image: "assets/images/activity_images/représentation.jpeg",
                name: "Représentation administrative, professionnelles et privées diverses(réunion, séminaire, conseil d'administration, etc.)",
                info: "",
                quantity: 1
            },
            {
                id: 2,
                image: "assets/images/activity_images/domiciliation.jpeg",
                name: "Domiciliation commerciale et administrative",
                price: 5000,
                info: "mensuel",
                quantity: 1
            },
            {
                id: 3,
                image: "assets/images/activity_images/RDV.jpeg",
                name: "Négociations et Intermédiations",
                price: null,
                info: "",
                quantity: 1
            },
            {
                id: 4,
                image: "assets/images/activity_images/RDV.jpeg",
                name: "Achats produits locaux et autres M.P",
                price: null,
                info: "",
                quantity: 1
            }
        ]
    },
    {
        Id: 3,
        name: "Courses et missions diverses (personnelles & familiales)",
        info: "",
        image: "../../../assets/images/IMG_1.jpg",
        url: "list",
        activity: [
            {
                id: 1,
                image: "assets/images/activity_images/visite.jpg",
                name: "Visites  et suivi des activités, projets, familles etc",
                info: "sur devis",
                quantity: 1
            },
            {
                id: 2,
                image: "assets/images/activity_images/intermediation.jpg",
                name: "Intermediations et négociations, achats et réceptions divers",
                info: "sur devis",
                quantity: 1
            }
        ]
    },
    {
        Id: 4,
        name: 'Investissements immobiliers',
        info:'',
        image: '../../../assets/images/house_img/immobilier.jpeg',
        url: "list",
        activity: [
            {
                id: 1,
                image: 'assets/images/house_img/opportunité.jpg',
                name: 'Recherches opportunités d\'affaires',
                price: null,
                info: '',
                quantity: 1,
            },
            {
                id: 2,
                image: 'assets/images/house_img/construction.jpg',
                name: 'Construction, réhabilitation et innovation immobilière',
                price: null,
                info: '',
                quantity: 1,
            },
            {
                id: 3,
                image: 'assets/images/house_img/terrains_actifs.jpeg',
                name: 'Recherche de terrains et autres actifs immobiliers',
                price: null,
                info: '',
                quantity: 1,
            }
        ]
    },
];
