FROM mhart/alpine-node:7.6.0

#create app dir
RUN mkdir /app

# Add app source files
ADD myapp/src/ /app/

#install node modules
RUN cd /app && npm install

WORKDIR /app

CMD ["node", "server.js"]
