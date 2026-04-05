import XCTest
import SwiftTreeSitter
import TreeSitterLyr

final class TreeSitterLyrTests: XCTestCase {
    func testCanLoadGrammar() throws {
        let parser = Parser()
        let language = Language(language: tree_sitter_lyr())
        XCTAssertNoThrow(try parser.setLanguage(language),
                         "Error loading Lyr grammar")
    }
}
