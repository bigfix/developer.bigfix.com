.PHONY: clean site

clean: 
	vagrant destroy --force

site: 
	vagrant up && \
	vagrant ssh --command '/vagrant/site/build'
