drop table if exists posts;
drop table if exists users;

create table users (
id serial primary key,
username varchar(20),
password varchar(300),
profile_pic text
);

create table posts (
id serial primary key,
title varchar(45),
img text,
content text,
author_id integer references users(id)
);