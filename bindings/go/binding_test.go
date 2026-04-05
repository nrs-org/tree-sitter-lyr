package tree_sitter_lyr_test

import (
	"testing"

	tree_sitter "github.com/tree-sitter/go-tree-sitter"
	tree_sitter_lyr "github.com/nrs-org/tree-sitter-lyr/bindings/go"
)

func TestCanLoadGrammar(t *testing.T) {
	language := tree_sitter.NewLanguage(tree_sitter_lyr.Language())
	if language == nil {
		t.Errorf("Error loading Lyr grammar")
	}
}
