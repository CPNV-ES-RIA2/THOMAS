WORKDIR /frontend
COPY ./frontend/package.json /frontend/package.json
COPY ./frontend/tailwind.config.js /frontend/tailwind.config.js
COPY ./src /frontend/src
COPY ./public /frontend/public
RUN npm install
CMD ["npm", "start"]