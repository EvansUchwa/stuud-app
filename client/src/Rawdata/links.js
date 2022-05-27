export const asideMenuLinks = [
    {
        label: 'Accueil', icon: "mdi-home-outline", to: "/Dashboard"
    },
    {
        label: 'Etudiants', icon: "mdi-account-group-outline", to: "/Student/list"
    },
    {
        label: 'Demandes', icon: "mdi-book-search-outline", to: "/Course-request/list"
    },
    {
        label: 'Cours', icon: "mdi-book-multiple-outline", to: "/Course/list"
    },
    {
        label: 'Messages', icon: "mdi-chat-outline", to: "/Chat/list"
    }
]


export const authLinks = {
    inscription: "/Auth/Inscription",
    connexion: "/Auth/Connexion",

}