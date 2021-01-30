import React from 'react';
import CategoryIcon from '@material-ui/icons/Category';
import photo1 from "../components/pictures/60235744.gif";
import photo2 from "../components/pictures/instagram-new.png";
import image1 from '../components/pictures/ca262e0354eea311c41134c3e4bc3bc2.gif';
import image2 from '../components/pictures/225957874.png';
import image3 from '../components/pictures/Web-Banner-(1000-px-wide-and-300px-high).jpg';



export const INITIAL_DATAPAGE = {
    "category":[
        {idCategory:1, nameCategory:"Медицинский центр", icon: <CategoryIcon />, link:'/Sentences/category1'   },
        {idCategory:2, nameCategory:"Развлекательный центр", icon: <CategoryIcon />, link:'/Sentences/category2'},
        {idCategory:3, nameCategory:"Станция техобслуживания", icon: <CategoryIcon />, link:'/Sentences/category3'},
        {idCategory:4, nameCategory:"Шиномонтажный центр", icon: <CategoryIcon />, link:'/Sentences/category4'},
        {idCategory:5, nameCategory:"Стоматологический центр", icon: <CategoryIcon />, link:'/Sentences/category5'}
    ],
    "dataSelectedCategory": [
        { id:1, idCategory:1, nameSentence:"Терапевт", picture:image2 },
        { id:2, idCategory:1, nameSentence:"Окулист", picture:image2 },
        { id:3, idCategory:1, nameSentence:"Педиатр", picture:image2 },
        { id:4, idCategory:1, nameSentence:"Нервопатолог", picture:image2 },
        { id:5, idCategory:1, nameSentence:"Психотерапевт", picture:image2 },
        { id:6, idCategory:1, nameSentence:"Психиатр", picture:image2 },
        { id:7, idCategory:1, nameSentence:"Doc1", picture:image2},
        { id:18, idCategory:1, nameSentence:"Doc2", picture:image2},
        { id:19, idCategory:1, nameSentence:"Doc3", picture:image2},
        { id:20, idCategory:1, nameSentence:"Doc1", picture:image2},
        { id:21, idCategory:1, nameSentence:"Doc2", picture:image2},
        { id:22, idCategory:1, nameSentence:"Doc3", picture:image2},

        { id:8, idCategory:2, nameSentence:"Что-то1", picture:image2},
        { id:9, idCategory:2, nameSentence:"Что-то2", picture:image2},
        { id:10, idCategory:2, nameSentence:"Что-то3", picture:image2},

        { id:11, idCategory:3, nameSentence:"Что-то1", picture:image2},
        { id:12, idCategory:3, nameSentence:"Что-то2", picture:image2},

        { id:13, idCategory:4, nameSentence:"Что-то3", picture:image2},
        { id:14, idCategory:4, nameSentence:"Что-то4", picture:image2},
        { id:15, idCategory:4, nameSentence:"Что-то6", picture:image2},

        { id:16, idCategory:5, nameSentence:"Что-то123", picture:image2},
        { id:17, idCategory:5, nameSentence:"Что-то213", picture:image2},
    ],
    "topsales":[
        {idTopSales:1, titleTopSales:"Hello", picture: photo2},
        {idTopSales:2, titleTopSales:"Hello", picture: photo1},
        {idTopSales:3, titleTopSales:"Hello", picture: photo2},
        {idTopSales:4, titleTopSales:"Hello", picture: photo1},
        {idTopSales:5, titleTopSales:"Hello", picture: photo2}
    ],
    "recommendations":[
        {idRecommendation:1, titleRecommendation:"Hello", picture: photo1},
        {idRecommendation:2, titleRecommendation:"Hello", picture: photo2},
        {idRecommendation:3, titleRecommendation:"Hello", picture: photo1},
        {idRecommendation:4, titleRecommendation:"Hello", picture: photo2},
        {idRecommendation:5, titleRecommendation:"Hello", picture: photo1},
        {idRecommendation:6, titleRecommendation:"Hello", picture: photo2},
        {idRecommendation:7, titleRecommendation:"Hello", picture: photo2},
    ],
    "sliderPictures": [
        { id:1, src: image1 },
        { id:2, src: image2 },
        { id:3, src: image3 },
        { id:4, src: image1 },
        // { id:4, src: 'https://www.uaewave.com/wp-content/uploads/2019/05/IMG-Worlds-of-Adventure-Dubai-Landmarks.jpg' },
    ],

    "columns":[
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'dateTime', headerName: 'Date Time', width: 250 },
        { field: 'fullName', headerName: 'Client fullname', width: 200 },
        { field: 'numberPhone', headerName: 'Telephone number', type: 'number', width: 200 },
        { field: 'service', headerName: 'Service', type: 'text', width: 200 },
        { field: 'duration', headerName: 'Duration', type: 'text', width: 200 },
    ],
    "dataRowsClient" :[
        { id: 1, fullName: 'Snow Snow', numberPhone: '382282842871', dateTime: Date.now(), service:"Боулинг", duration:'1 hours' },
    ],
    "dataRowsProvider":[
        { id: 1, fullName: 'Snow Snow', numberPhone: '382282842871', dateTime: Date.now(), service:"Боулинг", duration:'1 hours' },
        { id: 2, fullName: 'Snow Snow', numberPhone: 'wefnlkewnflkwen', dateTime: Date.now(), service:"Боулинг", duration:'1 hours' },
        { id: 3, fullName: 'Snow Snow', numberPhone: '382282842871', dateTime: Date.now(), service:"Боулинг", duration:'1 hours' },
        { id: 4, fullName: 'Snow Snow', numberPhone: '382282842871', dateTime: Date.now(), service:"Боулинг", duration:'1 hours' },
    ]


};


