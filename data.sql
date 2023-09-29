CREATE TABLE museum(
    id VARCHAR(255) PRIMARY KEY,
	  "name" VARCHAR(255),
      city VARCHAR(255),
      country VARCHAR(255),
	  image_url VARCHAR(255),
      wiki_url VARCHAR(255),
      website VARCHAR(255),
      description TEXT,
	to_delete integer
);

CREATE TYPE gender AS ENUM ('male', 'female', 'other');

CREATE TABLE artist(
    id VARCHAR(255) PRIMARY KEY,
	  first_name VARCHAR(255),
	  last_name VARCHAR(255),
	  known_as VARCHAR(255),
	  born_on INTEGER,
	  died_on INTEGER,
      gender ENUM('male', 'female', 'other'),
	  placeOfBirth VARCHAR(255),
	  placeOfDeath VARCHAR(255),
      nationality VARCHAR(255),  
      wiki_url VARCHAR(255),
	  image_url VARCHAR(255),
      bio TEXT,
      notes TEXT
);


INSERT INTO artist (id, first_name, last_name, born_on, died_on, gender, 
placeOfBirth, placeOfDeath, nationality, wiki_url, image_url)
VALUES ('5fc5df31-620d-43f7-b89a-326a3638d1a7', 'Frida','Kahlo', 1907, 1954, 'female',
'Mexico City', 'Mexico City', 'Mexican', 'https://en.wikipedia.org/wiki/Frida_Kahlo', 
'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Frida_Kahlo%2C_by_Guillermo_Kahlo.jpg/160px-Frida_Kahlo%2C_by_Guillermo_Kahlo.jpg'
), 
('b010be06-a5da-4502-9de1-632bc484769a', 'Diego','Velasquez', 1599, 1660, 'male',
'Seville', 'Madrid', 'Spanish', 'https://en.wikipedia.org/wiki/Diego_Vel%C3%A1zquez', 
'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Diego_Vel%C3%A1zquez_Autorretrato_45_x_38_cm_-_Colecci%C3%B3n_Real_Academia_de_Bellas_Artes_de_San_Carlos_-_Museo_de_Bellas_Artes_de_Valencia.jpg/203px-Diego_Vel%C3%A1zquez_Autorretrato_45_x_38_cm_-_Colecci%C3%B3n_Real_Academia_de_Bellas_Artes_de_San_Carlos_-_Museo_de_Bellas_Artes_de_Valencia.jpg'
);					






[
{
"id": "e74764a2-1176-4e3e-b30a-9e5ad2de279d",
"first_name": "Édouard",
"last_name": "Manet",
"known_as": null,
"born_on": 1832,
"died_on": 1883,
"gender": "male",
"place_of_birth": "Paris",
"place_of_death": "Paris",
"nationality": "French",
"wiki_url": "https://en.wikipedia.org/wiki/%C3%89douard_Manet",
"image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/%C3%89douard_Manet%2C_en_buste%2C_de_face_-_Nadar.jpg/180px-%C3%89douard_Manet%2C_en_buste%2C_de_face_-_Nadar.jpg",
"bio": "Édouard Manet was a French modernist painter. He was one of the first 19th-century artists to paint modern life, as well as a pivotal figure in the transition from Realism to Impressionism. Born into an upper-class household with strong political connections, Manet rejected the naval career originally envisioned for him; he became engrossed in the world of painting. His early masterworks, The Luncheon on the Grass (Le déjeuner sur l herbe) and Olympia, both 1863, caused great controversy and served as rallying points for the young painters who would create Impressionism. Today, these are considered watershed paintings that mark the start of modern art. The last 20 years of Manet s life saw him form bonds with other great artists of the time; he developed his own simple and direct style that would be heralded as innovative and serve as a major influence for future painters.",
"notes": null
},
{
"id": "5fc5df31-620d-43f7-b89a-326a3638d1a7",
"first_name": "Frida",
"last_name": "Kahlo",
"known_as": null,
"born_on": 1907,
"died_on": 1954,
"gender": "female",
"place_of_birth": "Mexico City",
"place_of_death": "Mexico City",
"nationality": "Mexican",
"wiki_url": "https://en.wikipedia.org/wiki/Frida_Kahlo",
"image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Frida_Kahlo%2C_by_Guillermo_Kahlo.jpg/160px-Frida_Kahlo%2C_by_Guillermo_Kahlo.jpg",
"bio": null,
"notes": null
},
{
"id": "b010be06-a5da-4502-9de1-632bc484769a",
"first_name": "Diego",
"last_name": "Velasquez",
"known_as": null,
"born_on": 1599,
"died_on": 1660,
"gender": "male",
"place_of_birth": "Seville",
"place_of_death": "Madrid",
"nationality": "Spanish",
"wiki_url": "https://en.wikipedia.org/wiki/Diego_Vel%C3%A1zquez",
"image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Diego_Vel%C3%A1zquez_Autorretrato_45_x_38_cm_-_Colecci%C3%B3n_Real_Academia_de_Bellas_Artes_de_San_Carlos_-_Museo_de_Bellas_Artes_de_Valencia.jpg/203px-Diego_Vel%C3%A1zquez_Autorretrato_45_x_38_cm_-_Colecci%C3%B3n_Real_Academia_de_Bellas_Artes_de_San_Carlos_-_Museo_de_Bellas_Artes_de_Valencia.jpg",
"bio": null,
"notes": null
},
{
"id": "b9144fa3-68a9-4685-a465-6529ae555ec4",
"first_name": "Michelangelo Merisi",
"last_name": "da Caravaggio",
"known_as": "Caravaggio",
"born_on": 1571,
"died_on": 1610,
"gender": "male",
"place_of_birth": "Milan",
"place_of_death": "Porto Ercole",
"nationality": "Italian",
"wiki_url": "https://en.wikipedia.org/wiki/Caravaggio",
"image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Bild-Ottavio_Leoni%2C_Caravaggio.jpg/172px-Bild-Ottavio_Leoni%2C_Caravaggio.jpg",
"bio": "Caravaggio was an Italian Baroque painter who is renowned for his dramatic use of chiaroscuro, which refers to the dramatic interplay of light and dark in his paintings. He was born in Milan, Italy, and was trained in painting in the Lombardy region. Caravaggio was known for his bold and often controversial paintings, which often depicted religious subjects. He had a unique style of painting that emphasized realism and naturalism, which was in contrast to the idealized style that was popular at the time. Caravaggio's life was marked by controversy and scandal, including several run-ins with the law. He fled Rome in 1606 after killing a man in a street fight, and spent the rest of his life on the run, living in various cities throughout Italy. Despite his tumultuous life, Caravaggio produced some of the most celebrated works of the Baroque period, including 'The Calling of Saint Matthew,' 'The Crucifixion of Saint Peter,' and 'The Conversion of Saint Paul.' His use of chiaroscuro and naturalism greatly influenced the development of Baroque painting in Italy and beyond, and his legacy continues to inspire artists today.",
"notes": "About 68 confirmed paintings..."
},
{
"id": "bd5065c5-1b9c-4598-a149-e1812d385f0e",
"first_name": "Barbara",
"last_name": "Krueger",
"known_as": "",
"born_on": 1945,
"died_on": null,
"gender": "female",
"place_of_birth": "Newark, NJ",
"place_of_death": null,
"nationality": "American",
"wiki_url": "https://en.wikipedia.org/wiki/Barbara_Kruger",
"image_url": "https://www.thebroad.org/sites/default/files/styles/artis_bio_page-300px_scale/public/images/barbara_kruger.png?itok=Vlu13xYU",
"bio": "",
"notes": ""
},
{
"id": "b411cd2c-7de8-462b-87a1-1b2b5d3e18e9",
"first_name": "René François Ghislain",
"last_name": "Magritte",
"known_as": "René Magritte",
"born_on": 1898,
"died_on": 1967,
"gender": "male",
"place_of_birth": "Lessines",
"place_of_death": "Brussels",
"nationality": "Belgian",
"wiki_url": "https://en.wikipedia.org/wiki/Ren%C3%A9_Magritte",
"image_url": "https://upload.wikimedia.org/wikipedia/en/9/92/Wolleh_magritte.jpg",
"bio": "René Magritte is known for his depictions of familiar objects in unfamiliar, unexpected contexts, which often provoke questions about the nature and boundaries of reality and representation. His imagery has influenced pop art, minimalist art, and conceptual art.",
"notes": ""
},
{
"id": "666c6038-f77d-4bec-a033-53c8682d7d2d",
"first_name": "BOB",
"last_name": "MALE",
"known_as": "BLABLABLA",
"born_on": 2002,
"died_on": 2009,
"gender": null,
"place_of_birth": "dsvsdv",
"place_of_death": "",
"nationality": "German",
"wiki_url": "",
"image_url": "",
"bio": "skjbsjbv lks lkjs lvg lskjg vldgf kjvhdgfl jgv df",
"notes": ""
}
]