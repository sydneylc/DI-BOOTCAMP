SELECT * FROM public.film_actor
ORDER BY actor_id ASC, film_id ASC 

SELECT MAX(actor_id) AS MaxActor FROM film_actor
/* THE LARGEST ACTOR VALUE IT RETURNED WAS 200
BUT REALLY THE NUMBER IS 5462 MY BAD I WAS CONFUSED AT WHAT I WAS LOOKING FOR
NOW TO INSERT */

INSERT INTO film_actor (actor_id, film_id, last_update, addANewActor) VALUES (201, 789);

