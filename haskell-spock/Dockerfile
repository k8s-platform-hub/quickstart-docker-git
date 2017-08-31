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
<<<<<<< HEAD
CMD stack exec haskell-spock
=======
CMD stack exec haskell-spock-exe
>>>>>>> b0e7d169e4b79859a83f968ce2e524d677e56fd3
