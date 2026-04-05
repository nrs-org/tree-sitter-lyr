module.exports = grammar({
  name: "lyr",

  rules: {
    source_file: $ => repeat($._line),

    _line: $ => choice(
      $.tagged_line,
      $.section_line,
      $.comment_line,
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

    comment_line: $ => seq(
      field("comment", $.comment),
      optional("\n")
    ),

    tag: $ => choice(
      "or",
      "pa",
      "tl"
    ),

    section: $ => /\[[^\]\n]+\]/,

    comment: $ => token(choice(
      seq("#", /.*/),
      seq("//", /.*/),
      seq(";", /.*/)
    )),

    text: $ => /[^\n]*/,

    blank_line: $ => /\n/
  }
});
