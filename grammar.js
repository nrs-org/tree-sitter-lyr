module.exports = grammar({
  name: "orpa",

  rules: {
    source_file: $ => repeat($._line),

    _line: $ => choice(
      $.tagged_line,
      $.blank_line
    ),

    tagged_line: $ => seq(
      field("tag", $.tag),
      ":",
      field("text", $.text),
      optional("\n")
    ),

    tag: $ => choice(
      "or",
      "pa"
    ),

    text: $ => /[^\n]*/,

    blank_line: $ => /\n/
  }
});
