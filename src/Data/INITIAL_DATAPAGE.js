import React from 'react';
import CategoryIcon from '@material-ui/icons/Category';
import photo from "../components/MainSlider/225957874.png";


// export const DataVerticalServices = [
//     {
//         title:'Category1',
//         icon: <CategoryIcon />,
//         link:'/category1'
//     },
//     {
//         title:'Category2',
//         icon: <CategoryIcon />,
//         link:'/category2'
//     },
//     {
//         title:'Category3',
//         icon: <CategoryIcon />,
//         link:'/category3'
//     },
//     {
//         title:'Category4',
//         icon: <CategoryIcon />,
//         link:'/category4'
//     },
// ];

export const INITIAL_DATAPAGE = {
    "category":[
        {idCategory:1, nameCategory:"Медицинский центр", icon: <CategoryIcon />, link:'/Sentences/category1'   },
        {idCategory:2, nameCategory:"Развлекательный центр", icon: <CategoryIcon />, link:'/Sentences/category2'},
        {idCategory:3, nameCategory:"Станция техобслуживания", icon: <CategoryIcon />, link:'/Sentences/category3'},
        {idCategory:4, nameCategory:"Шиномонтажный центр", icon: <CategoryIcon />, link:'/Sentences/category4'},
        {idCategory:5, nameCategory:"Стоматологический центр", icon: <CategoryIcon />, link:'/Sentences/category5'}
    ],
    "sentenceMedicalCenter": [
        { idsentenceMedicalCenter:1, idCategory:1, nameSentence:"Терапевт", picture:photo },
        { idsentenceMedicalCenter:2, idCategory:1, nameSentence:"Окулист", picture:photo },
        { idsentenceMedicalCenter:3, idCategory:1, nameSentence:"Педиатр", picture:photo },
        { idsentenceMedicalCenter:4, idCategory:1, nameSentence:"Нервопатолог", picture:photo },
        { idsentenceMedicalCenter:5, idCategory:1, nameSentence:"Психотерапевт", picture:photo },
        { idsentenceMedicalCenter:6, idCategory:1, nameSentence:"Психиатр", picture:photo },
        { idsentenceMedicalCenter:7, idCategory:1, nameSentence:"Армия", picture:photo}
    ]

};


