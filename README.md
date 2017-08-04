## Heroku Create App
    
    - heroku login
    - heroku container:login || docker login --username=_ --password=$(heroku auth:token) registry.heroku.com
    - heroku create
    
    - docker build -t registry.heroku.com/mysterious-forest-66057/web:latest .
    
    - heroku container:push web --app <heroku_app_name>
      * heroku container:push web --app mysterious-forest-66057
    or
    - docker tag <image> registry.heroku.com/<app>/<process-type>
    - docker push registry.heroku.com/<app>/<process-type>

## Push any changes to your App

     - make local code changes to your app then run the below   
     - heroku login
     - heroku container:login || docker login --username=_ --password=$(heroku auth:token) registry.heroku.com
     - heroku container:push web --app mysterious-forest-66057

## If you lost connection to your app just run the below command    
        
    - heroku open -a mysterious-forest-66057
    
# Docker commands
    
##  Pull images
    
    - docker pull alejandroAPI
    - docekr pull registry.heroku.com/mysterious-forest-66057/web
    - docker pull selenium/hub
    - docker pull selenium/node-chrome
    
##  Run container (with suggested ports)
    
    - run api on port 3001
        $ docker run -p 3001:8080 registry.heroku.com/guarded-scrubland-78590/web
    - run grid (ports 4444 and 5555 as per docker-compose.yml)
        $ app/features/docker-compose up -d
    - Run app pointing to localAPI -> USE IP from ifconfig or ipconfig (but you must be on a LAN or internet) - look a creating a dev env 
        $ APP_ENV=local npm start
    or
    - Build docker image for the web app and link to API
    
## Help commands
    
    - abstract your local IP to use something like <alejandro> so that your code and test can use this
        * created updatehost.sh to update the osx hosts file
        *  run with `sudo sh updatehost.sh` 

## Running Local as a test environment

    - spin up selenium grid and API using docker compose 
        `$ cd app/features/
       
       # below shell script only updates in linux/osx, also if you change network connection
         your IP will change so clean up you hosts file manually
         
         $ sudo sh support/updatehost.sh
         $ docker-compose up -d
         $ cd ..
         $ npm run local
    - after running your environment locally then you can run the cucumber test (use node 6.11.1)
        $ cd app
        $ npm run test
    
