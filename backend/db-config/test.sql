CREATE TABLE users(
    user_id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    password VARCHAR(255),
    mail VARCHAR(255)
)

INSERT INTO users (user_id, name, password, mail) VALUES (1, 'Mukhammed', 'Musa', 'muhammedmusaaa@gmail.com');

CREATE TABLE services (
    service_id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    rate DECIMAL,
    info VARCHAR(255),
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES users (user_id)
);

INSERT INTO services (service_id, name, rate, info, user_id) VALUES (1, 'taxi', 4.5, 'scooter', 1);