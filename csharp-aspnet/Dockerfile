FROM microsoft/dotnet:1.1-sdk-msbuild
RUN mkdir /src
WORKDIR /src
ADD app/src/ /src
RUN dotnet restore
RUN dotnet build
CMD dotnet run
