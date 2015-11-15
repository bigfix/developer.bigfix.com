FROM centos:7

# Install node.js
RUN curl -sL https://rpm.nodesource.com/setup_5.x | bash -
RUN yum install -y nodejs gcc-c++ make

# The qna binary requires the __BESData directory to exist for the rpm inspector
# to work.
RUN mkdir -p /var/opt/BESClient/__BESData/__Global/

# Copy the app to the container
RUN mkdir -p /var/www/relevance/evaluate
COPY . /var/www/relevance/evaluate
RUN cd /var/www/relevance/evaluate && npm install

# Make the RPM inspector work. It needs to run 'qna' as 'nobody'.
RUN chmod a+rx /var/www/relevance/evaluate/bin && \
  chmod a+rx /var/www/relevance/evaluate/bin/qna

# Run the app
WORKDIR /var/www/relevance/evaluate
ENV PORT=5002
EXPOSE 5002
CMD ["node", "."]
