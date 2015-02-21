class Property < Liquid::Tag
  def initialize(tag_name, property, tokens)
    @property = property.strip
    super
  end

  def render(context)
    site = context.registers[:site]
    property = site.data['language']['properties'][@property]

    dir = site.in_source_dir('_includes')

    if (property['type'] == 'cast')
      file = File.join(dir, 'cast.html')
    else 
      file = File.join(dir, 'property.html')
    end

    partial = Liquid::Template.parse(File.read(file))

    context.stack do
      context['include'] = { 'property' => property }
      partial.render!(context)
    end
  end
end

Liquid::Template.register_tag('property', Property)
