# need an OS to run my api
# tell docker where to get the OS from
# this image has alpine OS with node in it
FROM node:14

WORKDIR /M5-Frontend

COPY package.json package-lock.json ./

# install node dependencies
RUN npm install 

# copy my app files to this  
# source destination
# dot means cd 
COPY . .

# build my api
RUN npm run build

# export a port
EXPOSE 3000

# run my api
# whatever is given in CMD is used to run whenever the container is up
CMD ["npm", "start"]
