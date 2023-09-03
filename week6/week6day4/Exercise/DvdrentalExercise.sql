SELECT * FROM items
ORDER BY price;

SELECT * FROM items
WHERE price >= 80
ORDER BY price DESC;

SELECT first_name, last_name
FROM customers
ORDER BY first_name
LIMIT 3;

SELECT last_name
FROM customers
ORDER BY last_name DESC;

/* DVRENTAL DATABASE */

SELECT * FROM customer;

SELECT first_name || ' ' || last_name AS full_name FROM customer;

SELECT DISTINCT create_date FROM customer;

SELECT * FROM customer
ORDER BY first_name DESC;

SELECT film_id, title, description, release_year, rental_rate
FROM film
ORDER BY rental_rate;

SELECT a.address, a.phone
FROM customer c
JOIN address a ON c.address_id = a.address_id
JOIN city ct ON a.city_id = ct.city_id
JOIN country cy ON ct.country_id = cy.country_id
WHERE cy.country = 'United States' AND ct.city = 'Texas';

SELECT * FROM film
WHERE film_id IN (15, 150);

SELECT film_id, title, description, length, rental_rate
FROM film
WHERE title = 'UrFavoriteMovie';

SELECT film_id, title, description, length, rental_rate
FROM film
WHERE title LIKE 'UrFavoriteMovie%';

SELECT film_id, title, description, length, rental_rate
FROM film
ORDER BY rental_rate
LIMIT 10;

SELECT film_id, title, description, length, rental_rate
FROM film
WHERE film_id > (SELECT MAX(film_id) FROM film WHERE rental_rate = (SELECT MIN(rental_rate) FROM film))
ORDER BY rental_rate
LIMIT 10;

SELECT c.first_name, c.last_name, p.amount, p.payment_date
FROM customer c
JOIN payment p ON c.customer_id = p.customer_id
ORDER BY c.customer_id;

SELECT film_id, title
FROM film
WHERE film_id NOT IN (SELECT DISTINCT film_id FROM inventory);

SELECT city, country
FROM city
JOIN country ON city.country_id = country.country_id;

SELECT c.customer_id, c.first_name, c.last_name, p.amount, p.payment_date
FROM customer c
JOIN payment p ON c.customer_id = p.customer_id
ORDER BY p.staff_id;


