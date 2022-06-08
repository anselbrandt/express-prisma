#!/bin/sh

docker build -t anselbrandt/express-prisma:latest .
docker push anselbrandt/express-prisma:latest
ssh root@anselbrandt.dev << HERE
docker pull anselbrandt/express-prisma:latest
docker tag anselbrandt/express-prisma:latest dokku/express-prisma
dokku tags:deploy express-prisma
docker system prune -a
y
HERE

exit 0