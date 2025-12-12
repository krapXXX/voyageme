import type { ProductPageSection } from "../../product/model/ProductType";
import type { SectionType } from "../model/HomeType";

export default class SectionDao {
    static cacheSections: Array<ProductPageSection> | undefined;

    static getSections() {
        return new Promise<Array<ProductPageSection>>((resolve, _) => {
            if (typeof SectionDao.cacheSections != 'undefined') {
                resolve(SectionDao.cacheSections);
            }
            else {
                setTimeout(() => {
                    SectionDao.cacheSections =
                        [
                            {
                                slug: "tropical-escape",
                                name: "Tropical Escape",
                                location: "Punta Cana, Dominican Republic",
                                price: "UAH 58,900",
                                date: "19.04 to 26.04 (7 nights)",
                                duration: "7 nights",
                                description: "Relax under palm trees, turquoise sea, and all-inclusive 5-star comfort.",
                                descriptionFull:
                                    "Experience the Caribbean at its finest with our “Tropical Escape” tour. Enjoy long beaches, warm turquoise waters, and a premium all-inclusive hotel. Ideal for couples or families looking for maximum comfort, relaxation, and unforgettable tropical memories.",
                                tourists: "2 adults",
                                departure: "Departure from Chisinau, Moldova",
                                includes: [
                                    "All-inclusive meals and drinks",
                                    "Guided beach walk and ocean viewpoints",
                                    "Free time for snorkeling and water activities",
                                    "Evening entertainment program",
                                    "24/7 travel assistant support"
                                ],
                                imageUrl: [
                                    "/img/Tropical.png",
                                ]
                            },

                            {
                                slug: "sun-diving",
                                name: "Sun & Diving",
                                location: "Sharm El Sheikh, Egypt",
                                price: "UAH 29,900",
                                date: "20.04 to 27.04 (7 nights)",
                                duration: "7 nights",
                                description: "Summer vibes in April: sea, coral reefs, and warm all-inclusive comfort.",
                                descriptionFull:
                                    "Dive into the underwater world of the Red Sea with our “Sun & Diving” package. Beautiful coral reefs, crystal-clear waters, and a warm climate make this the perfect early-summer getaway.",
                                tourists: "2 adults",
                                departure: "Departure from Chisinau, Moldova",
                                includes: [
                                    "Daily snorkeling opportunities",
                                    "Introductory diving session",
                                    "All-inclusive hotel accommodation",
                                    "Local attractions and evening shows",
                                    "Airport transfer"
                                ],
                                imageUrl: [
                                    "/img/Diving.png",

                                ]
                            },

                            {
                                slug: "balkan-romance",
                                name: "Balkan Romance",
                                location: "Budva, Montenegro",
                                price: "UAH 41,200",
                                date: "28.05 to 04.06 (7 nights)",
                                duration: "7 nights",
                                description: "The perfect week for two – sea, mountains, and incredible cuisine.",
                                descriptionFull:
                                    "Discover the charm of the Adriatic coastline with our “Balkan Romance” tour. Sun-drenched beaches, medieval towns, and breathtaking views make this trip ideal for couples or friends looking to explore Montenegro’s vibrant culture.",
                                tourists: "2 adults",
                                departure: "Departure from Chisinau, Moldova",
                                includes: [
                                    "Guided walking tour of Budva’s Old Town",
                                    "Full-day excursion to Kotor & Perast",
                                    "Free beach time and local experiences",
                                    "Travel assistant support throughout the trip",
                                    "Welcome drink & farewell dinner"
                                ],
                                imageUrl: [
                                    "/img/Balkan.png",
                                ]
                            },

                            {
                                slug: "spring-in-paris",
                                name: "Spring in Paris",
                                location: "Paris, France",
                                price: "UAH 36,500",
                                date: "28.05 to 04.06 (7 nights)",
                                duration: "7 nights",
                                description: "Walks along the Seine, croissants, and a weekend in the heart of Europe.",
                                descriptionFull:
                                    "Enjoy a romantic European escape in the iconic city of Paris. Explore historic landmarks, charming cafes, and world-class museums while experiencing the magic of spring in France.",
                                tourists: "2 adults",
                                departure: "Departure from Chisinau, Moldova",
                                includes: [
                                    "Guided tour of central Paris",
                                    "Visit to the Eiffel Tower viewpoint",
                                    "Seine River evening walk",
                                    "Free day for shopping and museums",
                                    "Local transportation included"
                                ],
                                imageUrl: [
                                    "/img/Paris.jpg",
                                ]
                            },

                            {
                                slug: "turkish-delight",
                                name: "Turkish Delight",
                                location: "Antalya, Turkey",
                                price: "UAH 21,500",
                                date: "14.05 to 19.05 (5 nights)",
                                duration: "5 nights",
                                description: "All-inclusive beach escape. Warm waters, luxury hotels, vibrant bazaars await.",
                                descriptionFull:
                                    "Enjoy beautiful beaches, warm weather, and top-notch hospitality in sunny Antalya. This offer is perfect for those seeking relaxation, comfort, and great food at a fantastic price.",
                                tourists: "2 adults",
                                departure: "Departure from Chisinau, Moldova",
                                includes: [
                                    "All-inclusive hotel stay",
                                    "Pool & spa access",
                                    "Visit to local markets",
                                    "Beach activities and guided walks",
                                    "Travel assistant support"
                                ],
                                imageUrl: [
                                    "/img/Turkey.jpg",
                                ]
                            },

                            {
                                slug: "aegean-weekend",
                                name: "Aegean Weekend",
                                location: "Thessaloniki, Greece",
                                price: "UAH 22,000",
                                date: "23.05 to 26.05 (3 nights)",
                                duration: "3 nights",
                                description: "Stroll the boardwalk, dine seaside, catch the sunset from Byzantine towers.",
                                descriptionFull:
                                    "A short but unforgettable Mediterranean experience. Explore Thessaloniki's historic charm, delicious cuisine, and long seaside promenades.",
                                tourists: "2 adults",
                                departure: "Departure from Chisinau, Moldova",
                                includes: [
                                    "City tour of Thessaloniki",
                                    "Sunset viewpoint visit",
                                    "Seaside dinner recommendations included",
                                    "Breakfast daily",
                                    "Travel assistant support"
                                ],
                                imageUrl: [
                                    "/img/Aegean.jpg",
                                ]
                            },

                            {
                                slug: "sunny-escape-egypt",
                                name: "Sunny Escape to Egypt",
                                location: "Hurghada, Egypt",
                                price: "UAH 44,600",
                                date: "29.05 to 03.06 (5 nights)",
                                duration: "5 nights",
                                description: "Crystal waters, coral reefs, and endless sun – the perfect summer jumpstart.",
                                descriptionFull:
                                    "Enjoy warm Red Sea waters, colorful reefs, and sunny days in beautiful Hurghada. Ideal for couples and families wanting an early-summer getaway.",
                                tourists: "2 adults",
                                departure: "Departure from Chisinau, Moldova",
                                includes: [
                                    "Snorkeling experience",
                                    "All-inclusive hotel stay",
                                    "Free beach time",
                                    "Airport transfer",
                                    "Travel assistant support"
                                ],
                                imageUrl: [
                                    "/img/Egypt.jpg",
                                ]
                            },
                            {
                                slug: "balloons-over-cappadocia",
                                name: "Balloons Over Cappadocia",
                                location: "Cappadocia, Turkey",
                                price: "UAH 39,800",
                                date: "Available April – October",
                                duration: "5 nights",
                                description: "Sunrise balloons, ancient valleys, and iconic mountain horizons.",
                                descriptionFull:
                                    "Experience the magic of Cappadocia, where sunrise hot-air balloons float above sculpted valleys, cave dwellings, and ancient stone formations. A breathtaking escape for explorers, photographers, and dreamers.",
                                tourists: "2 adults",
                                departure: "Departure from Chisinau, Moldova",
                                includes: [
                                    "Sunrise hot-air balloon flight",
                                    "Tour of Göreme & valley viewpoints",
                                    "Visit to underground cities",
                                    "Traditional Turkish dinner",
                                    "Airport transfer & assistance"
                                ],
                                imageUrl: [
                                    "/img/Cappadocia.png",
                                ]
                            },
                            {
                                slug: "canyon-escape-oglesby",
                                name: "Canyon Escape Oglesby",
                                location: "Oglesby, United States",
                                price: "UAH 46,200",
                                date: "March – November",
                                duration: "4 nights",
                                description: "Sandstone canyons, forest trails, and peaceful riverside nature.",
                                descriptionFull:
                                    "Discover Oglesby — a serene American nature retreat with sandstone gorges, waterfalls, forest trails, and quiet riversides. A perfect journey for hikers and travelers seeking calm, nature, and scenic viewpoints.",
                                tourists: "2 adults",
                                departure: "Departure from Chisinau, Moldova",
                                includes: [
                                    "Daily guided hikes",
                                    "Canyon viewpoint tour",
                                    "Waterfall photo stops",
                                    "Local dining experience",
                                    "Travel coordinator assistance"
                                ],
                                imageUrl: [
                                    "/img/Oglesby.png",
                                ]
                            },
                            {
                                slug: "golden-dunes-rub-al-khali",
                                name: "Golden Dunes of Rub' al Khali",
                                location: "Rub' al Khali, UAE",
                                price: "UAH 53,900",
                                date: "October – April",
                                duration: "4 nights",
                                description: "Endless desert horizons, silent dunes, and warm evening winds.",
                                descriptionFull:
                                    "Journey into Rub' al Khali, the legendary Empty Quarter. Explore vast golden dunes, watch dramatic sunsets, and relax in luxury desert camps with authentic Arabian hospitality.",
                                tourists: "2 adults",
                                departure: "Departure from Chisinau, Moldova",
                                includes: [
                                    "Sunset desert safari",
                                    "Camel ride and dune bashing",
                                    "Luxury tent stay",
                                    "Arabian-style dinner & entertainment",
                                    "Airport transfer & guide"
                                ],
                                imageUrl: [
                                    "/img/Khali.png",
                                ]
                            },
                            {
                                slug: "emerald-waters-palawan",
                                name: "Emerald Waters of Palawan",
                                location: "Palawan, Philippines",
                                price: "UAH 62,700",
                                date: "November – June",
                                duration: "6 nights",
                                description: "Turquoise lagoons, lush reefs, and postcard-perfect islands.",
                                descriptionFull:
                                    "Escape to Palawan — a world-famous tropical paradise with crystal-clear lagoons, dramatic limestone cliffs, and hidden beaches. Ideal for couples, adventurers, and nature lovers.",
                                tourists: "2 adults",
                                departure: "Departure from Chisinau, Moldova",
                                includes: [
                                    "Island-hopping tour",
                                    "Kayaking & snorkeling",
                                    "Beachfront resort stay",
                                    "Local cuisine experience",
                                    "24/7 travel assistance"
                                ],
                                imageUrl: [
                                    "/img/Palawan.png",
                                ]
                            }



                        ];


                    resolve(SectionDao.cacheSections);
                }, 300)
            }
        }
        )

    }
}