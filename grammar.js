module.exports = grammar({
  name: "lyr",

  rules: {
    source_file: $ => repeat($._line),

    _line: $ => choice(
      $.tagged_line,
      $.section_line,
      $.blank_line
    ),

    tagged_line: $ => seq(
      field("tag", $.tag),
      ":",
      field("text", $.text),
      optional("\n")
    ),

    section_line: $ => seq(
      field("section", $.section),
      optional("\n")
    ),

    tag: $ => choice(
      "or",
      "pa"
    ),

    section: $ => /\[[^\]\n]+\]/,

    text: $ => /[^\n]*/,

    blank_line: $ => /\n/
  }
});
