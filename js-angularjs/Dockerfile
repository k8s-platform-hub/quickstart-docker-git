FROM node:6

#Install deps
RUN npm install -g http-server grunt-cli bower yo generator-karma generator-angular
RUN mkdir /app
COPY app/package.json /app/package.json
COPY app/bower.json /app/bower.json
RUN cd /app && npm install
RUN cd /app && bower --allow-root install 

#Add all source code
ADD app /app/
WORKDIR /app

# Execute build
RUN grunt build 

#Default command
CMD ["/app/runserver.sh"]
