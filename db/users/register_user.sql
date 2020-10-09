insert into users (
  username,
  password
) values (
  ${username},
  ${hash}
);

select * from users
where username = ${username};