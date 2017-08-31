FROM haskell:latest
RUN mkdir haskell-spock
COPY haskell-spock.cabal haskell-spock
WORKDIR haskell-spock

RUN stack init
RUN stack build --fast

COPY . haskell-spock
RUN stack build --fast
CMD stack exec haskell-spock-exe
