require_relative 'render_include'

module Jekyll
  class ExampleBlock < Liquid::Block
    def initialize(name, params, tokens)
      @example = {
        'question' => '',
        'answers' => [],
        'errors' => []
      }

      tokens[0].split("\n").each do |token|
        if token.strip =~ /^Q:(.*)/
          @example['question'] = $1.strip
        elsif token.strip =~ /^A:(.*)/
          @example['answers'].push $1.strip
        elsif token.strip =~ /^E:(.*)/
          @example['errors'].push $1.strip
        end
      end

      super
    end

    def render(context)
      params = { 'example' => @example }
      render_include context, 'example.html', params
    end
  end
end

Liquid::Template.register_tag('example', Jekyll::ExampleBlock)
