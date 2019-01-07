# Repast AMONG Model Frontend
## Overview
This project is a React application providing the frontend for the [Repast AMONG model](https://github.com/gaschwanden/AMONG). It is designed specifically to interact with the [repast-amongmodel-backend](https://github.com/brunslo/repast-amongmodel-backend) project.

## Usage
The project can be built directly using npm (tested against Node 11.3):
```
npm run build
``` 
It can also be built and packaged into a Docker container directly, without any Node-specific dependencies:
```docker
docker build -t repast-amongmodel-frontend-0.1.0-SNAPSHOT
```