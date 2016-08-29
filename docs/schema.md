#Schema Information

## users

column name     | data type | details
----------------|-----------|------------------------------------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null, indexed, unique
email           | string    |
city            | string    |
motto           | text      |
session_token   | string    | not null, indexed, unique
picture_url     | string    |

## restaurants

column name | data type | details
------------|-----------|-------------------------------------------------------
id          | integer   | not null, primary key
name        | string    | not null
city        | string    | not null
website     | string    |
telephone   | string    |
coordinates | string    | not null
category_id | integer   | not null, foreign key (references categories), indexed
owner_id    | integer   | not null, foreign key (references users), indexed
price_range | integer   |

## categories

column name | data type | details
------------|-----------|----------------------
id          | integer   | not null, primary key
title       | string    | not null, indexed

## reviews

column name   | data type | details
--------------|-----------| -------------------------------------------------------
id            | integer   | not null, primary key
reviewer_id   | integer   | not null, foreign key (references users), indexed
restaurant_id | integer   | not null, foreign key (references restaurants), indexed
description   | text      | 
votes         | integer   | not null, in [1...5]
picture_url   | string    |
