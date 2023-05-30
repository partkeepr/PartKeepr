
FROM mariadb:10.1
RUN apt-get update && apt-get install -y netcat && apt-get clean

COPY command.sh /usr/local/bin/initdb.sh
COPY dump.sql /dump.sql

RUN mkdir /data
COPY data.tar.gz /data.tar.gz

CMD /usr/local/bin/initdb.sh
