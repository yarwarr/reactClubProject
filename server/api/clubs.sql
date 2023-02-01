DROP table if EXISTS clubs;
DROP table if EXISTS people;
CREATE TABLE clubs (
    id   SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(30),
    city varchar(30) not null,
    genre varchar(30) not null,
    max int not null,
    min int not null,
    current int not null DEFAULT 0

);


INSERT INTO clubs(name, city, genre, max, min) VALUES ('Club Arcane', 'Albany', 'Rap', 100, 70);	
INSERT INTO clubs(name, city, genre, max, min) VALUES ('Club Underground', 'Rochester', 'Hip-Hop', 50, 30);
INSERT INTO clubs(name, city, genre, max, min) VALUES ('Club Soda', 'Montreal', 'Rock', 20, 12);
INSERT INTO clubs(name, city, genre, max, min) VALUES ('Club Paradisio', 'Buffalo', 'Pop', 52, 32);



