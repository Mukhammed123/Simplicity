CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    password VARCHAR(255),
    mail VARCHAR(255),
)

INSERT INTO users (id, name, password, mail) VALUES (1, 'Mukhammed', 'Musa', 'muhammedmusaaa@gmail.com');