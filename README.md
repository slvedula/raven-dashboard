# Raven Dashboard
This is a dashboard for Raven Platform.

## Environment Variables
There are multiple environment variables that should be set:
* PUBLIC_URL
  * This is a React variable used to set the base URL for an application appended to URLs within the app, to ensure the proper functioning of file paths and routing. The default is "/", meaning the app resides at the root of the host.
* REACT_APP_FHIR_SERVER_URL
  * Full URL Path to the Raven FHIR Server FHIR endpoint. (Example: https://someserver.com/raven-fhir-server/fhir/)
* REACT_APP_FHIR_IMPORT_SUBMIT_API_URL
  * Full URL Path to the Raven API endpoint (Example: https://someserver.com/raven-import-and-submit-api/)

There are multiple ways these environment variables may be set.
1. Using the DotEnv(.env) file found in the root of the project.
   * This is the recommended approach, though you should be careful not to expose this file (such as by commiting to a GitHub repository) if it contains any sensitive 
     information. Best practice is to create a ``.env.local`` file which React will use as an 
     override to the standard `.env` file. The `.env.local`file is included in the `.gitignore`by default so that it is not accidentally checked into version control.
1. Set as local environment variables for the host system.
1. Pass them as build arguments to Docker.
1. Provide them as build arguments in CI/CD pipelines configuration. (Drone.io, etc.)

*Please note that the environment variables must be available to React at **build time**. Some
approaches may not work depending on your deployment environment and method. For example, local host
environment variables will not be able to be directly read by a build occurring inside a Docker image.*

**Example DotEnv(.env) Configuration**
```
PUBLIC_URL=/
REACT_APP_FHIR_SERVER_URL=https://someserver.com/raven-fhir-server/fhir/
REACT_APP_FHIR_IMPORT_SUBMIT_API_URL=https://someserver.com/raven-import-and-submit-api/
```
**Example Docker Build with Build Arguments Command**
```
docker build -f Dockerfile.prod --build-arg REACT_APP_FHIR_SERVER_URL=https://someserver.com/raven-fhir-server/fhir/ --build-arg REACT_APP_FHIR_IMPORT_SUBMIT_API_URL=https://someserver.com/raven-import-and-submit-api/ -t ravendashboard .
```
