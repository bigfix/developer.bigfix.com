class Property < Liquid::Tag
  def initialize(tag_name, property, tokens)
    @property = property.strip
    super
  end

  def render(context)
    site = context.registers[:site]

    dir = site.in_source_dir('_includes')
    file = File.join(dir, 'property.html')

    partial = Liquid::Template.parse(File.read(file))

    property = site.data['language']['properties'][@property];

    context.stack do
      context['include'] = { 'property' => property }
      partial.render!(context)
    end
  end
end

Liquid::Template.register_tag('property', Property)
