FROM centos:7

# Install node.js
RUN curl -sL https://rpm.nodesource.com/setup_5.x | bash -
RUN yum install -y nodejs gcc-c++ make

# Copy the app to the container
RUN mkdir -p /var/www/relevance/evaluate
COPY . /var/www/relevance/evaluate
RUN cd /var/www/relevance/evaluate && npm install

# Run the app
WORKDIR /var/www/relevance/evaluate
ENV PORT=5002
EXPOSE 5002
CMD ["node", "."]
