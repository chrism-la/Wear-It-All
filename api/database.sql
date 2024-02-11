CREATE DATABASE "WearItAgain"
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LOCALE_PROVIDER = 'libc'
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;
-- 
CREATE TABLE public.items
(
    item_id serial NOT NULL,
    name character varying NOT NULL,
    image character varying NOT NULL,
    PRIMARY KEY (item_id)
);

INSERT INTO public.items(item_id, name, image)VALUES (1, 'shirts', 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
INSERT INTO public.items(item_id, name, image)VALUES (2, 'shirts', 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2hpcnR8ZW58MHx8MHx8fDA%3D');
INSERT INTO public.items(item_id, name, image)VALUES (3, 'shirts', 'https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNoaXJ0fGVufDB8fDB8fHww');
INSERT INTO public.items(item_id, name, image)VALUES (4, 'shirts', 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2hpcnR8ZW58MHx8MHx8fDA%3D');
INSERT INTO public.items(item_id, name, image)VALUES (5, 'shirts', 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHNoaXJ0fGVufDB8fDB8fHww');
INSERT INTO public.items(item_id, name, image)VALUES (6, 'shirts', 'https://images.unsplash.com/photo-1554568218-0f1715e72254?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fHNoaXJ0fGVufDB8fDB8fHww');
INSERT INTO public.items(item_id, name, image)VALUES (7, 'pants', 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
INSERT INTO public.items(item_id, name, image)VALUES (8, 'pants', 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGFudHN8ZW58MHx8MHx8fDA%3D');
INSERT INTO public.items(item_id, name, image)VALUES (9, 'pants', 'https://images.unsplash.com/photo-1590159983013-d4ff5fc71c1d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHBhbnRzfGVufDB8fDB8fHww');
INSERT INTO public.items(item_id, name, image)VALUES (10, 'pants', 'https://images.unsplash.com/photo-1548883354-7622d03aca27?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fHBhbnRzfGVufDB8fDB8fHww');
INSERT INTO public.items(item_id, name, image)VALUES (11, 'sweaters', 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
INSERT INTO public.items(item_id, name, image)VALUES (12, 'sweaters', 'https://images.unsplash.com/photo-1519804270019-39e929a7afb5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHN3ZWF0ZXJzfGVufDB8fDB8fHww');
INSERT INTO public.items(item_id, name, image)VALUES (13, 'sweaters', 'https://images.unsplash.com/photo-1527424803383-098895227b9f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHN3ZWF0ZXJzfGVufDB8fDB8fHww');
INSERT INTO public.items(item_id, name, image)VALUES (14, 'sweaters', 'https://plus.unsplash.com/premium_photo-1673757100765-5735ad708306?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjV8fHN3ZWF0ZXJzfGVufDB8fDB8fHww');
INSERT INTO public.items(item_id, name, image)VALUES (15, 'hats', 'https://images.unsplash.com/photo-1521369909029-2afed882baee?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
INSERT INTO public.items(item_id, name, image)VALUES (16, 'hats', 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aGF0c3xlbnwwfHwwfHx8MA%3D%3D');