FROM centos:7

# Install node.js
RUN curl -sL https://rpm.nodesource.com/setup_5.x | bash -
RUN yum install -y nodejs gcc-c++ make # 2015-12-04

# The qna binary requires the __BESData directory to exist for the rpm inspector
# to work.
RUN mkdir -p /var/opt/BESClient/__BESData/__Global/

# Run the app
RUN mkdir -p /var/www/api/relevance/evaluate
WORKDIR /var/www/api/relevance/evaluate
ENV NODE_ENV=production
ENV PORT=5002
EXPOSE 5002
CMD ["node", "."]

# Copy the app to the container.
COPY . /var/www/api/relevance/evaluate

# 1. run npm install
# 2. unzip the example database
RUN cd /var/www/api/relevance/evaluate && \
  npm install --production && \
  gunzip bin/chinook.db

# Make the RPM inspector work. It needs to run 'qna' as 'nobody'.
RUN chmod a+rx /var/www/api/relevance/evaluate/bin && \
  chmod a+rx /var/www/api/relevance/evaluate/bin/qna
