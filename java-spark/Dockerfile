FROM java:8 

# Install maven
RUN apt-get update
RUN apt-get install -y maven

WORKDIR /spark
Add . /spark

RUN mvn package
#Replace target/java-spark-jar-with-dependencies.jar with the name and description specified by the maven-assembly-plugin in your pom.xml
CMD ["/usr/lib/jvm/java-8-openjdk-amd64/bin/java", "-jar", "target/java-spark-jar-with-dependencies.jar"]

