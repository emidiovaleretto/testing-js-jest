/**
 * @jest-environment jsdom
 */

const { game } = require("../game");

beforeEach(() => {
  let fs = require("fs");
  let fileContents = fs.readFileSync("index.html", "utf8");
  document.open();
  document.write(fileContents);
  document.close();
});

describe("game object contains correct key", () => {
  test("score key exists", () => {
    expect("score" in game).toBe(true);
  });
  test("currentGame key exists", () => {
    expect("currentGame" in game).toBe(true);
  });
  test("playerMoves key exists", () => {
    expect("playerMoves" in game).toBe(true);
  });
  test("choices key exists", () => {
    expect("choices" in game).toBe(true);
  });
  test("choices contains correct ids", () => {
    expect(game.choices).toEqual(["button1", "button2", "button3", "button4"]);
  });
});
