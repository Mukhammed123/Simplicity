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
    info VARCHAR(255),
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES users (user_id)
);

INSERT INTO services (service_id, name, info, user_id) VALUES (1, 'taxi', 'scooter', 1);

CREATE TABLE rates (
    rate_id SERIAL PRIMARY KEY, 
    service_id INT,
    user_id INT,
    rate DECIMAL,
    FOREIGN KEY (user_id) REFERENCES users (user_id),
    FOREIGN KEY (service_id) REFERENCES services (service_id)
);

INSERT INTO rates (rate_id, service_id, user_id, rate) VALUES (1, 1, 1, 5);