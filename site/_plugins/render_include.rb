def render_include(context, name, params)
  dir = context.registers[:site].in_source_dir('_includes')
  partial = Liquid::Template.parse(File.read(File.join(dir, name)))

  context.stack do
    context['include'] = params
    partial.render!(context)
  end
end
