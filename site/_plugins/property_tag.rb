require_relative 'render_include'

class Property < Liquid::Tag
  def initialize(tag_name, property, tokens)
    @tag_name = tag_name
    @property = property.strip
    super
  end

  def render(context)
    site = context.registers[:site]
    property = site.data['language']['properties'][@property]
    render_include context, @tag_name + '.html', { 'property' => property }
  end
end

Liquid::Template.register_tag('cast', Property)
Liquid::Template.register_tag('property', Property)
