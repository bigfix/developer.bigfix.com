class Type < Liquid::Tag
  def initialize(tag_name, type, tokens)
    @type = type.strip
    super
  end

  def render(context)
    dir = context.registers[:site].in_source_dir('_includes')
    file = File.join(dir, 'type.html')

    partial = Liquid::Template.parse(File.read(file))

    context.stack do
      context['include'] = { 'type' => @type }
      partial.render!(context)
    end
  end
end

Liquid::Template.register_tag('type', Type)
