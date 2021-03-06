#Grab the latest alpine image
FROM mhart/alpine-node:6.1.0

# Add our code
ADD ./app /app
WORKDIR /app

# Run the app.
CMD ["npm", "start"]