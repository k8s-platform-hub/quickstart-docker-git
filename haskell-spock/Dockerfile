FROM haskell:latest
WORKDIR haskell-spock

RUN mkdir haskell-spock

COPY . haskell-spock

RUN cd haskell-spock

RUN stack init
RUN stack build --fast

CMD stack exec haskell-spock-exe
