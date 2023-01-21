export const sampleData = [
    {
        id: 1,
        title: 'Viaje al museo La Venta',
        date: new Date('2023-03-21'),
        category: 'culture',
        description: 'Museo al aire libre con cabezas de piedra y altares antiguos, así como un zoológico con jaguares y más.',
        city: {
            address: "Villahermosa, Tabasco",
            latLng: {
                lat: 17.992608,
                lng: -92.9881406
            }
        },
        venue: {
            address: "Parque Museo La Venta, Boulevard Adolfo Ruiz Cortines, Jesus Garcia, Villahermosa, Tabasco",
            latLng: {
                lat: 18.0018958,
                lng: -92.9362954
            }
        },
        hostedBy: 'Secretaria de cultura',
        hostPhotoURL: 'https://randomuser.me/api/portraits/men/20.jpg',
        attendees: [
            {
                id: 1,
                name: 'Alicia',
                photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
            },
            {
                id: 2,
                name: 'Pedro',
                photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
            }
        ]
    },
    {
        id: 2,
        title: 'Ascenso al cerro de la pava',
        date: new Date('2023-03-18'),
        category: 'travel',
        description: 'Sube el cerro de la pava, una elevación de 990m localizada entre Tabasco y Chiapas. Descubre la vista desde el pico en su cima, un escenario que jamas olvidaras!',
        city: {
            address: "Huimanguillo, Tabasco",
            latLng: {
                lat: 17.8278129,
                lng: -93.4076518
            }
        },
        venue: {
            address: "Villa de Guadalupe, región de Agua Selva, Huimanguillo Tabasco, Villa de Guadalupe, Tabasco",
            latLng: {
                lat: 17.3608531,
                lng: -93.6103497
            }
        },
        hostedBy: 'Ecoturismo Olmaya',
        hostPhotoURL: 'https://randomuser.me/api/portraits/men/22.jpg',
        attendees: [
            {
                id: 1,
                name: 'Alicia',
                photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
            },
            {
                id: 2,
                name: 'Pedro',
                photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
            }
        ]
    }
];
