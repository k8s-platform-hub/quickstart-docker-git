FROM ingensi/oracle-jdk

RUN yum install -y yum-plugin-ovl && yum install -y unzip
RUN curl -O http://downloads.typesafe.com/typesafe-activator/1.3.12/typesafe-activator-1.3.12.zip 
RUN unzip typesafe-activator-1.3.12.zip -d / && rm typesafe-activator-1.3.12.zip && chmod a+x /activator-dist-1.3.12/bin/activator
ENV PATH $PATH:/activator-dist-1.3.12/bin

WORKDIR /app
ADD . /app

CMD ["activator", "run"]

