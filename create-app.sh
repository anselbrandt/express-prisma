#!/bin/sh

docker build -t anselbrandt/express-prisma:latest .
docker push anselbrandt/express-prisma:latest
ssh root@anselbrandt.dev << HERE
dokku apps:create express-prisma
dokku domains:set express-prisma anselbrandt.dev
dokku proxy:ports-set express-prisma http:80:5000
dokku certs:add express-prisma < cert-key.tar
docker pull anselbrandt/express-prisma:latest
docker tag anselbrandt/express-prisma:latest dokku/express-prisma
dokku tags:deploy express-prisma
docker system prune -a
y
HERE

exit 0
