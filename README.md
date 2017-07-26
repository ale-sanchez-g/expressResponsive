## Heroku load
    
    - heroku login
    - heroku container:login || docker login --username=_ --password=$(heroku auth:token) registry.heroku.com
    - heroku create
    
    - docker build -t registry.heroku.com/mysterious-forest-66057/web:latest .
    
    - heroku container:push web --app <heroku_app_name>
      * heroku container:push web --app mysterious-forest-66057
    or
    - docker tag <image> registry.heroku.com/<app>/<process-type>
    - docker push registry.heroku.com/<app>/<process-type>
    
    add locally
    
    - heroku open -a mysterious-forest-66057
    
# Running automation in a full docker env
    
  Pull images
    
    - docker pull alejandroAPI
    - docekr pull registry.heroku.com/mysterious-forest-66057/web
    - docker pull selenium/hub
    - docker pull selenium/node-chrome
    
  Run container (with suggested ports)
    
    - run api on port 3001
        $ docker run -p 3001:8080 registry.heroku.com/guarded-scrubland-78590/web
    - run grid (ports 4444 and 5555 as per docker-compose.yml)
        $ app/features/docker-compose up -d
    - Run app pointing to localAPI -> USE IP from ifconfig or ipconfig (but you must be on a LAN or internet) - look a creating a dev env 
        $ APP_ENV=local npm start
    or
    - Build docker image for the web app and link to API
    - abstract your local IP to use something like <alejandro> so that your code and test can use this
        * created updatehost.sh to update the osx hosts file
        *  run with `sudo sh updatehost.sh` 

