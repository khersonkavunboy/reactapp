import React from 'react';
import CategoryIcon from '@material-ui/icons/Category';
import photo from "../components/Slider/225957874.png";
import photo1 from "../components/RecomendationsOrTopSales/60235744.gif";
import photo2 from "../components/RecomendationsOrTopSales/instagram-new.png";
import image1 from '../components/Slider/ca262e0354eea311c41134c3e4bc3bc2.gif'
import image2 from '../components/Slider/225957874.png'
import image3 from '../components/Slider/Web-Banner-(1000-px-wide-and-300px-high).jpg'



export const INITIAL_DATAPAGE = {
    "category":[
        {idCategory:1, nameCategory:"Медицинский центр", icon: <CategoryIcon />, link:'/Sentences/category1'   },
        {idCategory:2, nameCategory:"Развлекательный центр", icon: <CategoryIcon />, link:'/Sentences/category2'},
        {idCategory:3, nameCategory:"Станция техобслуживания", icon: <CategoryIcon />, link:'/Sentences/category3'},
        {idCategory:4, nameCategory:"Шиномонтажный центр", icon: <CategoryIcon />, link:'/Sentences/category4'},
        {idCategory:5, nameCategory:"Стоматологический центр", icon: <CategoryIcon />, link:'/Sentences/category5'}
    ],
    "dataSelectedCategory": [
        { id:1, idCategory:1, nameSentence:"Терапевт", picture:photo },
        { id:2, idCategory:1, nameSentence:"Окулист", picture:photo },
        { id:3, idCategory:1, nameSentence:"Педиатр", picture:photo },
        { id:4, idCategory:1, nameSentence:"Нервопатолог", picture:photo },
        { id:5, idCategory:1, nameSentence:"Психотерапевт", picture:photo },
        { id:6, idCategory:1, nameSentence:"Психиатр", picture:photo },
        { id:7, idCategory:1, nameSentence:"Doc1", picture:photo},
        { id:18, idCategory:1, nameSentence:"Doc2", picture:photo},
        { id:19, idCategory:1, nameSentence:"Doc3", picture:photo},
        { id:20, idCategory:1, nameSentence:"Doc1", picture:photo},
        { id:21, idCategory:1, nameSentence:"Doc2", picture:photo},
        { id:22, idCategory:1, nameSentence:"Doc3", picture:photo},

        { id:8, idCategory:2, nameSentence:"Армия", picture:photo},
        { id:9, idCategory:2, nameSentence:"Армия2", picture:photo},
        { id:10, idCategory:2, nameSentence:"Армия3", picture:photo},

        { id:11, idCategory:3, nameSentence:"efewfwef", picture:photo},
        { id:12, idCategory:3, nameSentence:"wefewfewf", picture:photo},

        { id:13, idCategory:4, nameSentence:"weyruwer", picture:photo},
        { id:14, idCategory:4, nameSentence:"uiorewuruweo", picture:photo},
        { id:15, idCategory:4, nameSentence:"jewfj", picture:photo},

        { id:16, idCategory:5, nameSentence:"ewnfkjwe", picture:photo},
        { id:17, idCategory:5, nameSentence:"ewkfnwekj", picture:photo},
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
        { id:4, src: image1 }
    ]

};


