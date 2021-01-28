FROM node

ADD yarn.lock /yarn.lock
ADD package.json /package.json

ENV PUBLIC_URL="/raven-dashboard"

ENV NODE_PATH=/node_modules
ENV PATH=$PATH:/node_modules/.bin
RUN yarn

WORKDIR /app
ADD . /app

EXPOSE 3000
EXPOSE 35729

ENTRYPOINT ["/bin/bash", "/app/run.sh"]
CMD ["start"]
