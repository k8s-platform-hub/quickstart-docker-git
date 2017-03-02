FROM mhart/alpine-node:7.6.0

WORKDIR /src

# Add app source files
ADD app/src /src

#install node modules
RUN npm install

CMD ["node", "server.js"]
