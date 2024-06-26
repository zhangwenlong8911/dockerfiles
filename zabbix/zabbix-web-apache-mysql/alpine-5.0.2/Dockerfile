FROM cr.loongnix.cn/library/alpine:3.11.11

LABEL maintainer="wangweijie@loongson.cn"

LABEL org.opencontainers.image.title="Zabbix web-interface (Apache, MySQL)" \
      org.opencontainers.image.authors="Alexey Pustovalov <alexey.pustovalov@zabbix.com>" \
      org.opencontainers.image.vendor="Zabbix LLC" \
      org.opencontainers.image.url="https://zabbix.com/" \
      org.opencontainers.image.description="Zabbix web-interface based on Apache2 web server with MySQL database support" \
      org.opencontainers.image.licenses="GPL v2.0"

STOPSIGNAL SIGTERM

RUN set -eux && \
    addgroup -S -g 1995 zabbix && \
    adduser -S \
            -D -G zabbix -G root \
            -u 1997 \
            -h /var/lib/zabbix/ \
            -H \
        zabbix && \
    mkdir -p /etc/zabbix && \
    mkdir -p /etc/zabbix/web && \
    apk add --clean-protected --no-cache \
            apache2 \
            bash \
            curl \
            mariadb-client \
            mariadb-connector-c \
            php7-apache2 \
            php7-bcmath \
            php7-ctype \
            php7-gd \
            php7-gettext \
            php7-json \
            php7-ldap \
            php7-mbstring \
            php7-mysqli \
            php7-session \
            php7-simplexml \
            php7-sockets \
            php7-fileinfo \
            php7-xmlreader \
            php7-xmlwriter && \
    apk add --clean-protected --no-cache --no-scripts apache2-ssl && \
    rm -f "/etc/apache2/conf.d/default.conf" && \
    rm -f "/etc/apache2/conf.d/ssl.conf" && \
    sed -ri \
        -e 's!^(\s*CustomLog)\s+\S+!\1 /proc/self/fd/1!g' \
        -e 's!^(\s*ErrorLog)\s+\S+!\1 /proc/self/fd/2!g' \
        "/etc/apache2/httpd.conf" && \
    sed -ri \
        -e 's!^(\s*PidFile)\s+\S+!\1 "/tmp/httpd.pid"!g' \
        "/etc/apache2/conf.d/mpm.conf" && \
    sed -i 's/Listen 80/Listen 8080/g' /etc/apache2/httpd.conf && \
    rm -rf "/var/run/apache2/" && \
    rm -rf /var/cache/apk/*

ARG MAJOR_VERSION=5.0
ARG ZBX_VERSION=${MAJOR_VERSION}.2
ARG ZBX_SOURCES=https://git.zabbix.com/scm/zbx/zabbix.git

ENV TERM=xterm ZBX_VERSION=${ZBX_VERSION} ZBX_SOURCES=${ZBX_SOURCES}
LABEL org.opencontainers.image.documentation="https://www.zabbix.com/documentation/${MAJOR_VERSION}/manual/installation/containers" \
      org.opencontainers.image.version="${ZBX_VERSION}" \
      org.opencontainers.image.source="${ZBX_SOURCES}"

COPY ["conf/etc/", "/etc/"]

COPY ["zabbix-5.0.2" ,"/usr/share/zabbix-5.0.2"]

RUN set -eux && \
    apk add --no-cache --virtual build-dependencies \
            gettext \
            git && \
    mkdir /usr/share/zabbix/ && \
    cp -R /usr/share/zabbix-${ZBX_VERSION}/ui/* /usr/share/zabbix/ && \
    rm -rf /usr/share/zabbix-${ZBX_VERSION}/ && \
    cd /usr/share/zabbix/ && \
    rm -f conf/zabbix.conf.php && \
    rm -rf tests && \
    ./locale/make_mo.sh && \
    ln -s "/etc/zabbix/web/zabbix.conf.php" "/usr/share/zabbix/conf/zabbix.conf.php" && \
    chown --quiet -R zabbix:root /etc/zabbix/ /usr/share/zabbix/include/defines.inc.php /usr/share/zabbix/modules/ && \
    chgrp -R 0 /etc/zabbix/ /usr/share/zabbix/include/defines.inc.php /usr/share/zabbix/modules/ && \
    chmod -R g=u /etc/zabbix/ /usr/share/zabbix/include/defines.inc.php /usr/share/zabbix/modules/ && \
    chown --quiet -R zabbix:root /etc/apache2/ /etc/php7/ && \
    chgrp -R 0 /etc/apache2/ /etc/php7/ && \
    chmod -R g=u /etc/apache2/ /etc/php7/ && \
    apk del --purge --no-network \
            build-dependencies && \
    rm -rf /var/cache/apk/*
EXPOSE 8080/TCP 8443/TCP
WORKDIR /usr/share/zabbix
VOLUME [/etc/ssl/apache2 /usr/share/zabbix/modules/]
COPY ["docker-entrypoint.sh", "/usr/bin/"]
USER 1997
ENTRYPOINT ["docker-entrypoint.sh"]
CMD ["/usr/sbin/httpd", "-D", "FOREGROUND"]
