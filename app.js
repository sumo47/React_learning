import React from 'react'
import ReactDOM from 'react-dom/client'
import "./index.css"

/*
   Header 
     - Logo (Title)
     - Nav Items (Right Side)
     - Cart
   Body
     - Search Bar
     - Resturant List
       - Restaurant Card (many cards)
            - Image
            - Name
            - Rating 
            - Cusines
   Footer
     - Links
     - copyright
*/


const Logo = () => (
    <div className='logo'>
        <img src="https://www.ujudebug.com/wp-content/uploads/2019/08/food_villa-min.jpg" alt="logo" />
    </div>
)


// Composing Component
//! Read Optional chaning
const HeaderComponent = () => {
    return <div className='header'>
        <Logo />
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
}
// Config driven UI
const restaurentList = [
    {
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                "info": {
                    "id": "947015",
                    "name": "Thali House",
                    "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/9/2/79ef4da5-91be-422c-93a5-d52764cd24af_19a03153-9008-478e-aa85-a071de8ed937.jpg",
                    "locality": "Vaishali Nagar",
                    "areaName": "Vaishali Nagar",
                    "costForTwo": "₹200 for two",
                    "cuisines": [
                        "Thalis",
                        "Beverages",
                        "Fast Food"
                    ],
                    "avgRating": 3,
                    "veg": true,
                    "parentId": "9247",
                    "avgRatingString": "3.0",
                    "totalRatingsString": "3",
                    "promoted": true,
                    "adTrackingId": "cid=19608150~p=0~adgrpid=19608150#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=947015~eid=33f70484-0acf-4042-84cc-edc37294c1ef~srvts=1728842975094~collid=83637",
                    "sla": {
                        "deliveryTime": 58,
                        "lastMileTravel": 8,
                        "serviceability": "SERVICEABLE",
                        "slaString": "55-60 mins",
                        "lastMileTravelString": "8.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2024-10-13 23:59:00",
                        "opened": true
                    },
                    "badges": {

                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "textBased": {

                            },
                            "imageBased": {

                            },
                            "textExtendedBadges": {

                            }
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "50% OFF",
                        "subHeader": "ABOVE ₹149",
                        "discountTag": "FLAT DEAL"
                    },
                    "orderabilityCommunication": {
                        "title": {

                        },
                        "subTitle": {

                        },
                        "message": {

                        },
                        "customIcon": {

                        }
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {

                            },
                            "video": {

                            }
                        }
                    },
                    "reviewsSummary": {

                    },
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "isNewlyOnboarded": true,
                    "restaurantOfferPresentationInfo": {

                    },
                    "externalRatings": {
                        "aggregatedRating": {
                            "rating": "--"
                        }
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    "campaignId": "19608150"
                },
                "analytics": {

                },
                "cta": {
                    "link": "swiggy://menu?restaurant_id=947015&source=collection&query=Burger",
                    "text": "RESTAURANT_MENU",
                    "type": "DEEPLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
                "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                "sectionId": "MENU_RETURN_FOOD"
            }
        }
    },
    {
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                "info": {
                    "id": "446553",
                    "name": "Burger Farm",
                    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/10/213a964e-8671-4d10-aed6-4d5f0b4e2441_446553.JPG",
                    "locality": "Krishna Enclave",
                    "areaName": "Jhotwara",
                    "costForTwo": "₹200 for two",
                    "cuisines": [
                        "Snacks",
                        "American",
                        "Beverages",
                        "Continental"
                    ],
                    "avgRating": 4.5,
                    "parentId": "4660",
                    "avgRatingString": "4.5",
                    "totalRatingsString": "3.5K+",
                    "sla": {
                        "deliveryTime": 20,
                        "lastMileTravel": 1.9,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20-25 mins",
                        "lastMileTravelString": "1.9 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2024-10-14 03:00:00",
                        "opened": true
                    },
                    "badges": {
                        "imageBadges": [
                            {
                                "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Burger.png",
                                "description": "Delivery!"
                            },
                            {
                                "imageId": "Rxawards/_CATEGORY-Burger.png",
                                "description": "Delivery!"
                            }
                        ]
                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "textExtendedBadges": {

                            },
                            "textBased": {

                            },
                            "imageBased": {
                                "badgeObject": [
                                    {
                                        "attributes": {
                                            "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Burger.png",
                                            "description": "Delivery!"
                                        }
                                    },
                                    {
                                        "attributes": {
                                            "imageId": "Rxawards/_CATEGORY-Burger.png",
                                            "description": "Delivery!"
                                        }
                                    }
                                ]
                            }
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "₹100 OFF",
                        "subHeader": "ABOVE ₹299",
                        "discountTag": "FLAT DEAL"
                    },
                    "orderabilityCommunication": {
                        "title": {

                        },
                        "subTitle": {

                        },
                        "message": {

                        },
                        "customIcon": {

                        }
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {

                            },
                            "video": {

                            }
                        }
                    },
                    "reviewsSummary": {

                    },
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {

                    },
                    "externalRatings": {
                        "aggregatedRating": {
                            "rating": "4.3",
                            "ratingCount": "652"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                },
                "analytics": {

                },
                "cta": {
                    "link": "swiggy://menu?restaurant_id=446553&source=collection&query=Burger",
                    "text": "RESTAURANT_MENU",
                    "type": "DEEPLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
                "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                "sectionId": "MENU_RETURN_FOOD"
            }
        }
    },
    {
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                "info": {
                    "id": "254023",
                    "name": "McDonald's",
                    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/14/1f095e2c-c36e-4018-a2c5-00a23dbc06ed_254023.JPG",
                    "locality": "Chitrakoot",
                    "areaName": "Ajmer Road",
                    "costForTwo": "₹400 for two",
                    "cuisines": [
                        "American"
                    ],
                    "avgRating": 4.4,
                    "parentId": "630",
                    "avgRatingString": "4.4",
                    "totalRatingsString": "18K+",
                    "promoted": true,
                    "adTrackingId": "cid=19575747~p=1~adgrpid=19575747#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=254023~eid=0642f01b-e5e3-474a-81d0-9146938bb1e9~srvts=1728842975094~collid=83637",
                    "sla": {
                        "deliveryTime": 49,
                        "lastMileTravel": 11.5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "45-50 mins",
                        "lastMileTravelString": "11.5 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2024-10-14 01:30:00",
                        "opened": true
                    },
                    "badges": {
                        "imageBadges": [
                            {
                                "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Burger.png",
                                "description": "Delivery!"
                            },
                            {
                                "imageId": "Rxawards/_CATEGORY-Burger.png",
                                "description": "Delivery!"
                            }
                        ]
                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "textExtendedBadges": {

                            },
                            "textBased": {

                            },
                            "imageBased": {
                                "badgeObject": [
                                    {
                                        "attributes": {
                                            "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Burger.png",
                                            "description": "Delivery!"
                                        }
                                    },
                                    {
                                        "attributes": {
                                            "imageId": "Rxawards/_CATEGORY-Burger.png",
                                            "description": "Delivery!"
                                        }
                                    }
                                ]
                            }
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹49"
                    },
                    "orderabilityCommunication": {
                        "title": {

                        },
                        "subTitle": {

                        },
                        "message": {

                        },
                        "customIcon": {

                        }
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {

                            },
                            "video": {

                            }
                        }
                    },
                    "reviewsSummary": {

                    },
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {

                    },
                    "externalRatings": {
                        "aggregatedRating": {
                            "rating": "4.2",
                            "ratingCount": "5.2K+"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    "campaignId": "19575747"
                },
                "analytics": {

                },
                "cta": {
                    "link": "swiggy://menu?restaurant_id=254023&source=collection&query=Burger",
                    "text": "RESTAURANT_MENU",
                    "type": "DEEPLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
                "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                "sectionId": "MENU_RETURN_FOOD"
            }
        }
    },
    {
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                "info": {
                    "id": "485479",
                    "name": "Crazy Burger",
                    "cloudinaryImageId": "2b2b1957de551bfc0a5b9eb31b3ef338",
                    "locality": "Jhotwara",
                    "areaName": "Jhotwara",
                    "costForTwo": "₹250 for two",
                    "cuisines": [
                        "American"
                    ],
                    "avgRating": 3.8,
                    "parentId": "17253",
                    "avgRatingString": "3.8",
                    "totalRatingsString": "6",
                    "sla": {
                        "deliveryTime": 33,
                        "lastMileTravel": 3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "3.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2024-10-14 03:00:00",
                        "opened": true
                    },
                    "badges": {
                        "imageBadges": [
                            {
                                "imageId": "v1695133679/badges/Pure_Veg111.png",
                                "description": "pureveg"
                            }
                        ]
                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "textExtendedBadges": {

                            },
                            "textBased": {

                            },
                            "imageBased": {
                                "badgeObject": [
                                    {
                                        "attributes": {
                                            "description": "pureveg",
                                            "imageId": "v1695133679/badges/Pure_Veg111.png"
                                        }
                                    }
                                ]
                            }
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹79"
                    },
                    "orderabilityCommunication": {
                        "title": {

                        },
                        "subTitle": {

                        },
                        "message": {

                        },
                        "customIcon": {

                        }
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {

                            },
                            "video": {

                            }
                        }
                    },
                    "reviewsSummary": {

                    },
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {

                    },
                    "externalRatings": {
                        "aggregatedRating": {
                            "rating": "--"
                        }
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                },
                "analytics": {

                },
                "cta": {
                    "link": "swiggy://menu?restaurant_id=485479&source=collection&query=Burger",
                    "text": "RESTAURANT_MENU",
                    "type": "DEEPLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
                "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                "sectionId": "MENU_RETURN_FOOD"
            }
        }
    },
    {
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                "info": {
                    "id": "826178",
                    "name": "Lord Petrick",
                    "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/25/21712eb7-0020-4194-a38b-8b780915e071_b1c77c3e-0b72-435c-bb85-3a6b73474dff.png",
                    "locality": "Prince Road",
                    "areaName": "Vaishali Nagar",
                    "costForTwo": "₹400 for two",
                    "cuisines": [
                        "Burgers",
                        "Snacks",
                        "Italian",
                        "Desserts",
                        "Beverages"
                    ],
                    "avgRating": 4.3,
                    "parentId": "429673",
                    "avgRatingString": "4.3",
                    "totalRatingsString": "157",
                    "promoted": true,
                    "adTrackingId": "cid=19372693~p=2~adgrpid=19372693#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=826178~eid=48f5d105-be89-4566-a591-8583c4d4dcf0~srvts=1728842975094~collid=83637",
                    "sla": {
                        "deliveryTime": 46,
                        "lastMileTravel": 11.3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "45-50 mins",
                        "lastMileTravelString": "11.3 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2024-10-13 23:59:00",
                        "opened": true
                    },
                    "badges": {

                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "textBased": {

                            },
                            "imageBased": {

                            },
                            "textExtendedBadges": {

                            }
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "50% OFF",
                        "subHeader": "UPTO ₹90"
                    },
                    "orderabilityCommunication": {
                        "title": {

                        },
                        "subTitle": {

                        },
                        "message": {

                        },
                        "customIcon": {

                        }
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {

                            },
                            "video": {

                            }
                        }
                    },
                    "reviewsSummary": {

                    },
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {

                    },
                    "externalRatings": {
                        "aggregatedRating": {
                            "rating": "--"
                        }
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    "campaignId": "19372693"
                },
                "analytics": {

                },
                "cta": {
                    "link": "swiggy://menu?restaurant_id=826178&source=collection&query=Burger",
                    "text": "RESTAURANT_MENU",
                    "type": "DEEPLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
                "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                "sectionId": "MENU_RETURN_FOOD"
            }
        }
    },
    {
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                "info": {
                    "id": "486829",
                    "name": "Pizza Corner",
                    "cloudinaryImageId": "326fafebf3194127a31d61f55b8d6b91",
                    "locality": "Jhotwara",
                    "areaName": "Jhotwara",
                    "costForTwo": "₹400 for two",
                    "cuisines": [
                        "Pizzas",
                        "Fast Food"
                    ],
                    "avgRating": 4.2,
                    "parentId": "158467",
                    "avgRatingString": "4.2",
                    "totalRatingsString": "5",
                    "sla": {
                        "deliveryTime": 38,
                        "lastMileTravel": 3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "35-40 mins",
                        "lastMileTravelString": "3.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2024-10-14 03:00:00",
                        "opened": true
                    },
                    "badges": {
                        "imageBadges": [
                            {
                                "imageId": "v1695133679/badges/Pure_Veg111.png",
                                "description": "pureveg"
                            }
                        ]
                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "textExtendedBadges": {

                            },
                            "textBased": {

                            },
                            "imageBased": {
                                "badgeObject": [
                                    {
                                        "attributes": {
                                            "description": "pureveg",
                                            "imageId": "v1695133679/badges/Pure_Veg111.png"
                                        }
                                    }
                                ]
                            }
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹119"
                    },
                    "orderabilityCommunication": {
                        "title": {

                        },
                        "subTitle": {

                        },
                        "message": {

                        },
                        "customIcon": {

                        }
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {

                            },
                            "video": {

                            }
                        }
                    },
                    "reviewsSummary": {

                    },
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {

                    },
                    "externalRatings": {
                        "aggregatedRating": {
                            "rating": "--"
                        }
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                },
                "analytics": {

                },
                "cta": {
                    "link": "swiggy://menu?restaurant_id=486829&source=collection&query=Burger",
                    "text": "RESTAURANT_MENU",
                    "type": "DEEPLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
                "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                "sectionId": "MENU_RETURN_FOOD"
            }
        }
    },
    {
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                "info": {
                    "id": "320527",
                    "name": "Croo Do MINOS Pizza And Burger",
                    "cloudinaryImageId": "qdlkrmducpzqzbjbkvz4",
                    "locality": "Niwaru Road",
                    "areaName": "Jhotwara",
                    "costForTwo": "₹250 for two",
                    "cuisines": [
                        "Pizzas",
                        "Snacks"
                    ],
                    "avgRating": 3.5,
                    "veg": true,
                    "parentId": "66282",
                    "avgRatingString": "3.5",
                    "totalRatingsString": "227",
                    "sla": {
                        "deliveryTime": 40,
                        "lastMileTravel": 3.5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "35-40 mins",
                        "lastMileTravelString": "3.5 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2024-10-13 23:59:00",
                        "opened": true
                    },
                    "badges": {

                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "textBased": {

                            },
                            "imageBased": {

                            },
                            "textExtendedBadges": {

                            }
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹49"
                    },
                    "orderabilityCommunication": {
                        "title": {

                        },
                        "subTitle": {

                        },
                        "message": {

                        },
                        "customIcon": {

                        }
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {

                            },
                            "video": {

                            }
                        }
                    },
                    "reviewsSummary": {

                    },
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {

                    },
                    "externalRatings": {
                        "aggregatedRating": {
                            "rating": "--"
                        }
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                },
                "analytics": {

                },
                "cta": {
                    "link": "swiggy://menu?restaurant_id=320527&source=collection&query=Burger",
                    "text": "RESTAURANT_MENU",
                    "type": "DEEPLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
                "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                "sectionId": "MENU_RETURN_FOOD"
            }
        }
    }

]
const imageUrl = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"

// no key (not acceptable) << index key (use only if you don't have anything) << unique key
const RestaurentCard = ({ cloudinaryImageId, name, cuisines, avgRating, id }) => {
    // const { cloudinaryImageId, name, cuisines, avgRating } = resturent.card.card.info
    // console.log(props)
    return (
        <div className='card'>
            <img src={imageUrl + cloudinaryImageId} />
            <h2>{name}</h2>
            <h5>{cuisines.join(" , ")}</h5>
            <h5>{avgRating} stars</h5>
        </div>
    )
}

const Body = () => {
    return (
        <div className='restaurent-list'>
            {restaurentList.map((restaurent) => {
                return <RestaurentCard {...restaurent.card.card.info} key={restaurent.card.card.info.id}/>; {/* just like function call  */ };
            })}
        </div>
    )
}
// why we can not use key in card class 

const Footer = () => (
    <h4 className='footer'>Footer</h4>
)


const AppContent = () => {
    return (
        <>
            <HeaderComponent />
            <Body />
            <Footer />
        </>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'))

// root.render(container) //expend it // can only rander one element
//? can we create multiple root in react?

// when i have to render my Functional component - 
root.render(<AppContent />)