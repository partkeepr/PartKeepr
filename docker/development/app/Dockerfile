
ARG SRC_IMAGE=partkeepr/base-dev:latest
FROM ${SRC_IMAGE}

# Setup PHP settings
RUN sed 's@;date.timezone =@date.timezone = UTC@;s@max_execution_time = .*@max_execution_time = 72000@;s@memory_limit = .*@memory_limit = 512M@' /usr/local/etc/php/php.ini-development > /usr/local/etc/php/php.ini

COPY entrypoint.sh /entrypoint.sh
COPY user-entrypoint.sh /user-entrypoint.sh
COPY phpinfo.php /var/www/html/phpinfo.php
COPY parameters.defaults.php /parameters.defaults.php

WORKDIR /var/www/pk

ENTRYPOINT ["/entrypoint.sh"]
CMD ["docker-php-entrypoint", "apache2-foreground"]
