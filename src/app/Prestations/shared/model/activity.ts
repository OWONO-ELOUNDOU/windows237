export interface Activity {   
    id: number;
    name: string;
    info: string;
    image: string;
    price: number;
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
        name: "services auprès des administrations publiques / privées / domestiques",
        info: "Effectuez vos courses, formalités, démarches auprès des administrations publiques et privées  sans vous déplacer",
        image: "../../../assets/images/icon/users.svg",
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
    }
]

export const serviceProf = [
    {
        Id: 2,
        name: "Services professionnels",
        info: "Faites effectuer vos courses professionnels et/ou privés sans vous déplacer au Cameroun comme en France",
        image: "../../../assets/images/icon/shopify.svg",
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
                price: 25,
                info: "mensuel",
                quantity: 1
            },
        ]
    }
]

export const serviceMarch = [
    {
        Id: 3,
        name: "Services Marchands",
        info: "Expédiez et Revecez vos colis sans plus vous déplacer au Cameroun comme en France",
        image: "../../../assets/images/icon/plus-circle.svg",
        activity: [
            {
                id: 1,
                image: "assets/images/activity_images/autres.jpeg",
                name: "Accomplissement de toute autre course, acte, mission personnelle ou privée à la demande",
                price: null,
                info: "sur devis",
                quantity: 1
            },
            {
                id: 2,
                image: "assets/images/activity_images/achat.jpeg",
                name: "Achat divers - Récupération - Expédition de diervs colis",
                info: "sur devis",
                quantity: 1
            }
        ]
    }
]

export const activities = [
        {
            Id: 1,
            name: "services auprès des administrations publiques / privées / domestiques",
            info: "Effectuez vos courses, formalités, démarches auprès des administrations publiques et privées  sans vous déplacer",
            image: "../../../assets/images/icon/users.svg",
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
            info: "Faites effectuer vos courses professionnels et/ou privés sans vous déplacer au Cameroun comme en France",
            image: "../../../assets/images/icon/shopify.svg",
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
                    price: 25,
                    info: "mensuel",
                    quantity: 1
                },
            ]
        },
        {
            Id: 3,
            name: "Services Marchands",
            info: "Expédiez et Revecez vos colis sans plus vous déplacer au Cameroun comme en France",
            image: "../../../assets/images/icon/plus-circle.svg",
            activity: [
                {
                    id: 1,
                    image: "assets/images/activity_images/autres.jpeg",
                    name: "Accomplissement de toute autre course, acte, mission personnelle ou privée à la demande",
                    info: "",
                    quantity: 1
                }
            ]
        },
];
