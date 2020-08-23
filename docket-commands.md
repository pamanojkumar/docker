docker info

# list out the images avaialble in your docker
docker images

# run the ubuntu image and list out the items available
docker run ubuntu ls

# List the containers details in docker
docker ps 
docker ps -a

# run the ubuntu image with container name as testname and echo the value
docker run --name testname ubuntu echo "welcome to docker"

# creating our own images on top of exiiting image. So we can use both our's and existing one. For this need to add the details in docker file and build it before run the image.

# tag the changes to imagename(first-node-test) at the time of build with name on workdirectory(.)
docker build -t <name_of_image> .
docker build -t first-node-test .

# run the newly created image(first-node-test)
docker run first-node-test

# run the localhost with maping with our host without container name (5003-our machine, 8081-container's host)
docker run -p 5003:8081 first-node-test

# run with container name and image name
docker run -p 5003:8081 --name <container_name> <name_of_image>

# run the localhost with diteached mode
docker run -p 5003:8081 -d first-node-test

# running with ditached mode with container name as first-docker-test and image name as first-node-test
docker run -p 5003:8081 -d --name first-docker-test first-node-test   

# check the logs of particular container
# https://www.level-up.one/deep-dive-into-docker-logging/
docker logs -f <container name or contianer id>

# manuallt install plugin inside container. but it will deleted once container stopped. these can be added to docker file. so everytime no need to install
apt-get install vim
apt-get update

# execute in iterative mode with bash or shell.
docker exec -it <container name> /bin/bash -> from here u can access files from the container. like ls, cat etc..
cat app.js

# stop the contianer and remove the container
docker stop <container name or container id>
docker rm <container name or container id>

# list out the network details
docker network ls

# inspect the avaialble network
docker inspect <networkname>

# docker run in python. port 5000 is default for python. we are mapping that to our port 5004
docker run -p 5004:5000 --name first-docker-python py-flask-app


# Docker-compose
# docker compose needs yaml/yml file in the directory to run it. this will create on default network as "docker_default"
docker-compose up
docker-compose up -d

# force build even image available
docker-compose up -d --build


# access two apps running on the same network
# 1. we can customize in the code
# 2. we can ping in the network to see the results
  # docker exec -it <container name> app
docker exec -it docker_nodejs_1 bin/bash
# ping <appname - refer in yml file for corresponding name>
ping pythonapp

# the below command will connect node container to python container and print the values
curl http://pythonapp:5000  


# sample.txt file mount with volumes. In yml files volumes is used to mount the dynaic creating files to the container


# command will stop your containers, but it won’t remove them
docker-compose stop

#  command will stop your containers, but it also removes the stopped containers as well as any networks that were created
docker-compose down

# the -v flag to remove all volumes too. This is great for doing a full blown reset on your environment by running
docker-compose down -v

# remove images
docker rmi <imagename>

# remove all images not referenced by any container.
docker image prune -a

#  docker with client server setup and todo
# client - will be created using create-react-app and setup the docker and code.
# server - python
# db - mongodb

# server setup
1. create docker, requirements.txt and app.py
2. docker build -t <image-name> .
3. docker images - will show the created image
4. docker run -p hostport:containerport --name <container name> <image-name>
    docker run -p 5000:5000 --name todo-ser todo-server
5. create docker-compose to hold all the details in one place and network on outside of server folder and run the below command.
docker-compose up --build

# client setup
1. install create-react-app
2. include dockerfile
3. include ignore like gitignore, dockerignore,yarn
4. add the details to docker compose file which is created commonl for both server and client in outside of client/server folder
5. yarn add axios

# run tomcat on local 8888 port in detach mode
docker run -it -d -p 8888:8080 tomcat:8.0

# image history
docker history imagename

# docket commit change and create new image
docker commit container-id dockerreponame:tag

# push images into docker hub with imagename
1. docker tag <existing imageid> dockerhubid/reponame:tagname
2. docker login --username=<username>
password:
3. docker push dockerhubid/reponame:tagname

# docker machine details
docker-machine ls

