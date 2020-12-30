# Docker configurations

## Folder structure

The Docker images are composed of different layers and can be used in different ways. Here is a short overview:

| Foldername | Description |
|----|----|
| `base` | A basic image containing the required php extensions to run PartKeepr. It will be generated as a starting point for any further images. |
| `development` | This folder contains a complete setup using docker-compose suitable for developing PartKeepr. It can be used for local unit testing and debugging. |

## Details on the base image

The image installs a set of php extensions, composer, and configures apache to serve `/var/www/pk/web`. That is, PartKeepr should be installed in `/var/www/pk`.

This image is not ready to run but serves as a basis for the other images related to PartKeepr.

## Details on the development installation

The docker-compose file registers multiple container services. The main PartKeepr application is called `app`. The database is a basic configuration with `mariadb:10.1` for compatibility. Third, there is a service called `initdb`. Its purpose is to restore the database and `data` folder to a pristine state. This one should normally not be used unless one wants to reset the database.

**Note:** There needs to be a useful default inserted into the initdb. At the moment it only clears out the database to be valid but containing no parts at all. Exactly the situtation you have after a fresh installation. Some test data might be useful here.

## The main development image

Apart from some additional tools in the docker image mainly an xdebug extension for php is installed.

The image is intended to work on the main sources as checked out. This allows easy updating and testing cycles.

The local files typically belong to the developer user. This causes problems when PartKeepr does not have sufficient permissions or if the UID does not match. To overcome this, the entry point script changes the UID of the `www-data` user in the image to some UID provided by the environment variable `GITHUB_DEBUG_UID`. Any access is thus made from the same rights as the development user outside and all newly created files will belong to `www-data`.

If no explicit command is given, the service starts apache.

Before apache is started, some preparations are made. First composer is called to update any dependencies. If the user has set `PARTKEEPR_FORCE_UPDATE` to `yes`, a set of steps are run that represent a setup (see [the wiki](https://wiki.partkeepr.org/wiki/Running_PartKeepr_from_GIT#Updating)). All cron jobs are run upon restarting to avoid additional messages here.

Calling a manual command is possible as well.
Then, no initialation script is run and no composer run is performed.
Just do something like `docker-compose run --rm app composer update`.

By setting `ADD_PHPINFO_FILE` to `1`, the developer can add a file to the web folder that serves a `phpinfo()` command.

There is also a commented sketch in the docker-compose how to debug and develop the Dockerfile.

## Setting up a development environment

In order to start using the suggested development environment a few steps are required to set them up for the first time.
This guide assumes, you have just freshly checked out the PartKeer repository from git.

- Navigate in a console to the folder `docker/development`.
- Copy the file `github.env.dist` to `github.env`.
- Create a github personal access token in the settings on github. You need no additional rights. Put the generated token into the file `github.env` where the `XXX...XXX` markers are.
    - Alternatively, you can also remove the line in the `github.env` file. The reason for this setup is that github poses a rate limit on the number of accesses. When using the `composer` command much, these rate limits might be triggered easily. By logging in, the limits are pushed to higher values.

- Call `docker-compose pull` to fetch all images from the docker hub. Alternatively you could [build the images manually](#building-the-images-manually).
- Now you need to fire up the database and let it initialize. This is done by callng `docker-compose up -d db`. You can peek into the process by `docker-compose logs -f db`. Wait for a message that the server is ready for connections and listening on port 3306. Using `<Ctrl><c>`, you can exit from the logs.
- Build the `initdb` image by calling `docker-compose build initdb`. This will take a few moments as it builds a docker image.
  By default the line `RESET_DATABASE: 'yes'` in the file `docker-compose.yml` is commented. This is to avoid accidentially removing your data. Uncomment the line. Then:
  - Initialize the data by calling `docker-compose up initdb`.
  - Recomment the line in the `docker-compose.yml` file you just uncommented.
- Now, you can fire up the main container by calling `docker-compose up -d app`.
- The container will initialize some dependencies. This might take some time as well. Again using `docker-compose logs -f app` you can peek into the process and with `<Ctrl><c>` you can return to the console.
   There might be some error messages regarding missing tables.
- The partkeepr instance is avaliable at http://127.0.0.1:8082/.
  - Note: If you don't set `PARTKEEPR_FORCE_UPDATE` to `yes` in the `docker-compose` file on your first run you will get a white screen as you need to start the [setup](http://127.0.0.1:8082/setup/) once. Just accept the defaults but do not create a new set of users (keep the existing ones) and select HTTP Basic authentication.
- You may or may or not want to set up a cron job as described. The check is disabled by default.
  - Alternatively, you can run the cron command manually with `php app/console partkeepr:cron:run` after logging in to the container with `docker exec -it partkeepr_dev_app_1 bash`.

## Building the images manually

It is possible to build the image manually. The main purpose is to test, debug and alter the docker setup. In order to perform the build from scratch:

- Go to `/docker/base-dev/`.
- Call `docker build -t partkeepr/base-dev:latest .`. You can also give another tag name but you need to adopt later.
- Go to `/docker/development`.
- Alter the `docker-compose.yml` file.
  - Uncomment all the lines in the `app` service that start with the `build:` name as the comment indicates.
  - You might want to alter the `SRC_IMAGE` if you tagged with a different name above.
  - You might want to alter the name of the generated image to not overwrite the local `partkeepr/deevelopment:latest` image.
- Call `docker-compose build app`.
