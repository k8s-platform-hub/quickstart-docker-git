FROM java:8 

# Install maven
RUN apt-get update
RUN apt-get install -y maven

WORKDIR /spring-boot
Add . /spring-boot

RUN mvn package

#Replace java-spring-boot-1.0-SNAPSHOT.jar with <artifactId>-<version>.jar specified in your pom.xml 
CMD ["/usr/lib/jvm/java-8-openjdk-amd64/bin/java", "-jar", "target/java-spring-boot-1.0-SNAPSHOT.jar"]

