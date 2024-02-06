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
    PRIMARY KEY (item_id)
);

INSERT INTO public.items(item_id, name) VALUES (1, 'shirt');
INSERT INTO public.items(item_id, name) VALUES (2, 'pants');
INSERT INTO public.items(item_id, name) VALUES (3, 'sweater');