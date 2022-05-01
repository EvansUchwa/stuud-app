export const authForm = {
    Connexion: [
        {
            comp: 'input', label: 'Pseudo', fieldType: 'text', name: 'pseudoORmail',
            ph: 'AaZz', errmsgname: ''
        },
        {
            comp: 'input', label: 'Mot de passe', fieldType: 'password', name: 'password',
            ph: 'AaZz', errmsgname: ''
        }],
    Inscription: [
        {
            comp: 'input', label: 'Pseudo', fieldType: 'text', name: 'pseudo',
            ph: 'AaZz', errmsgname: 'pseudo'
        },
        {
            comp: 'input', label: 'Mail', fieldType: 'mail', name: 'mail',
            ph: 'mail@gmail.com', errmsgname: 'mail'
        },
        {
            comp: 'input', label: 'Mot de passe', fieldType: 'password', name: 'password',
            ph: 'AaZz@1234', errmsgname: 'mot de passe',
        },
        {
            comp: 'input', label: 'Confirmer du Mot de passe', fieldType: 'password', name: 'password_confirm',
            ph: 'Confirmation...', errmsgname: 'les mot de passe',
        }]
}

export const accountOtherFields = {
    sexe: {
        comp: 'input', label: 'Sexe', fieldType: 'radio', name: 'sexe',
        options: [
            { label: 'Homme', value: 'Homme', id: "sexe_h" },
            { label: 'Femme', value: 'Femme', id: "sexe_f" },
        ], align: 'fs-radio_checkbox-row', errmsgname: ''
    },
    age: {
        comp: 'input', label: 'Age', fieldType: 'text', name: 'age',
        ph: 'Ex: 16', errmsgname: ''
    },
    université: {
        comp: 'input', label: 'Université', fieldType: 'textAndSearch', name: 'university',
        ph: 'Ex: Droit', errmsgname: '', searchObjKey: 'name'
    },
    filière: {
        comp: 'input', label: 'Filière', fieldType: 'textAndSearch', name: 'faculty',
        ph: 'Ex: Sait Cyr', errmsgname: '', searchObjKey: 'nom'
    },
    niveau_etude: {
        comp: 'input', label: "Niveau d'etude", fieldType: 'textAndSearch', name: 'study_level',
        ph: 'Ex: License', errmsgname: '', searchObjKey: 'nom'
    },
    année_scolaire: {
        comp: 'input', label: 'Année scolaire', fieldType: 'text', name: 'school_year',
        ph: 'Ex: 2021-2022', errmsgname: ''
    },
}


export const coursTypesChoicesArray = [
    { label: "CM", value: "CM" },
    { label: "TD", value: "TD" },
    { label: "Autre", value: "Autre" },
]