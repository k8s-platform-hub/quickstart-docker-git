FROM haskell:latest

RUN mkdir /usr/src/app
COPY haskell-spock.cabal /usr/src/app/haskell-spock.cabal
WORKDIR /usr/src/app

RUN stack init

RUN stack install base
RUN stack install Spock
RUN stack install text

COPY . /usr/src/app
RUN pwd
RUN stack build --fast
CMD stack exec haskell-spock
