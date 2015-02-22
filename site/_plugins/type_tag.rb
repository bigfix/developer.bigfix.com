require_relative 'render_include'

class Type < Liquid::Tag
  def initialize(tag_name, type, tokens)
    @type = type.strip
    super
  end

  def render(context)
    render_include context, 'type.html', { 'type' => @type }
  end
end

Liquid::Template.register_tag('type', Type)
