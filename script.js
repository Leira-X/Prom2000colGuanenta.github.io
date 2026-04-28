// Datos estudiantes
        const estudiantes = [
            {
                id: 1,
                nombre: "Claudia Lucía Acelas",
                grado: "11.1",
                especialidad: "Sistemas",
                foto: "https://yt3.googleusercontent.com/ytc/AIdro_lB1NSH2x8mOZVE_bw9NX6EMoO8HCVLbmclMjCXRaELPKE=s900-c-k-c0x00ffffff-no-rj",
                descripcion: "",
                
            },
            {
                id: 2,
                nombre: "yoana Calderon",
                grado: "11.3",
                especialidad: "Sistemas",
                foto: "https://fda83c514b.cbaul-cdnwnd.com/d7126d3ebd4e5df5fbf159dc3aef9422/200000055-658fa658fd/700/yoana.webp?ph=fda83c514b",
                descripcion: "",
                
            },
            {
                id: 3,
                nombre: "Javier Fernando Camacho",
                grado: "11.3",
                especialidad: "Sistemas",
                foto: "https://yt3.googleusercontent.com/ytc/AIdro_ngKVgWYiMW5zba9TIyWkIVoBj_1-gezY8Cd0JnX-oyUhU=s160-c-k-c0x00ffffff-no-rj",
                descripcion: "",
            
            },
            {
                id: 4,
                nombre: "Yolima castillo Ulloa",
                grado: "11.3",
                especialidad: "Sistemas",
                foto: "https://fda83c514b.cbaul-cdnwnd.com/d7126d3ebd4e5df5fbf159dc3aef9422/200000035-0cab70cab9/700/yolima.webp?ph=fda83c514b",
                descripcion: "Destacado en debates estudiantiles. Hoy es abogado penalista en Bucaramanga.",
                Matripuntos: "0"
            },
            {
                id: 5,
                nombre: "Juan Ricardo Cobos Perez",
                grado: "11.3",
                especialidad: "Sistemas",
                foto: "https://fda83c514b.cbaul-cdnwnd.com/d7126d3ebd4e5df5fbf159dc3aef9422/200000057-9f84e9f850/700/629754794_18401975104181627_4207378683678415651_n.webp?ph=fda83c514b",
                descripcion: "Excelente en literatura y escritura creativa. Actualmente es periodista y escritora."
            },
            {
                id: 6,
                nombre: "Sandra Bibiana Becerra",
                grado: "11.3",
                especialidad: "Sistemas",
                foto: "https://fda83c514b.cbaul-cdnwnd.com/d7126d3ebd4e5df5fbf159dc3aef9422/200000003-c947fc9481/450/1758645218311.webp?ph=fda83c514b",
                descripcion: "Destacado en física y química. Hoy es ingeniero químico en Barranquilla."
            },
            {
                id: 7,
                nombre: "Diana Carolina Galvis",
                grado: "11.4",
                especialidad: "Sistemas",
                foto: "https://img.freepik.com/fotos-premium/hombre-circulo-azul-fondo-blanco_1137696-4343.jpg",
                descripcion: "Participante del grupo de danzas folclóricas. Actualmente es docente de primaria."
            },
            {
                id: 8,
                nombre: "Uriel Oswaldo Gómez Acosta",
                grado: "11.4",
                especialidad: "Sistemas",
                foto: "https://img.freepik.com/fotos-premium/hombre-circulo-azul-fondo-blanco_1137696-4343.jpg",
                descripcion: "Destacado en historia y geografía. Hoy es historiador y guía turístico en San Gil."
            },
            {
                id: 9,
                nombre: "Sandra Milena Gómez Moncada ",
                grado: "11.1",
                especialidad: "Sistemas",
                foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShMF5RHw1-s0chElE0WiO3TKDxW_KA6_JL3w&s",
                descripcion: "Excelente en inglés y francés. Actualmente es traductora e intérprete."
            },
            {
                id: 10,
                nombre: "Cristina Isabel Gómez Quecho",
                grado: "11.5",
                especialidad: "Sistemas",
                foto: "https://fda83c514b.cbaul-cdnwnd.com/d7126d3ebd4e5df5fbf159dc3aef9422/200000005-0fc7c0fc7e/450/1673715919365.webp?ph=fda83c514b",
                descripcion: "Destacado en economía y emprendimiento. Hoy es empresario en el sector tecnológico."
            },
            {
                id: 11,
                nombre: "Fleydei Manuel Lozano",
                grado: "11.5",
                especialidad: "Sistemas",
                foto: "https://img.freepik.com/fotos-premium/hombre-circulo-azul-fondo-blanco_1137696-4343.jpg",
                descripcion: "Destacado en economía y emprendimiento. Hoy es empresario en el sector tecnológico."
            },
            {
                id: 12,
                nombre: "Erimer Mancilla Ríos",
                grado: "11.5",
                especialidad: "Sistemas",
                foto: "https://img.freepik.com/fotos-premium/hombre-circulo-azul-fondo-blanco_1137696-4343.jpg",
                descripcion: "Destacado en economía y emprendimiento. Hoy es empresario en el sector tecnológico."
            },
            {
                id: 13,
                nombre: "Fredy Mayorga",
                grado: "11.5",
                especialidad: "Sistemas",
                foto: "https://img.freepik.com/fotos-premium/hombre-circulo-azul-fondo-blanco_1137696-4343.jpg",
                descripcion: "Destacado en economía y emprendimiento. Hoy es empresario en el sector tecnológico."
            },
            {
                id: 14,
                nombre: "Xiomara Navas Castellanos",
                grado: "11.5",
                especialidad: "Sistemas",
                foto: "https://img.freepik.com/fotos-premium/hombre-circulo-azul-fondo-blanco_1137696-4343.jpg",
                descripcion: "Destacado en economía y emprendimiento. Hoy es empresario en el sector tecnológico."
            },
            {
                id: 15,
                nombre: "Víctor Manuel Pizza",
                grado: "11.5",
                especialidad: "Sistemas",
                foto: "https://img.freepik.com/fotos-premium/hombre-circulo-azul-fondo-blanco_1137696-4343.jpg",
                descripcion: "Destacado en economía y emprendimiento. Hoy es empresario en el sector tecnológico."
            },
            {
                id: 16,
                nombre: "Edwin Rodríguez",
                grado: "11.5",
                especialidad: "Sistemas",
                foto: "https://fda83c514b.cbaul-cdnwnd.com/d7126d3ebd4e5df5fbf159dc3aef9422/200000019-8c84f8c851/700/edwinrodri.webp?ph=fda83c514b",
                descripcion: "Destacado en economía y emprendimiento. Hoy es empresario en el sector tecnológico."
            },
            {
                id: 17,
                nombre: "Aura Viviana Velazco",
                grado: "11.2",
                especialidad: "Dibujo",
                foto: "https://fda83c514b.cbaul-cdnwnd.com/d7126d3ebd4e5df5fbf159dc3aef9422/200000053-ce02ace02c/aura.webp?ph=fda83c514b",
                descripcion: ""
            },
            {
                id: 18,
                nombre: "Cesar Sanabria",
                grado: "11.5",
                especialidad: "Sistemas",
                foto: "https://fda83c514b.cbaul-cdnwnd.com/d7126d3ebd4e5df5fbf159dc3aef9422/200000059-6a9c16a9c3/700/cesar.webp?ph=fda83c514b",
                descripcion: "Destacado en economía y emprendimiento. Hoy es empresario en el sector tecnológico."
            },
            {
                id: 19,
                nombre: "Yesid Alexander Sánchez",
                grado: "11.5",
                especialidad: "Sistemas",
                foto: "https://img.freepik.com/fotos-premium/hombre-circulo-azul-fondo-blanco_1137696-4343.jpg",
                descripcion: "Destacado en economía y emprendimiento. Hoy es empresario en el sector tecnológico."
            },
            {
                id: 20,
                nombre: "Nelsy Valderrama",
                grado: "11.1",
                especialidad: "Sistemas",
                foto: "https://fda83c514b.cbaul-cdnwnd.com/d7126d3ebd4e5df5fbf159dc3aef9422/200000061-7e0307e032/nelcy.webp?ph=fda83c514b",
                descripcion: "Destacado en economía y emprendimiento. Hoy es empresario en el sector tecnológico."
            },
            {
                id: 21,
                nombre: "Nohora Alejandra Guerrero",
                grado: "11.5",
                especialidad: "Sistemas",
                foto: "https://img.freepik.com/fotos-premium/hombre-circulo-azul-fondo-blanco_1137696-4343.jpg",
                descripcion: "Destacado en economía y emprendimiento. Hoy es empresario en el sector tecnológico."
            },
            {
                id: 22,
                nombre: "Melisa Munévar",
                grado: "11.5",
                especialidad: "Sistemas",
                foto: "https://fda83c514b.cbaul-cdnwnd.com/d7126d3ebd4e5df5fbf159dc3aef9422/200000063-9aa289aa2a/700/melisa.webp?ph=fda83c514b",
                descripcion: "Destacado en economía y emprendimiento. Hoy es empresario en el sector tecnológico."
            },
            {
                id: 23,
                nombre: "Diana Ximena Pinzón",
                grado: "11.5",
                especialidad: "Sistemas",
                foto: "https://fda83c514b.cbaul-cdnwnd.com/d7126d3ebd4e5df5fbf159dc3aef9422/200000025-426e9426eb/700/502977815_18514958479038601_6436733676180734622_n.webp?ph=fda83c514b",
                descripcion: "Destacado en economía y emprendimiento. Hoy es empresario en el sector tecnológico."
            },
            {
                id: 24,
                nombre: "Helena Margarita Guarín Nuñez",
                grado: "11.5",
                especialidad: "Sistemas",
                foto: "https://fda83c514b.cbaul-cdnwnd.com/d7126d3ebd4e5df5fbf159dc3aef9422/200000013-f2603f2605/450/1718513598107.webp?ph=fda83c514b",
                descripcion: "Destacado en economía y emprendimiento. Hoy es empresario en el sector tecnológico."
            },
            {
                id: 25,
                nombre: "Fallon Marcela Guarín",
                grado: "11.5",
                especialidad: "Sistemas",
                foto: "https://fda83c514b.cbaul-cdnwnd.com/d7126d3ebd4e5df5fbf159dc3aef9422/200000021-4f6f34f6f5/700/621682788_18080366720005843_3211879001585885830_n.webp?ph=fda83c514b",
                descripcion: "Destacado en economía y emprendimiento. Hoy es empresario en el sector tecnológico."
            },
            {
                id: 26,
                nombre: "Dexy Mayerly Parra ",
                grado: "11.5",
                especialidad: "Sistemas",
                foto: "https://fda83c514b.cbaul-cdnwnd.com/d7126d3ebd4e5df5fbf159dc3aef9422/200000015-2fd5f2fd61/450/1516591227008.webp?ph=fda83c514b",
                descripcion: "Destacado en economía y emprendimiento. Hoy es empresario en el sector tecnológico."
            },
            {
                id: 27,
                nombre: "Lucenith Jaimes",
                grado: "11.5",
                especialidad: "Sistemas",
                foto: "https://fda83c514b.cbaul-cdnwnd.com/d7126d3ebd4e5df5fbf159dc3aef9422/200000065-bdee4bdee6/700/lucenith.webp?ph=fda83c514b",
                descripcion: "Destacado en economía y emprendimiento. Hoy es empresario en el sector tecnológico."
            },
            {
                id: 28,
                nombre: "Liliana Sarmiento",
                grado: "11.5",
                especialidad: "Sistemas",
                foto: "https://img.freepik.com/fotos-premium/hombre-circulo-azul-fondo-blanco_1137696-4343.jpg",
                descripcion: "Destacado en economía y emprendimiento. Hoy es empresario en el sector tecnológico."
            },
            {
                id: 29,
                nombre: "Olga Urrea",
                grado: "11.5",
                especialidad: "Sistemas",
                foto: "https://img.freepik.com/fotos-premium/hombre-circulo-azul-fondo-blanco_1137696-4343.jpg",
                descripcion: "Destacado en economía y emprendimiento. Hoy es empresario en el sector tecnológico."
            },
            {
                id: 30,
                nombre: "Sergio Yhair Rodríguez",
                grado: "11.5",
                especialidad: "Sistemas",
                foto: "https://img.freepik.com/fotos-premium/hombre-circulo-azul-fondo-blanco_1137696-4343.jpg",
                descripcion: "Destacado en economía y emprendimiento. Hoy es empresario en el sector tecnológico."
            },
            {
                id: 31,
                nombre: "Andres Mauricio Rodríguez",
                grado: "11.5",
                especialidad: "Sistemas",
                foto: "https://img.freepik.com/fotos-premium/hombre-circulo-azul-fondo-blanco_1137696-4343.jpg",
                descripcion: "Destacado en economía y emprendimiento. Hoy es empresario en el sector tecnológico."
            },
            {
                id: 32,
                nombre: "Edwin Carvajal",
                grado: "11.5",
                especialidad: "Sistemas",
                foto: "https://img.freepik.com/fotos-premium/hombre-circulo-azul-fondo-blanco_1137696-4343.jpg",
                descripcion: "Destacado en economía y emprendimiento. Hoy es empresario en el sector tecnológico."
            },
            {
                id: 33,
                nombre: "Alvaro Fabián Muñoz",
                grado: "11.5",
                especialidad: "Sistemas",
                foto: "https://fda83c514b.cbaul-cdnwnd.com/d7126d3ebd4e5df5fbf159dc3aef9422/200000017-ba9d7ba9d9/700/361718845_951634242619060_3245475423769438347_n.webp?ph=fda83c514b",
                descripcion: "Destacado en economía y emprendimiento. Hoy es empresario en el sector tecnológico."
            },
            {
                id: 34,
                nombre: "Jerson Albeiro Ramirez Carreño",
                grado: "11.5",
                especialidad: "Sistemas",
                foto: "https://img.freepik.com/fotos-premium/hombre-circulo-azul-fondo-blanco_1137696-4343.jpg",
                descripcion: "Destacado en economía y emprendimiento. Hoy es empresario en el sector tecnológico."
            },
            {
                id: 35,
                nombre: "Jeffrey Andres Díaz",
                grado: "11.5",
                especialidad: "Sistemas",
                foto: "https://fda83c514b.cbaul-cdnwnd.com/d7126d3ebd4e5df5fbf159dc3aef9422/200000067-b57dbb57dc/700/jeffrey.webp?ph=fda83c514b",
                descripcion: "Destacado en economía y emprendimiento. Hoy es empresario en el sector tecnológico."
            },
            {
                id: 36,
                nombre: "Willian Fernando Muñoz",
                grado: "11.5",
                especialidad: "Sistemas",
                foto: "https://img.freepik.com/fotos-premium/hombre-circulo-azul-fondo-blanco_1137696-4343.jpg",
                descripcion: "Destacado en economía y emprendimiento. Hoy es empresario en el sector tecnológico."
            },
            {
                id: 37,
                nombre: "Javier Ricardo Solano",
                grado: "11.5",
                especialidad: "Sistemas",
                foto: "https://fda83c514b.cbaul-cdnwnd.com/d7126d3ebd4e5df5fbf159dc3aef9422/200000081-e2216e2218/700/ricardo_solano.webp?ph=fda83c514b",
                descripcion: "Destacado en economía y emprendimiento. Hoy es empresario en el sector tecnológico."
            },
            {
                id: 38,
                nombre: "Diego Fernando Cano Rosales",
                grado: "11.5",
                especialidad: "Sistemas",
                foto: "https://objects-co.cdn-topdoctors.com/provider/433689/image/profile/medium/prof__20200811183902.png?width=648&format=avif",
                descripcion: "Destacado en economía y emprendimiento. Hoy es empresario en el sector tecnológico."
            },
            {
                id: 39,
                nombre: "Fabián Aníbal López",
                grado: "11.5",
                especialidad: "Sistemas",
                foto: "https://fda83c514b.cbaul-cdnwnd.com/d7126d3ebd4e5df5fbf159dc3aef9422/200000047-b3be9b3beb/700/fabian.webp?ph=fda83c514b",
                descripcion: "Destacado en economía y emprendimiento. Hoy es empresario en el sector tecnológico."
            },

            {
                id: 40,
                nombre: "Ivan Marcelo Reyes Quiroga",
                grado: "11.3",
                especialidad: "Electricidad",
                foto: "https://scontent.feoh2-1.fna.fbcdn.net/v/t1.6435-9/60435316_10157168305769932_1259481455696805888_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=53a332&_nc_ohc=FOMcMfHgjAgQ7kNvwFGw-Bk&_nc_oc=AdqUnsw-Vcq-g15rCzq1d36q87mV0O282ZkQoTGquj5r2MSZJyRUfmOz6_tvAHqWsHw&_nc_zt=23&_nc_ht=scontent.feoh2-1.fna&_nc_gid=Na_U20MtOUx35fdzJYHihA&_nc_ss=7a389&oh=00_Af1SYpR7ouLVxKATnizPTz4bFdxQsCnyEq9_937VPOC0Yw&oe=6A0C4C4B",
                descripcion: "Destacado en economía y emprendimiento. Hoy es empresario en el sector tecnológico."
            },
            {
                id: 41,
                nombre: "Pedro Leandro Pico",
                grado: "11.3",
                especialidad: "Electricidad",
                foto: "https://fda83c514b.cbaul-cdnwnd.com/d7126d3ebd4e5df5fbf159dc3aef9422/200000007-e4c20e4c21/450/1718654990145.webp?ph=fda83c514b",
                descripcion: "Destacado en economía y emprendimiento. Hoy es empresario en el sector tecnológico."
            },
            {
                id: 42,
                nombre: "Nelson Miguel Pico Pico",
                grado: "11.3",
                especialidad: "Electricidad",
                foto: "https://scontent.feoh2-1.fna.fbcdn.net/v/t39.30808-6/650009867_10162437700562897_226161714762684770_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=13d280&_nc_ohc=SpsgBTrpi_QQ7kNvwFM4hw2&_nc_oc=AdoQml2eI-h5Zn2Tojsu7BMbT81Y_vMTE8-s_d93trwSJro84LO3W7U__bSqFX_pGJ4&_nc_zt=23&_nc_ht=scontent.feoh2-1.fna&_nc_gid=cSMDmpboqVzgBZq2K-iWew&_nc_ss=7a389&oh=00_Af1EiXT93FYLN2Z7_FzpBrRcJwwycGucVuhLV41mHtIQyA&oe=69EAAE46",
                descripcion: "Destacado en economía y emprendimiento. Hoy es empresario en el sector tecnológico."
            },
            {
                id: 43,
                nombre: "Omar David Moreno Clavijo",
                grado: "11.3",
                especialidad: "Electricidad",
                foto: "https://img.freepik.com/fotos-premium/hombre-circulo-azul-fondo-blanco_1137696-4343.jpg",
                descripcion: "Destacado en economía y emprendimiento. Hoy es empresario en el sector tecnológico."
            },
            {
                id: 44,
                nombre: "Sergio Alexander Bayona Gomez",
                grado: "11.3",
                especialidad: "Electricidad",
                foto: "https://img.freepik.com/fotos-premium/hombre-circulo-azul-fondo-blanco_1137696-4343.jpg",
                descripcion: "Destacado en economía y emprendimiento. Hoy es empresario en el sector tecnológico."
            },
            {
                id: 45,
                nombre: "Cristian Humberto Gonzalez",
                grado: "11.3",
                especialidad: "Electricidad",
                foto: "https://img.freepik.com/fotos-premium/hombre-circulo-azul-fondo-blanco_1137696-4343.jpg",
                descripcion: "Destacado en economía y emprendimiento. Hoy es empresario en el sector tecnológico."
            },
            {
                id: 46,
                nombre: "Ronald Chaparro",
                grado: "11.3",
                especialidad: "Electricidad",
                foto: "https://fda83c514b.cbaul-cdnwnd.com/d7126d3ebd4e5df5fbf159dc3aef9422/200000009-75d1675d18/450/1679705944808.webp?ph=fda83c514b",
                descripcion: "Destacado en economía y emprendimiento. Hoy es empresario en el sector tecnológico."
            },
            {
                id: 47,
                nombre: "Sergio Ivan Millan",
                grado: "11.3",
                especialidad: "Electricidad",
                foto: "https://img.freepik.com/fotos-premium/hombre-circulo-azul-fondo-blanco_1137696-4343.jpg",
                descripcion: "Destacado en economía y emprendimiento. Hoy es empresario en el sector tecnológico."
            },
            {
                id: 48,
                nombre: "Sandra Milena Ardila Vera",
                grado: "11.3",
                especialidad: "Electricidad",
                foto: "https://fda83c514b.cbaul-cdnwnd.com/d7126d3ebd4e5df5fbf159dc3aef9422/200000119-3d3a23d3a4/700/sandra_ardila.webp?ph=fda83c514b",
                descripcion: "Destacado en economía y emprendimiento. Hoy es empresario en el sector tecnológico."
            },
            {
                id: 49,
                nombre: "Idalina Gomez",
                grado: "11.3",
                especialidad: "Electricidad",
                foto: "https://img.freepik.com/fotos-premium/hombre-circulo-azul-fondo-blanco_1137696-4343.jpg",
                descripcion: "Destacado en economía y emprendimiento. Hoy es empresario en el sector tecnológico."
            },
            {
                id: 50,
                nombre: "Viviana",
                grado: "11.3",
                especialidad: "Electricidad",
                foto: "https://img.freepik.com/fotos-premium/hombre-circulo-azul-fondo-blanco_1137696-4343.jpg",
                descripcion: "Destacado en economía y emprendimiento. Hoy es empresario en el sector tecnológico."
            },
            {
                id: 51,
                nombre: "Sandra Aparicio",
                grado: "11.3",
                especialidad: "Electricidad",
                foto: "https://img.freepik.com/fotos-premium/hombre-circulo-azul-fondo-blanco_1137696-4343.jpg",
                descripcion: "Destacado en economía y emprendimiento. Hoy es empresario en el sector tecnológico."
            },
            {
                id: 52,
                nombre: "Ariel Fernández Gualdrón",
                grado: "11.3",
                especialidad: "Electricidad",
                foto: "https://img.freepik.com/fotos-premium/hombre-circulo-azul-fondo-blanco_1137696-4343.jpg",
                descripcion: "Destacado en economía y emprendimiento. Hoy es empresario en el sector tecnológico."
            },
            {
                id: 53,
                nombre: "Mauricio",
                grado: "11.3",
                especialidad: "Electricidad",
                foto: "https://img.freepik.com/fotos-premium/hombre-circulo-azul-fondo-blanco_1137696-4343.jpg",
                descripcion: "Destacado en economía y emprendimiento. Hoy es empresario en el sector tecnológico."
            },
            {
                id: 54,
                nombre: "Nestor",
                grado: "11.3",
                especialidad: "Electricidad",
                foto: "https://img.freepik.com/fotos-premium/hombre-circulo-azul-fondo-blanco_1137696-4343.jpg",
                descripcion: "Destacado en economía y emprendimiento. Hoy es empresario en el sector tecnológico."
            },
            {
                id: 55,
                nombre: "Omar David Perez",
                grado: "11.3",
                especialidad: "Electricidad",
                foto: "https://img.freepik.com/fotos-premium/hombre-circulo-azul-fondo-blanco_1137696-4343.jpg",
                descripcion: "Destacado en economía y emprendimiento. Hoy es empresario en el sector tecnológico."
            },
            {
                id: 56,
                nombre: "Jhosep Miller Augusto Barbosa Diaz",
                grado: "11.3",
                especialidad: "Electricidad",
                foto: "https://fda83c514b.cbaul-cdnwnd.com/d7126d3ebd4e5df5fbf159dc3aef9422/200000069-227eb227ed/450/miller.webp?ph=fda83c514b",
                descripcion: "Destacado en economía y emprendimiento. Hoy es empresario en el sector tecnológico."
            },
            {
                id: 57,
                nombre: "Paola Andrea Rodriguez",
                grado: "11.3",
                especialidad: "Electricidad",
                foto: "https://img.freepik.com/fotos-premium/hombre-circulo-azul-fondo-blanco_1137696-4343.jpg",
                descripcion: "Destacado en economía y emprendimiento. Hoy es empresario en el sector tecnológico."
            },
            {
                id: 58,
                nombre: "Yurani",
                grado: "11.3",
                especialidad: "Electricidad",
                foto: "https://img.freepik.com/fotos-premium/hombre-circulo-azul-fondo-blanco_1137696-4343.jpg",
                descripcion: "Destacado en economía y emprendimiento. Hoy es empresario en el sector tecnológico."
            },
            {
                id: 59,
                nombre: "Jose Julian Gomez Gomez",
                grado: "11.3",
                especialidad: "Electricidad",
                foto: "https://fda83c514b.cbaul-cdnwnd.com/d7126d3ebd4e5df5fbf159dc3aef9422/200000117-e400be400d/700/josejulian.webp?ph=fda83c514b",
                descripcion: "Destacado en economía y emprendimiento. Hoy es empresario en el sector tecnológico."
            },
            {
                id: 60,
                nombre: "Emma Maria Rojas",
                grado: "11.3",
                especialidad: "Electricidad",
                foto: "https://img.freepik.com/fotos-premium/hombre-circulo-azul-fondo-blanco_1137696-4343.jpg",
                descripcion: "Destacado en economía y emprendimiento. Hoy es empresario en el sector tecnológico."
            },
            {
                id: 61,
                nombre: "Jhon Carlos Orejarena Rueda",
                grado: "11.3",
                especialidad: "Electricidad",
                foto: "https://img.freepik.com/fotos-premium/hombre-circulo-azul-fondo-blanco_1137696-4343.jpg",
                descripcion: "Destacado en economía y emprendimiento. Hoy es empresario en el sector tecnológico."
            },
            {
                id: 62,
                nombre: "Oscar Ivan Sierra Corredor",
                grado: "11.5",
                especialidad: "Electricidad",
                foto: "https://fda83c514b.cbaul-cdnwnd.com/d7126d3ebd4e5df5fbf159dc3aef9422/200000077-5517b5517e/700/sierra.webp?ph=fda83c514b",
                descripcion: "Destacado en economía y emprendimiento. Hoy es empresario en el sector tecnológico."
            },
            {
                id: 63,
                nombre: "Alex Julian Estevez Araque",
                grado: "11.5",
                especialidad: "Metalisteria",
                foto: "https://fda83c514b.cbaul-cdnwnd.com/d7126d3ebd4e5df5fbf159dc3aef9422/200000001-26a3226a35/450/1770477575666.webp?ph=fda83c514b",
                descripcion: "Destacado en economía y emprendimiento. Hoy es empresario en el sector tecnológico.",
                Matripuntos: "Matripuntos 450",
            },
            {
                id: 27,
                nombre: "Arnulfo Ferreira Gualdrón",
                grado: "11.5",
                especialidad: "Metalisteria",
                foto: "https://img.freepik.com/fotos-premium/hombre-circulo-azul-fondo-blanco_1137696-4343.jpg",
                descripcion: "Destacado en economía y emprendimiento. Hoy es empresario en el sector tecnológico."
            },
            {
                id: 27,
                nombre: "Cristian Fredy Fiallo Muñoz",
                grado: "11.5",
                especialidad: "Metalisteria",
                foto: "https://fda83c514b.cbaul-cdnwnd.com/d7126d3ebd4e5df5fbf159dc3aef9422/200000027-922bb922bd/700/fialloImage_a6wqxda6wqxda6wq.webp?ph=fda83c514b",
                descripcion: "Destacado en economía y emprendimiento. Hoy es empresario en el sector tecnológico."
            },
            {
                id: 27,
                nombre: "Oscar Rene Forero Torres",
                grado: "11.5",
                especialidad: "Metalisteria",
                foto: "https://img.freepik.com/fotos-premium/hombre-circulo-azul-fondo-blanco_1137696-4343.jpg",
                descripcion: "Destacado en economía y emprendimiento. Hoy es empresario en el sector tecnológico."
            },
            {
                id: 27,
                nombre: "Carlos Augusto Garcia Pineda",
                grado: "11.5",
                especialidad: "Metalisteria",
                foto: "https://fda83c514b.cbaul-cdnwnd.com/d7126d3ebd4e5df5fbf159dc3aef9422/200000029-c9de9c9deb/700/garcia.webp?ph=fda83c514b",
                descripcion: "Destacado en economía y emprendimiento. Hoy es empresario en el sector tecnológico."
            },
            {
                id: 27,
                nombre: "Oscar Mauricio Martinez Aparicio",
                grado: "11.5",
                especialidad: "Metalisteria",
                foto: "https://fda83c514b.cbaul-cdnwnd.com/d7126d3ebd4e5df5fbf159dc3aef9422/200000103-08f4c08f4e/700/tito.webp?ph=fda83c514b",
                descripcion: "Destacado en economía y emprendimiento. Hoy es empresario en el sector tecnológico."
            },
            {
                id: 27,
                nombre: "Roberto José pilonieta",
                grado: "11.5",
                especialidad: "Metalisteria",
                foto: "https://cloudfront-us-east-1.images.arcpublishing.com/prisaradioco/IBQUEW2GHBDX5DQ2QGVUXDW4EM.jpg",
                descripcion: "Destacado en economía y emprendimiento. Hoy es empresario en el sector tecnológico."
            },
            {
                id: 27,
                nombre: "sergio Sarmiento Carreño",
                grado: "11.5",
                especialidad: "Metalisteria",
                foto: "https://img.freepik.com/fotos-premium/hombre-circulo-azul-fondo-blanco_1137696-4343.jpg",
                descripcion: "Destacado en economía y emprendimiento. Hoy es empresario en el sector tecnológico."
            },
            {
                id: 27,
                nombre: "Julian Mauricio Ramirez Sanchez",
                grado: "11.5",
                especialidad: "Metalisteria",
                foto: "https://fda83c514b.cbaul-cdnwnd.com/d7126d3ebd4e5df5fbf159dc3aef9422/200000011-4f7d34f7d5/450/1516941020587.webp?ph=fda83c514b",
                descripcion: "Destacado en economía y emprendimiento. Hoy es empresario en el sector tecnológico."
            },
            {
                id: 27,
                nombre: "Sergio Armando Rodriguez Calderón",
                grado: "11.5",
                especialidad: "Metalisteria",
                foto: "https://fda83c514b.cbaul-cdnwnd.com/d7126d3ebd4e5df5fbf159dc3aef9422/200000071-204cd204cf/700/camioneta.webp?ph=fda83c514b",
                descripcion: "Destacado en economía y emprendimiento. Hoy es empresario en el sector tecnológico."
            },
            {
                id: 27,
                nombre: "Yeison Torres Castillo",
                grado: "11.5",
                especialidad: "Metalisteria",
                foto: "https://img.freepik.com/fotos-premium/hombre-circulo-azul-fondo-blanco_1137696-4343.jpg",
                descripcion: "Destacado en economía y emprendimiento. Hoy es empresario en el sector tecnológico."
            },
            {
                id: 27,
                nombre: "Javier Anaya",
                grado: "11.5",
                especialidad: "Metalisteria",
                foto: "https://img.freepik.com/fotos-premium/hombre-circulo-azul-fondo-blanco_1137696-4343.jpg",
                descripcion: "Destacado en economía y emprendimiento. Hoy es empresario en el sector tecnológico."
            },
            {
                id: 27,
                nombre: "Mary Helen Arguello",
                grado: "11.5",
                especialidad: "Metalisteria",
                foto: "https://img.freepik.com/fotos-premium/hombre-circulo-azul-fondo-blanco_1137696-4343.jpg",
                descripcion: "Destacado en economía y emprendimiento. Hoy es empresario en el sector tecnológico."
            },
            {
                id: 27,
                nombre: "Miguel Ricardo Bonilla",
                grado: "11.5",
                especialidad: "Metalisteria",
                foto: "https://fda83c514b.cbaul-cdnwnd.com/d7126d3ebd4e5df5fbf159dc3aef9422/200000037-3a06a3a06c/700/bonilla.webp?ph=fda83c514b",
                descripcion: "Destacado en economía y emprendimiento. Hoy es empresario en el sector tecnológico."
            },
            {
                id: 27,
                nombre: "Nilson Chaparro Diaz",
                grado: "11.5",
                especialidad: "Metalisteria",
                foto: "https://img.freepik.com/fotos-premium/hombre-circulo-azul-fondo-blanco_1137696-4343.jpg",
                descripcion: "Destacado en economía y emprendimiento. Hoy es empresario en el sector tecnológico."
            },
            {
                id: 27,
                nombre: "Walfran Hernández Diaz",
                grado: "11.5",
                especialidad: "Metalisteria",
                foto: "https://fda83c514b.cbaul-cdnwnd.com/d7126d3ebd4e5df5fbf159dc3aef9422/200000073-1f3611f364/700/walfran.webp?ph=fda83c514b",
                descripcion: "Destacado en economía y emprendimiento. Hoy es empresario en el sector tecnológico."
            },
            {
                id: 27,
                nombre: "Jesus Martinez Uribe",
                grado: "11.5",
                especialidad: "Metalisteria",
                foto: "https://img.freepik.com/fotos-premium/hombre-circulo-azul-fondo-blanco_1137696-4343.jpg",
                descripcion: "Destacado en economía y emprendimiento. Hoy es empresario en el sector tecnológico."
            },
            {
                id: 27,
                nombre: "Alexander Cacho Vargas",
                grado: "11.5",
                especialidad: "Metalisteria",
                foto: "https://img.freepik.com/fotos-premium/hombre-circulo-azul-fondo-blanco_1137696-4343.jpg",
                descripcion: "Destacado en economía y emprendimiento. Hoy es empresario en el sector tecnológico."
            },
            {
                id: 27,
                nombre: "Juan Ferando Blanco",
                grado: "11.5",
                especialidad: "Dibujo",
                foto: "https://img.freepik.com/fotos-premium/hombre-circulo-azul-fondo-blanco_1137696-4343.jpg",
                descripcion: "Destacado en economía y emprendimiento. Hoy es empresario en el sector tecnológico."
            },
            {
                id: 27,
                nombre: "Emilsen Johanna Morales Duarte",
                grado: "11.1",
                especialidad: "Dibujo",
                foto: "https://fda83c514b.cbaul-cdnwnd.com/d7126d3ebd4e5df5fbf159dc3aef9422/200000051-dffa8dffaa/700/emilsen.webp?ph=fda83c514b",
                descripcion: "Destacado en economía y emprendimiento. Hoy es empresario en el sector tecnológico."
            },
            {
                id: 27,
                nombre: "Mary Luz Rodriguez Aguilar ",
                grado: "11.1",
                especialidad: "Dibujo",
                foto: "https://fda83c514b.cbaul-cdnwnd.com/d7126d3ebd4e5df5fbf159dc3aef9422/200000033-c0afec0b00/700/mary.webp?ph=fda83c514b",
                descripcion: "Destacado en economía y emprendimiento. Hoy es empresario en el sector tecnológico.",
                fallecido: true,
            },
            {
                id: 27,
                nombre: "Marcos Ricardo Calderón",
                grado: "11.1",
                especialidad: "Dibujo",
                foto: "https://img.freepik.com/fotos-premium/hombre-circulo-azul-fondo-blanco_1137696-4343.jpg",
                descripcion: "Destacado en economía y emprendimiento. Hoy es empresario en el sector tecnológico."
            },
            {
                id: 27,
                nombre: "Maritza Diaz Ochoa",
                grado: "11.1",
                especialidad: "Dibujo",
                foto: "https://img.freepik.com/fotos-premium/hombre-circulo-azul-fondo-blanco_1137696-4343.jpg",
                descripcion: "Destacado en economía y emprendimiento. Hoy es empresario en el sector tecnológico."
            },
            {
                id: 27,
                nombre: "Miguel Fernando Jaimes Abaunza",
                grado: "11.1",
                especialidad: "Dibujo",
                foto: "https://files.lafm.com.co/assets/public/2021-11/miguel_fernando_jaimes_abaunza_director_de_asesoria_juridica_de_indra_en_colombia.jpg?r=1_1",
                descripcion: "Destacado en economía y emprendimiento. Hoy es empresario en el sector tecnológico."
            },
            {
                id: 27,
                nombre: "Nicolas",
                grado: "11.1",
                especialidad: "Dibujo",
                foto: "https://fda83c514b.cbaul-cdnwnd.com/d7126d3ebd4e5df5fbf159dc3aef9422/200000107-95a5395a55/700/nico.webp?ph=fda83c514b",
                descripcion: "Destacado en economía y emprendimiento. Hoy es empresario en el sector tecnológico."
            },
            {
                id: 27,
                nombre: "Omar Muñoz",
                grado: "11.1",
                especialidad: "Dibujo",
                foto: "https://img.freepik.com/fotos-premium/hombre-circulo-azul-fondo-blanco_1137696-4343.jpg",
                descripcion: "Destacado en economía y emprendimiento. Hoy es empresario en el sector tecnológico."
            },
            {
                id: 27,
                nombre: "Viviana Andrea Rodriguez",
                grado: "11.1",
                especialidad: "Dibujo",
                foto: "https://img.freepik.com/fotos-premium/hombre-circulo-azul-fondo-blanco_1137696-4343.jpg",
                descripcion: "Destacado en economía y emprendimiento. Hoy es empresario en el sector tecnológico."
            },
            {
                id: 27,
                nombre: "Milena Perez",
                grado: "11.1",
                especialidad: "Dibujo",
                foto: "https://fda83c514b.cbaul-cdnwnd.com/d7126d3ebd4e5df5fbf159dc3aef9422/200000075-9882598827/700/milena.webp?ph=fda83c514b",
                descripcion: "Destacado en economía y emprendimiento. Hoy es empresario en el sector tecnológico."
            },
            {
                id: 27,
                nombre: "Nestor Rico",
                grado: "11.1",
                especialidad: "Dibujo",
                foto: "https://img.freepik.com/fotos-premium/hombre-circulo-azul-fondo-blanco_1137696-4343.jpg",
                descripcion: "Destacado en economía y emprendimiento. Hoy es empresario en el sector tecnológico."
            },
            {
                id: 27,
                nombre: "Myriam Suarez",
                grado: "11.1",
                especialidad: "Dibujo",
                foto: "https://fda83c514b.cbaul-cdnwnd.com/d7126d3ebd4e5df5fbf159dc3aef9422/200000079-2509125092/700/myriam.webp?ph=fda83c514b",
                descripcion: "Destacado en economía y emprendimiento. Hoy es empresario en el sector tecnológico."
            },
            {
                id: 27,
                nombre: "Oscar Prada",
                grado: "11.1",
                especialidad: "Dibujo",
                foto: "https://img.freepik.com/fotos-premium/hombre-circulo-azul-fondo-blanco_1137696-4343.jpg",
                descripcion: "Destacado en economía y emprendimiento. Hoy es empresario en el sector tecnológico."
            },
            {
                id: 27,
                nombre: "Jenny Montes",
                grado: "11.1",
                especialidad: "Fundicion",
                foto: "https://img.freepik.com/fotos-premium/hombre-circulo-azul-fondo-blanco_1137696-4343.jpg",
                descripcion: "Destacado en economía y emprendimiento. Hoy es empresario en el sector tecnológico."
            },
            {
                id: 27,
                nombre: "Juan Pablo Lopez Mancilla",
                grado: "11.1",
                especialidad: "Mecanica",
                foto: "https://fda83c514b.cbaul-cdnwnd.com/d7126d3ebd4e5df5fbf159dc3aef9422/200000087-6aab96aaba/700/juanpablo_lopez.webp?ph=fda83c514b",
                descripcion: "Destacado en economía y emprendimiento. Hoy es empresario en el sector tecnológico."
            },
            {
                id: 27,
                nombre: "Rymel Arley Estevez Araque",
                grado: "11.1",
                especialidad: "Mecanica",
                foto: "https://img.freepik.com/fotos-premium/hombre-circulo-azul-fondo-blanco_1137696-4343.jpg",
                descripcion: "Destacado en economía y emprendimiento. Hoy es empresario en el sector tecnológico."
            },
            {
                id: 27,
                nombre: "Jorge Luis Velazco",
                grado: "11.1",
                especialidad: "Mecanica",
                foto: "https://img.freepik.com/fotos-premium/hombre-circulo-azul-fondo-blanco_1137696-4343.jpg",
                descripcion: "Destacado en economía y emprendimiento. Hoy es empresario en el sector tecnológico."
            },
            {
                id: 27,
                nombre: "Juan Carlos Carvajal",
                grado: "11.1",
                especialidad: "Mecanica",
                foto: "https://img.freepik.com/fotos-premium/hombre-circulo-azul-fondo-blanco_1137696-4343.jpg",
                descripcion: "Destacado en economía y emprendimiento. Hoy es empresario en el sector tecnológico."
            },
            {
                id: 27,
                nombre: "Milton Carvajal",
                grado: "11.1",
                especialidad: "Mecanica",
                foto: "https://img.freepik.com/fotos-premium/hombre-circulo-azul-fondo-blanco_1137696-4343.jpg",
                descripcion: "Destacado en economía y emprendimiento. Hoy es empresario en el sector tecnológico."
            },
            {
                id: 27,
                nombre: "Willian Contreras",
                grado: "11.1",
                especialidad: "Mecanica",
                foto: "https://fda83c514b.cbaul-cdnwnd.com/d7126d3ebd4e5df5fbf159dc3aef9422/200000083-8be618be63/700/willian.webp?ph=fda83c514b",
                descripcion: "Destacado en economía y emprendimiento. Hoy es empresario en el sector tecnológico."
            },
            {
                id: 27,
                nombre: "Jesus Uribe",
                grado: "11.1",
                especialidad: "Ebanisteria",
                foto: "https://fda83c514b.cbaul-cdnwnd.com/d7126d3ebd4e5df5fbf159dc3aef9422/200000031-f1df2f1df4/700/chejo.webp?ph=fda83c514b",
                descripcion: "Destacado en economía y emprendimiento. Hoy es empresario en el sector tecnológico."
            },
            {
                id: 27,
                nombre: "Cristian Mejía",
                grado: "11.1",
                especialidad: "Ebanisteria",
                foto: "https://fda83c514b.cbaul-cdnwnd.com/d7126d3ebd4e5df5fbf159dc3aef9422/200000093-9406794069/700/cristian_mejia.webp?ph=fda83c514b",
                descripcion: "Destacado en economía y emprendimiento. Hoy es empresario en el sector tecnológico."
            },
            {
                id: 27,
                nombre: "Sergio Ivan Amaya Murillo",
                grado: "11.1",
                especialidad: "Mecanica",
                foto: "https://www.vanguardia.com/resizer/v2/366ND7BWFVF2LOCTQ5TPV2U4DY.jpg?auth=bcf8648ca7c660003bccf91bf03d9d56bf1abbad5ac32ccf9a2f69712c37ea56&smart=true&width=1200&height=630&quality=70",
                descripcion: "Destacado en economía y emprendimiento. Hoy es empresario en el sector tecnológico.",
                fallecido: true,
            },
            {
                id: 27,
                nombre: "Claudia Milena Morales",
                grado: "11.1",
                especialidad: "Fundicion",
                foto: "https://fda83c514b.cbaul-cdnwnd.com/d7126d3ebd4e5df5fbf159dc3aef9422/200000039-c1741c1742/700/claudia.webp?ph=fda83c514b",
                descripcion: "Destacado en economía y emprendimiento. Hoy es empresario en el sector tecnológico.",
                
            },
            {
                id: 27,
                nombre: "Sergio Parra",
                grado: "11.1",
                especialidad: "Fundicion",
                foto: "https://fda83c514b.cbaul-cdnwnd.com/d7126d3ebd4e5df5fbf159dc3aef9422/200000085-e9b04e9b06/700/sergio_parra.webp?ph=fda83c514b",
                descripcion: "Destacado en economía y emprendimiento. Hoy es empresario en el sector tecnológico.",
                
            },
            {
                id: 27,
                nombre: "Josue Aparicio",
                grado: "11.1",
                especialidad: "Fundicion",
                foto: "https://fda83c514b.cbaul-cdnwnd.com/d7126d3ebd4e5df5fbf159dc3aef9422/200000105-6c6c36c6c5/700/josue.webp?ph=fda83c514b",
                descripcion: "Destacado en economía y emprendimiento. Hoy es empresario en el sector tecnológico.",
                
            },
            {
                id: 27,
                nombre: "Eric Gutierrez",
                grado: "11.1",
                especialidad: "Fundicion",
                foto: "https://fda83c514b.cbaul-cdnwnd.com/d7126d3ebd4e5df5fbf159dc3aef9422/200000041-f2066f2068/eric.webp?ph=fda83c514b",
                descripcion: "Destacado en economía y emprendimiento. Hoy es empresario en el sector tecnológico.",
                
            },
            {
                id: 27,
                nombre: "Astrid Juliana Mateus",
                grado: "11.1",
                especialidad: "Clasicos",
                foto: "https://fda83c514b.cbaul-cdnwnd.com/d7126d3ebd4e5df5fbf159dc3aef9422/200000043-b2800b2803/700/astrid.webp?ph=fda83c514b",
                descripcion: "Destacado en economía y emprendimiento. Hoy es empresario en el sector tecnológico.",
                
            },
            {
                id: 27,
                nombre: "Robinzon Alexander Florez Lopez",
                grado: "11.1",
                especialidad: "Mecanica",
                foto: "https://fda83c514b.cbaul-cdnwnd.com/d7126d3ebd4e5df5fbf159dc3aef9422/200000045-c8affc8b01/700/robinson.webp?ph=fda83c514b",
                descripcion: "Destacado en economía y emprendimiento. Hoy es empresario en el sector tecnológico.",
                
            },
            {
                id: 27,
                nombre: "Alvaro Triana Muñoz",
                grado: "11.1",
                especialidad: "Mecanica",
                foto: "luto.png",
                descripcion: "Destacado en economía y emprendimiento. Hoy es empresario en el sector tecnológico.",
                
            },
            {
                id: 27,
                nombre: "Juan Carlos Gonzalez",
                grado: "11.1",
                especialidad: "Mecanica",
                foto: "https://fda83c514b.cbaul-cdnwnd.com/d7126d3ebd4e5df5fbf159dc3aef9422/200000049-d1c7bd1c7c/700/223899432_158520489706700_1319952963911670563_n.webp?ph=fda83c514b",
                descripcion: "Destacado en economía y emprendimiento. Hoy es empresario en el sector tecnológico.",
                
            },
            {
                id: 27,
                nombre: "Diana Carolina Duran Ayala",
                grado: "11.1",
                especialidad: "Fundicion",
                foto: "https://fda83c514b.cbaul-cdnwnd.com/d7126d3ebd4e5df5fbf159dc3aef9422/200000089-8e0688e06a/700/diana_duran.webp?ph=fda83c514b",
                descripcion: "Destacado en economía y emprendimiento. Hoy es empresario en el sector tecnológico.",
                
            },
            {
                id: 27,
                nombre: "Yuranny Mendez",
                grado: "11.1",
                especialidad: "Fundicion",
                foto: "https://fda83c514b.cbaul-cdnwnd.com/d7126d3ebd4e5df5fbf159dc3aef9422/200000091-17ffc17ffd/700/yaranymendez.webp?ph=fda83c514b",
                descripcion: "Destacado en economía y emprendimiento. Hoy es empresario en el sector tecnológico.",
                
            },
            {
                id: 27,
                nombre: "Jairo Rincon",
                grado: "11.1",
                especialidad: "Fundicion",
                foto: "https://scontent.feoh2-1.fna.fbcdn.net/v/t39.30808-6/239433046_10159363585368290_1866587072667974667_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=VwD3U6dWDewQ7kNvwF_E8My&_nc_oc=Adoyio-REFa2WlqS_VM-IESd3MJMz2D82iOyPYvPJQxo361oENZejgD2D0JWWHSJ2Wg&_nc_zt=23&_nc_ht=scontent.feoh2-1.fna&_nc_gid=9Gl2MLbcP-izwLuM-WeHkQ&_nc_ss=7b289&oh=00_Af1_mQ1foJKR4gxVjb9t0SkbSsclau8jQqs-8hNW1-eJtw&oe=69F3D11D",
                descripcion: "Destacado en economía y emprendimiento. Hoy es empresario en el sector tecnológico.",
                
            },
            {
                id: 27,
                nombre: "Rocio Serrano",
                grado: "11.1",
                especialidad: "Fundicion",
                foto: "https://img.freepik.com/fotos-premium/hombre-circulo-azul-fondo-blanco_1137696-4343.jpg",
                descripcion: "Destacado en economía y emprendimiento. Hoy es empresario en el sector tecnológico.",
                
            },
            {
                id: 27,
                nombre: "Jorge Luis Corredor Aguilar",
                grado: "11.1",
                especialidad: "Fundicion",
                foto: "https://fda83c514b.cbaul-cdnwnd.com/d7126d3ebd4e5df5fbf159dc3aef9422/200000095-6487d6487e/700/jorge_corredor.webp?ph=fda83c514b",
                descripcion: "Destacado en economía y emprendimiento. Hoy es empresario en el sector tecnológico.",
                
            },
            {
                id: 27,
                nombre: "Maria Marlene Martinez",
                grado: "11.1",
                especialidad: "Fundicion",
                foto: "https://img.freepik.com/fotos-premium/hombre-circulo-azul-fondo-blanco_1137696-4343.jpg",
                descripcion: "Destacado en economía y emprendimiento. Hoy es empresario en el sector tecnológico.",
                
            },
            {
                id: 27,
                nombre: "Nelson Ayala",
                grado: "11.1",
                especialidad: "Mecanica",
                foto: "https://fda83c514b.cbaul-cdnwnd.com/d7126d3ebd4e5df5fbf159dc3aef9422/200000097-16e1a16e1c/450/1762082971836.webp?ph=fda83c514b",
                descripcion: "Destacado en economía y emprendimiento. Hoy es empresario en el sector tecnológico.",
                
            },
            {
                id: 27,
                nombre: "Jhon Norberto Lopez",
                grado: "11.1",
                especialidad: "Mecanica",
                foto: "https://fda83c514b.cbaul-cdnwnd.com/d7126d3ebd4e5df5fbf159dc3aef9422/200000099-0bef50bef7/450/jhon_lopez.webp?ph=fda83c514b",
                descripcion: "Destacado en economía y emprendimiento. Hoy es empresario en el sector tecnológico.",
                
            },
            {
                id: 27,
                nombre: "Juan Pablo Pamplona",
                grado: "11.1",
                especialidad: "Mecanica",
                foto: "https://img.freepik.com/fotos-premium/hombre-circulo-azul-fondo-blanco_1137696-4343.jpg",
                descripcion: "Destacado en economía y emprendimiento. Hoy es empresario en el sector tecnológico.",
                
            },
            {
                id: 27,
                nombre: "Sergio Andres Rodriguez Chaparro",
                grado: "11.1",
                especialidad: "Mecanica",
                foto: "https://img.freepik.com/fotos-premium/hombre-circulo-azul-fondo-blanco_1137696-4343.jpg",
                descripcion: "Destacado en economía y emprendimiento. Hoy es empresario en el sector tecnológico.",
                
            },
            {
                id: 27,
                nombre: "Cristian",
                grado: "11.1",
                especialidad: "Mecanica",
                foto: "https://img.freepik.com/fotos-premium/hombre-circulo-azul-fondo-blanco_1137696-4343.jpg",
                descripcion: "Destacado en economía y emprendimiento. Hoy es empresario en el sector tecnológico.",
                
            },
            {
                id: 27,
                nombre: "Omar Vesga",
                grado: "11.1",
                especialidad: "",
                foto: "https://img.freepik.com/fotos-premium/hombre-circulo-azul-fondo-blanco_1137696-4343.jpg",
                descripcion: "Destacado en economía y emprendimiento. Hoy es empresario en el sector tecnológico.",
                
            },
            {
                id: 27,
                nombre: "Carlos Augusto Calderon",
                grado: "11.1",
                especialidad: "Clasicos",
                foto: "https://img.freepik.com/fotos-premium/hombre-circulo-azul-fondo-blanco_1137696-4343.jpg",
                descripcion: "Destacado en economía y emprendimiento. Hoy es empresario en el sector tecnológico.",
                
            },
            {
                id: 27,
                nombre: "Jose Cupertino Ruiz Vargas",
                grado: "11.1",
                especialidad: "Clasicos",
                foto: "https://fda83c514b.cbaul-cdnwnd.com/d7126d3ebd4e5df5fbf159dc3aef9422/200000101-9cc9b9cc9d/450/cupertino.webp?ph=fda83c514b",
                descripcion: "Destacado en economía y emprendimiento. Hoy es empresario en el sector tecnológico.",
                
            },
            {
                id: 27,
                nombre: "Reinel Ortiz",
                grado: "11.1",
                especialidad: "Ebanisteria",
                foto: "https://img.freepik.com/fotos-premium/hombre-circulo-azul-fondo-blanco_1137696-4343.jpg",
                descripcion: "Destacado en economía y emprendimiento. Hoy es empresario en el sector tecnológico.",
                
            },
            {
                id: 27,
                nombre: "Sergio Parra",
                grado: "11.1",
                especialidad: "Fundicion",
                foto: "https://img.freepik.com/fotos-premium/hombre-circulo-azul-fondo-blanco_1137696-4343.jpg",
                descripcion: "Destacado en economía y emprendimiento. Hoy es empresario en el sector tecnológico.",
                
            },
            {
                id: 27,
                nombre: "Arnulfo",
                grado: "11.1",
                especialidad: "Ebanisteria",
                foto: "https://img.freepik.com/fotos-premium/hombre-circulo-azul-fondo-blanco_1137696-4343.jpg",
                descripcion: "Destacado en economía y emprendimiento. Hoy es empresario en el sector tecnológico.",
                
            },
            {
                id: 27,
                nombre: "Andrea Reyes",
                grado: "11.1",
                especialidad: "",
                foto: "https://fda83c514b.cbaul-cdnwnd.com/d7126d3ebd4e5df5fbf159dc3aef9422/200000109-43a3d43a3f/700/andrea.webp?ph=fda83c514b",
                descripcion: "Destacado en economía y emprendimiento. Hoy es empresario en el sector tecnológico.",
                
            },
            {
                id: 27,
                nombre: "Julian Ruiz",
                grado: "11.1",
                especialidad: "Ebanisteria",
                foto: "https://img.freepik.com/fotos-premium/hombre-circulo-azul-fondo-blanco_1137696-4343.jpg",
                descripcion: "Destacado en economía y emprendimiento. Hoy es empresario en el sector tecnológico.",
                
            },
            {
                id: 27,
                nombre: "Deysi Parada",
                grado: "11.1",
                especialidad: "",
                foto: "https://fda83c514b.cbaul-cdnwnd.com/d7126d3ebd4e5df5fbf159dc3aef9422/200000111-4d3d54d3d7/700/deysi_parada.webp?ph=fda83c514b",
                descripcion: "Destacado en economía y emprendimiento. Hoy es empresario en el sector tecnológico.",
                
            },
            {
                id: 27,
                nombre: "Lina",
                grado: "11.1",
                especialidad: "",
                foto: "https://fda83c514b.cbaul-cdnwnd.com/d7126d3ebd4e5df5fbf159dc3aef9422/200000113-cc752cc754/700/lina.webp?ph=fda83c514b",
                descripcion: "Destacado en economía y emprendimiento. Hoy es empresario en el sector tecnológico.",
                
            },
            {
                id: 27,
                nombre: "Jhoana",
                grado: "11.1",
                especialidad: "",
                foto: "https://fda83c514b.cbaul-cdnwnd.com/d7126d3ebd4e5df5fbf159dc3aef9422/200000115-a6057a605a/700/jhoana.webp?ph=fda83c514b",
                descripcion: "Destacado en economía y emprendimiento. Hoy es empresario en el sector tecnológico.",
                
            },
            {
                id: 27,
                nombre: "",
                grado: "11.1",
                especialidad: "Fundicion",
                foto: "",
                descripcion: "Destacado en economía y emprendimiento. Hoy es empresario en el sector tecnológico.",
                
            },
            {
                id: 27,
                nombre: "",
                grado: "11.1",
                especialidad: "Fundicion",
                foto: "",
                descripcion: "Destacado en economía y emprendimiento. Hoy es empresario en el sector tecnológico.",
                
            },
            {
                id: 27,
                nombre: "",
                grado: "11.1",
                especialidad: "Fundicion",
                foto: "",
                descripcion: "Destacado en economía y emprendimiento. Hoy es empresario en el sector tecnológico.",
                
            },
            {
                id: 27,
                nombre: "",
                grado: "11.1",
                especialidad: "Fundicion",
                foto: "",
                descripcion: "Destacado en economía y emprendimiento. Hoy es empresario en el sector tecnológico.",
                
            },
            {
                id: 27,
                nombre: "",
                grado: "11.1",
                especialidad: "Fundicion",
                foto: "",
                descripcion: "Destacado en economía y emprendimiento. Hoy es empresario en el sector tecnológico.",
                
            },
        ];

        // Datos galería
        const galeriaFotos = [
            {
                id: 1,
                titulo: "Especialidad de Sistemas. Imagen proporcionada por (Sandra Milena Moncada)",
                imagen: "sistemas.jpg"
            },
            {
                id: 2,
                titulo: "Especialidad de Sistemas.",
                imagen: "sistemas2.jpeg"
            },
            {
                id: 3,
                titulo: "Comparsa",
                imagen: "comparsa.jpg"
            },
            {
                id: 4,
                titulo: "Grado",
                imagen: "grado.jpeg"
            },
            {
                id: 5,
                titulo: "Grado",
                imagen: "1.jpg"
            },
            {
                id: 6,
                titulo: "Mosaico Prom 2000",
                imagen: "mosaico.jpg"
            },
            {
                id: 7,
                titulo: "Metalisteria",
                imagen: "metalisteria.jpeg"
            },
            {
                id: 8,
                titulo: "Metalisteria 2010",
                imagen: "Julian.jpg"
            },
            {
                id: 9,
                titulo: "Reunión Metalisteria 2010",
                imagen: "reunion_meta.jpg"
            },
            {
                id: 10,
                titulo: "Reunión 2025",
                imagen: "2.jpeg"
            },
           {
                id: 11,
                titulo: "Reunión 2025",
                imagen: "3.jpeg"
            },
         {
                id: 12,
                titulo: "Reunión 2025",
                imagen: "4.jpeg"
            },
         {
                id: 13,
                titulo: "Reunión 2025",
                imagen: "5.jpeg"
            },
         {
                id: 14,
                titulo: "Reunión 2025",
                imagen: "6.jpeg"
            },
         {
                id: 15,
                titulo: "Reunión 2025",
                imagen: "7.jpeg"
            },
         {
                id: 16,
                titulo: "Reunión 2025",
                imagen: "8.jpeg"
            },
         {
                id: 17,
                titulo: "Reunión 2025",
                imagen: "11.jpeg"
            },
         {
                id: 18,
                titulo: "Reunión 2025",
                imagen: "10.jpeg"
            },
         {
                id: 19,
                titulo: "Reunión 2025",
                imagen: "12.jpeg"
            },
         {
                id: 19,
                titulo: "Reunión 2010",
                imagen: "reunion.jpg"
            },
        ];

        // Variables para los filtros activos
        let filtroGrado = 'todos';
        let filtroEspecialidad = 'todos';

        // Función para mostrar estudiantes
        function mostrarEstudiantes() {
            const container = document.getElementById('estudiantes-container');
            container.innerHTML = '';

            const estudiantesFiltrados = estudiantes.filter(est => {
                const coincideGrado = filtroGrado === 'todos' || est.grado === filtroGrado;
                const coincideEspecialidad = filtroEspecialidad === 'todos' || est.especialidad === filtroEspecialidad;
                return coincideGrado && coincideEspecialidad;
            });

            // Actualizar contador
            document.getElementById('contador-estudiantes').textContent = estudiantesFiltrados.length;

            if (estudiantesFiltrados.length === 0) {
                container.innerHTML = `
                    <div class="no-results">
                        <i class="fas fa-search"></i>
                        <h3>No se encontraron estudiantes</h3>
                        <p>No hay egresados que coincidan con los filtros seleccionados. Intenta con otros criterios de búsqueda.</p>
                    </div>
                `;
                return;
            }

           estudiantesFiltrados.forEach(estudiante => {
                const card = document.createElement('div');

                card.className = 'estudiante-card';

                // estudiante fallecido
                if (estudiante.fallecido) {
                    card.classList.add('fallecido');
                }

                card.innerHTML = `
                    <img src="${estudiante.foto}" alt="${estudiante.nombre}" class="estudiante-img">
                    <div class="estudiante-info">
                        <h3 class="estudiante-nombre">${estudiante.nombre}</h3>
                        <div class="estudiante-meta">
                            <span class="estudiante-grado"><i class="fas fa-users"></i> Grado ${estudiante.grado}</span>
                            <span class="estudiante-especialidad"><i class="fas fa-graduation-cap"></i> ${estudiante.especialidad}</span>
                        </div>
                        <p class="estudiante-descripcion">${estudiante.descripcion}</p>
                        <p class="estudiante-descripcion">${estudiante.Matripuntos}</p>
                    </div>
                `;

                container.appendChild(card);
            });
        }

    // ===============================
    // FUNCIÓN GALERÍA
    // ===============================
    function mostrarGaleria() {
        const container = document.getElementById('galeria-container');
        container.innerHTML = '';

        // 🔥 USAR EL ARRAY GLOBAL (NO REDECLARARLO)
        galeriaFotos.forEach(foto => {
            const item = document.createElement('div');
            item.className = 'galeria-item';

            item.innerHTML = `
                <a href="${foto.imagen}" target="_blank" rel="noopener noreferrer">
                    <img src="${foto.imagen}" alt="${foto.titulo}" class="galeria-img" loading="lazy">
                    <div class="galeria-overlay">
                        <div class="galeria-title">${foto.titulo}</div>
                        <div class="galeria-desc">Ver detalles</div>
                    </div>
                </a>
            `;

            container.appendChild(item);
        });
    }

        // Función para cambiar sección
        function cambiarSeccion(seccion) {
            // Ocultar todas las secciones
            document.getElementById('estudiantes-section').style.display = 'none';
            document.getElementById('galeria-section').style.display = 'none';
            
            // Mostrar la sección seleccionada
            document.getElementById(`${seccion}-section`).style.display = 'block';
            
            // Actualizar navegación activa
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector(`[data-section="${seccion}"]`).classList.add('active');
            
            // Si es la galería, cargar las fotos
            if (seccion === 'galeria') {
                mostrarGaleria();
            }
        }

        // Inicializar la página
        document.addEventListener('DOMContentLoaded', () => {
            mostrarEstudiantes();

            // Configurar los botones de filtro
            const botonesFiltro = document.querySelectorAll('.filtro-btn');
            botonesFiltro.forEach(boton => {
                boton.addEventListener('click', () => {
                    const tipoFiltro = boton.getAttribute('data-filtro');
                    const valor = boton.getAttribute('data-valor');
                    
                    // Remover clase active de todos los botones del mismo tipo
                    document.querySelectorAll(`[data-filtro="${tipoFiltro}"]`).forEach(btn => {
                        btn.classList.remove('active');
                    });
                    
                    // Agregar clase active al botón clickeado
                    boton.classList.add('active');
                    
                    // Actualizar filtros activos
                    if (tipoFiltro === 'grado') {
                        filtroGrado = valor;
                    } else if (tipoFiltro === 'especialidad') {
                        filtroEspecialidad = valor;
                    }
                    
                    // Filtrar estudiantes
                    mostrarEstudiantes();
                });
            });

            // Configurar navegación entre secciones
            document.querySelectorAll('.nav-link').forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    const seccion = this.getAttribute('data-section');
                    cambiarSeccion(seccion);
                });
            });

             // ==========  ==========
            // Mostrar SOLO la sección de estudiantes al cargar la página
            cambiarSeccion('estudiantes');
            // ======================================
        });
