FROM mhart/alpine-node:7.10

#Install deps
RUN mkdir /app
COPY app/package.json /app/package.json
RUN cd /app && npm install && npm install -g http-server

#Add all source code
ADD app /app/
RUN cd /app && npm run build

#Default command
WORKDIR /app/build
CMD ["http-server"]
